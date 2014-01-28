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
    paths: {
        "lib": "../bower_components",
        "app": "app",
        "handlebars.runtime": "../bower_components/handlebars/handlebars.runtime.amd",
        "template":"./templates/template",
        "jquery":"../bower_components/jquery/jquery",
        "lodash":"../bower_components/lodash/dist/lodash",
        "backbone":"../bower_components/backbone/backbone",
        "schema":"../bower_components/Backbone.Schema/src/backbone/schema",
        "globalize":"../bower_components/globalize/lib/globalize"
    },
    shim: {
        backbone : {
            deps: ["lodash"],
            exports: "Backbone"
        },
        schema: {
            deps: ["backbone","globalize"],
            exports: "Backbone.Schema"

        }
    }
  });