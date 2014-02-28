define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['collate/collectionPreview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n\n\n";
  }

function program3(depth0,data) {
  
  
  return "\n  Add items from the search results panel\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['collate/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div id=\"collate-items\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <p>Find items you have already collected from the web and compile them into groups.</p>\n</div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-6 \">\n  \n    \n  <div class=\"search-panel \">\n    \n  </div>\n\n  \n    \n  </div>\n\n  <div class=\"col-xs-6\">\n    \n    <div class=\"save-panel\">\n\n    </div>\n    \n  </div>\n</div>\n\n\n<div class=\"row dd-panels\">\n  <div class=\"col-xs-6\"><div class=\"results-panel  well  well-sm\"></div></div>\n  <div class=\"col-xs-6\"><div class=\"selected-panel well  well-sm\"></div></div>\n</div>\n\n\n\n\n</div>";
  return buffer;
  });
templates['collate/saveForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "      <form action=\"#\" id=\"saveCollection\" role=\"form\" class=\"form-inline\">\n    \n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"Collection Name\">\n          <span class=\"input-group-btn\">\n            <input type=\"submit\" value=\"Save\" name=\"submitgo\" class=\"btn btn-default\" />\n          </span>\n        </div>\n      </div>\n    \n    </form>\n";
  });
templates['collate/searchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "      <form action=\"#\" id=\"searchItems\" role=\"form\" class=\"form-inline\">\n      \n      <div class=\"form-group\">\n        <label for=\"platform-twitter-option\"><input type=\"checkbox\" name=\"platform-twitter\" value=\"1\" id=\"platform-twitter-option\"> Twitter</label>\n        <label for=\"platform-facebook-option\"><input type=\"checkbox\" name=\"platform-facebook\" value=\"1\" id=\"platform-facebook-option\"> Facebook</label>\n        <label for=\"platform-googleplus-option\"><input type=\"checkbox\" name=\"platform-googleplus\" value=\"1\" id=\"platform-googleplus-option\"> Google+</label>\n        <label for=\"platform-www-option\"><input type=\"checkbox\" name=\"platform-www\" value=\"1\" id=\"platform-www-option\"> General Web capture</label>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"username or search term\">\n          <span class=\"input-group-btn\">\n            <input type=\"submit\" value=\"Go\" name=\"submitgo\" class=\"btn btn-default\" />\n          </span>\n        </div>\n      </div>\n    \n    </form>\n";
  });
templates['collate/searchResultItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <a class=\"reveal-media-button\" href=\"";
  if (helper = helpers.imageUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">media</a>\n  <div class=\"mediadata\">\n    <p><img src=\"";
  if (helper = helpers.imageUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100%\"></p>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<div class=\"list-group-item media\" data-itemid=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  \n  <h6 class=\"media-heading\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h6>\n  \n  <div  class=\"pull-left\">  \n    <img src=\"";
  if (helper = helpers.authorAvatarUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorAvatarUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"  class=\"media-object\">\n  </div>\n  \n  <div class=\"media-body\">\n    <small>";
  stack1 = (helper = helpers.linkify || (depth0 && depth0.linkify),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.content), options) : helperMissing.call(depth0, "linkify", (depth0 && depth0.content), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n  </div>\n  \n  <a class=\"more-info-button\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">post info</a>\n  <div class=\"postdata\">\n    <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">original</a> posted at ";
  if (helper = helpers.datePosted) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datePosted); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\"";
  if (helper = helpers.authorProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.authorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.usernameId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.usernameId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</a> on <a href=\"";
  if (helper = helpers.sourceSiteUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceSiteUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.sourceSiteName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceSiteName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </div>\n\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.imageUrl), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n</div>\n\n";
  return buffer;
  });
templates['collate/searchResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n";
  if (helper = helpers.item) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.item); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<div class=\"list-group\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
templates['collect/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div id=\"collect-items\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <p>Find items on the web.</p>\n</div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-6 \">\n  \n    \n  <div class=\"search-panel \">\n    \n  </div>\n\n  \n    \n  </div>\n\n  <div class=\"col-xs-6\">\n    \n    <div class=\"save-panel\">\n\n    </div>\n    \n  </div>\n</div>\n\n\n<div class=\"row dd-panels\">\n  <div class=\"col-xs-6\"><div class=\"results-panel  well  well-sm\"></div></div>\n  <div class=\"col-xs-6\"><div class=\"selected-panel well  well-sm\"></div></div>\n</div>\n\n\n\n\n</div>";
  return buffer;
  });
templates['collect/saveForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action='#' id=\"resultsForm\">\n<h3>Results</h3>\n<div class=\"form-group\">\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Save selected\" data-loading-text=\"Saving...\" class=\"btn btn-primary\" id=\"save-items-btn\" />\n</div>\n<div id=\"collect-items-results\">\n  \n  \n</div>\n</form>";
  });
