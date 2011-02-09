/*
 * Shoutr - A decentralized social networking service
 * 
 * Copyright (C) 2010 Laurent Eschenauer <laurent@eschenauer.be>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Backend = global.backend
,	Http = require("../support/http");

function collection(app) {
	app.post('/', function(req, res) {
		var buffer = '';
		req.on('data', function(c) {
			buffer += c.toString();
		}).on('end', function() {
			var entry = JSON.parse(buffer);
			Backend.updates.add(entry, function(err, result) {
				if (err) {
					console.log("Error: " + err.message);
					return Http.response(res, err.message, 500, "text/plain");
				} else {
					return Http.response(res, JSON.stringify(result), 200, "application/json");
				}
			});
		});
	});
}

exports.collection = collection;