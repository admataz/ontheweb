ontheweb
========

** very much still in alpha and active development **

Collecting and collating items from the web. 

This is a very early version of a node.js based web excerpt and bookmarking tool. Still very much work in progress

- uses restify as a node.js rest server
- uses mongoosejs to provide schema and talk to mongodb
- uses grunt for building and deployment

Currently (2014-01-14)
----------------------
- simple restful server with the ability to add (POST), edit (PUT), view (GET) and delete (DELETE) items
- a bookmarklet to collect excerpts and URLs from web pages in the browser

Planned
-------
- collate collected items into item collections
- front end management interface 
- integration with social media platforms for searching and collecting posts from user timelines
- authentication with 3rd party sites (aim is to use this in an existing Drupal website - this integration may be a separate project)
