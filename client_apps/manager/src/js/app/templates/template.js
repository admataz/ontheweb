define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['collectItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\" id=\"collectForm\">\n  \n<div style=\"padding:0 10px;display:inline-block; width:200px; text-align:right;\">\n  <label for=\"channel-search\">Do a search</label>\n  <input type=\"radio\" name=\"channel\" value=\"search\" id=\"channel-search\" checked=\"checked\">\n  \n  <div>or <label for=\"channel-user\">List user's posts</label>\n  <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-user\">\n  </div>\n\n</div>\n\n<label for=\"platform\">on</label>\n  <select name=\"platform\" id=\"platform\">\n    <option value=\"twitter\">Twitter</option>\n    <option value=\"facebook\">Facebook</option>\n    <option value=\"googleplus\">Google+</option>\n  </select> \n\nfor\n  <input type=\"text\" name=\"q\" value=\"\" placeholder=\"username or search term\">\n\n  \n\n\n  <input type=\"submit\" name=\"submit\" value=\"go\">\n\n\n</form>\n\n\n<h3>Results</h3>\n\n<div id=\"results\">\n  \n  \n</div>";
  });
templates['layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav id=\"mainNav\" class=\"navbar navbar-default\" role=\"navigation\">\n     \n</nav>\n\n\n\n<div id=\"ontheweb-container\"></div>    \n   \n\n";
  });
templates['mainNav'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-pills\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"collect\">Collect</a></li>\n  <li><a href=\"webitems\">Web Items</a></li>\n</ul>";
  });
templates['webItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <input type=\"checkbox\" name=\"webitem\" value=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0._id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

  buffer += "<article>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allowEdit), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \n  <img src=\"";
  if (stack1 = helpers.authorAvatarUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.authorAvatarUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  \n  <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <div class=\"itemcontent\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.content); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n  \n  <div class=\"postdata\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">original</a> posted at ";
  if (stack1 = helpers.datePosted) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.datePosted); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " by <a href=\"";
  if (stack1 = helpers.authorProfileUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.authorProfileUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a> on <a href=\"";
  if (stack1 = helpers.sourceSiteUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.sourceSiteUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.sourceSiteName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.sourceSiteName); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </div>\n  \n\n\n</article>\n\n\n";
  return buffer;
  });
templates['webItemsList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n<div id=\"itemsgrid\"></div>\n</div>";
  });
return templates;
});