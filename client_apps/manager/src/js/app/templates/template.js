define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['collectItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\" id=\"collectForm\" role=\"form\" class=\"form-inline\">\n  <div class=\"form-group\">\n\n<div class=\"checkbox\">\n  \n  <label for=\"channel-search\">search\n  <input type=\"radio\" name=\"channel\" value=\"search\" id=\"channel-search\" checked=\"checked\">\n  </label>\n  \n  <label for=\"channel-user\">user's posts\n  <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-user\"></label>\n  \n  </div>\n\n</div>\n\n</div>\n\n<div class=\"form-group\">\n  <select name=\"platform\" id=\"platform\"  class=\"form-control\">\n    <option value=\"twitter\">Twitter</option>\n    <option value=\"facebook\">Facebook</option>\n    <option value=\"googleplus\">Google+</option>\n  </select> \n</div>\n\n\n<div class=\"form-group\">\n\n  <div class=\"input-group\">\n      <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"username or search term\">\n      <span class=\"input-group-btn\">\n        <input type=\"submit\" value=\"Go\" name=\"submitgo\" class=\"btn btn-default\" />\n      </span>\n    </div>\n</div>\n\n</form>\n\n\n<h3>Results</h3>\n\n<div id=\"collect-items-results\">\n  \n  \n</div>";
  });
templates['collectItemsResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<div class=\"list-group-item media\">\n  <label for=\"result-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div  class=\"pull-left\">  \n   <input type=\"checkbox\" name=\"webitem\" value=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"result-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    <img src=\"";
  if (stack2 = helpers.authorAvatarUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.authorAvatarUrl); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"  class=\"media-object\">\n  </div>\n  </label>\n\n  <div class=\"media-body\">\n  <h4 class=\"media-heading\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.title); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  ";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.content); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n\n  <div class=\"postdata\">\n    <a href=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.url); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">original</a> posted at ";
  if (stack2 = helpers.datePosted) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.datePosted); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " by <a href=\"";
  if (stack2 = helpers.authorProfileUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.authorProfileUrl); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.authorName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.authorName); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " (";
  if (stack2 = helpers.usernameID) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.usernameID); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + ")</a> on <a href=\"";
  if (stack2 = helpers.sourceSiteUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.sourceSiteUrl); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.sourceSiteName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.sourceSiteName); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n  </div>\n</div>\n";
  return buffer;
  }

  buffer += "<form action='#'>\n<div class=\"form-group\">\n  <button class=\"btn btn-default\" type=\"button\">Save selected</button>\n</form>\n<div class=\"list-group\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</form>\n";
  return buffer;
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
templates['webItemsList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n<div id=\"itemsgrid\"></div>\n</div>";
  });
return templates;
});