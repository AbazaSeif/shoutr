<?xml version="1.0" encoding="UTF-8"?><feed xml:lang="en-US" xmlns="http://www.w3.org/2005/Atom" xmlns:thr="http://purl.org/syndication/thread/1.0" xmlns:georss="http://www.georss.org/georss" xmlns:activity="http://activitystrea.ms/spec/1.0/" xmlns:media="http://purl.org/syndication/atommedia" xmlns:poco="http://portablecontacts.net/spec/1.0" xmlns:ostatus="http://ostatus.org/schema/1.0" xmlns:statusnet="http://status.net/schema/api/1/"><id>http://{{host}}/updates/{{username}}.atom</id><title>Latest updates from {{fullname}}</title><updated>{{updated}}</updated><link rel="alternate" href="http://{{host}}/users/{{username}}" type="text/html"/><link rel="salmon" href="http://{{host}}/salmon/{{username}}" /><link rel="http://salmon-protocol.org/ns/salmon-replies" href="http://{{host}}/salmon/{{username}}"/><link rel="http://salmon-protocol.org/ns/salmon-mention" href="http://{{host}}/salmon/{{username}}"/><link rel="hub" href="http://{{host}}/push/hub" /><link rel="salmon" href="http://{{host}}/salmon/user/{{username}}" /><link rel="self" href="http://{{host}}/updates/{{username}}.atom" type="application/atom+xml"/><author><name>{{fullname}}</name><uri>http://{{host}}/users/{{username}}</uri></author>{{#updates}}<entry><id>{{id}}</id><updated>{{updated}}</updated><title>{{title}}</title><content type="html">{{content}}</content><activity:verb>http://activitystrea.ms/schema/1.0/{{verb}}</activity:verb><activity:object-type>http://activitystrea.ms/schema/1.0/{{type}}</activity:object-type></entry>{{/updates}}</feed>