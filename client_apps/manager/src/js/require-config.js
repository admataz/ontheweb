/*
Copyright (c) 2013 Adam Davis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
require.config({
    config: {
        "app/config": {
            "api": {
                "url": "http://localhost:8001/"
            },
            "admin": {
                "url": "http://localhost:8010/",
                "path" : ""
            }
        }
    },
    baseUrl: 'js',
    paths: {
        "lib": "../bower_components",
        "app": "app",
        "handlebars.runtime": "../bower_components/handlebars/handlebars.runtime.amd",
        "template": "./app/templates/template",
        "jquery": "../bower_components/jquery/jquery",
        "underscore": "../bower_components/lodash/dist/lodash.underscore",
        "backbone": "../bower_components/backbone/backbone",
        "backbone-pageable": "../bower_components/backbone-pageable/lib/backbone-pageable",
        "bootstrap": "../bower_components/sass-bootstrap/dist/js/bootstrap",
        "backgrid": "../bower_components/backgrid/lib/backgrid",
        "backgrid-filter": "../bower_components/backgrid-filter/backgrid-filter",
        "backgrid-moment-cell": "../bower_components/backgrid-moment-cell/backgrid-moment-cell",
        "backgrid-paginator": "../bower_components/backgrid-paginator/backgrid-paginator",
        "backgrid-select-all": "../bower_components/backgrid-select-all/backgrid-select-all",
        "backgrid-select2-cell": "../bower_components/backgrid-select2-cell/backgrid-select2-cell",
        "backgrid-text-cell": "../bower_components/backgrid-text-cell/backgrid-text-cell",
        "schema": "../bower_components/Backbone.Schema/src/backbone/schema",
        "globalize": "../bower_components/globalize/lib/globalize"
    },
    shim: {
        "backbone": {
            deps: ["underscore"],
            exports: "Backbone"
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.modal"
        },
        "backgrid": {
            deps: ["backbone", "underscore"],
            exports: "Backgrid"
        },
        "backgrid-filter": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "backgrid-moment-cell": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "backgrid-paginator": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "backgrid-select-all": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "backgrid-select2-cell": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "backgrid-text-cell": {
            deps: ["backgrid"],
            exports: "Backgrid.Extension"
        },
        "schema": {
            deps: ["backbone", "globalize"],
            exports: "Backbone.Schema"
        },
        "lib/jquery-ui/ui/jquery.ui.core": {
            deps: ["jquery"],
            exports: "jQuery"
        },
        "lib/jquery-ui/ui/jquery.ui.widget": {
            deps: ["jquery"],
            exports: "jQuery"
        },
        "lib/jquery-ui/ui/jquery.ui.mouse": {
            deps: ["jquery"],
            exports: "jQuery"
        },
        "lib/jquery-ui/ui/jquery.ui.sortable": {
            deps: ["jquery"],
            exports: "jQuery"
        },
        "lib/jquery-ui/ui/jquery.ui.resizable": {
            deps: ["jquery"],
            exports: "jQuery"
        }

    }
});