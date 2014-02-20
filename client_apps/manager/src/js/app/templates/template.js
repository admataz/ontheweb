define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav id=\"mainNav\" class=\"navbar navbar-default\" role=\"navigation\">\n     \n</nav>\n\n\n\n<div id=\"ontheweb-container\"></div>    \n   \n\n";
  });
templates['mainnav'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-pills\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"collect\">Collect</a></li>\n  <li><a href=\"webitems\">Web Items</a></li>\n</ul>";
  });
templates['social_media_collect'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\">\n  <select name=\"platform\" id=\"platform\">\n    <option value=\"twitter\">Twitter</option>\n    <option value=\"facebook\">Facebook</option>\n    <option value=\"googleplus\">Google+</option>\n  </select> \n\n  <input type=\"text\" name=\"q\" value=\"\">\n\n  <label for=\"channel-search\">Platform Search</label>\n  <input type=\"radio\" name=\"channel\" value=\"search\" id=\"channel-search\">\n\n  <label for=\"channel-user\">Specific user or facebook page</label>\n  <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-user\">\n\n\n\n  <input type=\"submit\" name=\"submit\" value=\"go\">\n\n\n</form>\n\n\n<h3>Results</h3>\n\n<div id=\"results\">\n  \n  \n</div>";
  });
templates['webitems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n<div id=\"itemsgrid\"></div>\n</div>";
  });
return templates;
});