templates['collect/searchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\" id=\"collectForm\" role=\"form\" class=\"form-inline\">\n  <div class=\"form-group\">\n\n<div class=\"checkbox\">\n  \n  <label for=\"channel-search\">\n  <input type=\"radio\" name=\"channel\" value=\"search\" id=\"channel-search\" checked=\"checked\"> search all ||\n  </label>\n  \n  <label for=\"channel-user\">\n  <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-user\"> user's posts\n  </label>\n  \n  </div>\n\n</div>\n\n</div>\n\n<div class=\"form-group\">\n  <select name=\"platform\" id=\"platform\"  class=\"form-control\">\n    <option value=\"twitter\">Twitter</option>\n    <option value=\"facebook\">Facebook</option>\n    <option value=\"googleplus\">Google+</option>\n  </select> \n</div>\n\n\n<div class=\"form-group\">\n\n  <div class=\"input-group\">\n      <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"username or search term\">\n      <span class=\"input-group-btn\">\n        <input type=\"submit\" value=\"Go\" name=\"submitgo\" class=\"btn btn-default\" />\n      </span>\n    </div>\n</div>\n\n</form>";
  });
templates['collect/searchResultItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"media-body\">\n    <small>";
  stack1 = (helper = helpers.linkify || (depth0 && depth0.linkify),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.content), options) : helperMissing.call(depth0, "linkify", ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.content), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n  </div>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <a class=\"reveal-media-button\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.imageUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">media</a>\n  <div class=\"mediadata\">\n    <p><img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.imageUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"100%\"></p>\n  </div>\n  ";
  return buffer;
  }

  buffer += "\n\n<div class=\"list-group-item media\" data-itemid=\"";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  \n  <h6 class=\"media-heading\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h6>\n  \n  <div  class=\"pull-left\">  \n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorAvatarUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  class=\"media-object\">\n  </div>\n  \n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.content), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \n  <a class=\"more-info-button\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">post info</a>\n  <div class=\"postdata\">\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">original</a> posted at ";
  if (helper = helpers.datePosted) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datePosted); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\"";
  if (helper = helpers.authorProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.usernameId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</a> on <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </div>\n\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.imageUrl), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n</div>\n\n";
  return buffer;
  });
templates['collect/searchResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"list-group-item media\" data-itemid=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <label for=\"result-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div  class=\"pull-left\">  \n   <input type=\"checkbox\" name=\"webitem["
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "]\" value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"result-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    <img src=\"";
  if (helper = helpers.authorAvatarUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorAvatarUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"  class=\"media-object\">\n  </div>\n  </label>\n  <div class=\"media-body\">\n  <h6 class=\"media-heading\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h6>\n  ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.imageUrl), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"postdata\">\n    <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">original</a> posted at ";
  if (helper = helpers.datePosted) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datePosted); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\"";
  if (helper = helpers.authorProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.authorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.usernameID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.usernameID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</a> on <a href=\"";
  if (helper = helpers.sourceSiteUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceSiteUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.sourceSiteName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceSiteName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </div>\n\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <p><img src=\"";
  if (helper = helpers.imageUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></p>\n  ";
  return buffer;
  }

  buffer += "<form action='#' id=\"resultsForm\">\n<div class=\"form-group\">\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Save selected\" />\n</form>\n<div class=\"list-group\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</form>\n";
  return buffer;
  });
templates['global/layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n<nav id=\"mainNav\" class=\"navbar navbar-default\" role=\"navigation\"></nav>\n<div id=\"ontheweb-container\"></div>    \n</div>\n\n";
  });
templates['global/mainNav'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-pills\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"collect\">Collect</a></li>\n  <li><a href=\"collate\">Collate</a></li>\n  <li><a href=\"webitems\">Web Items</a></li>\n</ul>";
  });
templates['webitems/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n<div id=\"itemsgrid\"></div>\n</div>";
  });
return templates;
});