window.Webitemsapp=Ember.Application.create(),Webitemsapp.ApplicationAdapter=DS.RESTAdapter.extend({host:"http://localhost:8001"}),Webitemsapp.ApplicationSerializer=DS.RESTSerializer.extend({primaryKey:"_id"}),Webitemsapp.Webitem=DS.Model.extend({url:DS.attr("string"),title:DS.attr("string"),content:DS.attr("string"),imageUrl:DS.attr("string"),geotags:DS.attr("string"),authorName:DS.attr("string"),authorProfileUrl:DS.attr("string"),authorAvatarUrl:DS.attr("string"),sourceSiteName:DS.attr("string"),sourceSiteUrl:DS.attr("string"),sourceSiteLogoUrl:DS.attr("string"),createdAt:DS.attr("date"),datePosted:DS.attr("date"),dateLastValidated:DS.attr("date"),comment:DS.attr("string"),tags:DS.attr("string"),status:DS.attr("boolean")}),Webitemsapp.Router.reopen({rootURL:"/admin/"}),Webitemsapp.Router.map(function(){this.resource("webitems"),this.resource("webitem",{path:"webitem/:_id"})}),Webitemsapp.WebitemsRoute=Ember.Route.extend({model:function(){return this.store.find("webitem")}}),Webitemsapp.WebitemRoute=Ember.Route.extend({model:function(a){return this.store.find("webitem",a._id)}});