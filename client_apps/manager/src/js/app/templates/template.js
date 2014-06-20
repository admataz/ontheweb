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


  buffer += "<div id=\"collate-items\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <p>NOTE: this view is deprecated - and will be removed soon. Keeping it here so you can search existing items until the 'Already Saved' tab is ready in <b>collect</b>.</p>\n</div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-6 \">\n  \n    \n  <div class=\"search-panel \">\n    \n  </div>\n\n  \n    \n  </div>\n\n  <div class=\"col-xs-6\">\n    \n    <div class=\"save-panel\">\n\n    </div>\n    \n  </div>\n</div>\n\n\n<div class=\"row dd-panels\">\n  <div class=\"col-xs-6\"><div class=\"results-panel  well  well-sm\"></div></div>\n  <div class=\"col-xs-6\"><div class=\"selected-panel well  well-sm\"></div></div>\n</div>\n\n\n\n\n</div>";
  return buffer;
  });
templates['collate/saveForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\" id=\"saveCollection\" role=\"form\" class=\"form-inline\">\n  <div class=\"form-group\">\n  <select name=\"saveTo\"   class=\"form-control\">\n    <option value=\"\">No Item Collection</option>\n    <option value=\"new\">New Item Collection</option>\n  </select>\n  </div>\n  \n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input type=\"text\" name=\"collectionName\" value=\"\" class=\"form-control\" placeholder=\"Collection Name\">\n      <span class=\"input-group-btn\">\n        <input type=\"submit\" value=\"Save\" name=\"submitgo\" class=\"btn btn-default\" />\n      </span>\n    </div>\n  </div>\n\n</form>\n";
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
  buffer += "\n\n  <a href=\"#\" class=\"save-btn\">Save</a>\n</div>\n\n";
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


  buffer += "<div id=\"collect-items\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <p>Find items on the web.</p>\n</div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-6 \">\n  \n    \n  <div class=\"search-panel \">\n    \n  </div>\n\n  \n    \n  </div>\n\n  <div class=\"col-xs-6\">\n    \n    <div class=\"save-panel\">\n\n    </div>\n    \n  </div>\n</div>\n\n\n<div class=\"row dd-panels\">\n  <div class=\"col-xs-6\"><ul class=\"results-panel  well  well-sm list-group\"></ul></div>\n  <div class=\"col-xs-6\"><div class=\"selected-panel well  well-sm list-group\"></div></div>\n</div>\n\n\n\n\n</div>";
  return buffer;
  });
templates['collect/saveForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <option value=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n    ";
  return buffer;
  }

  buffer += "<form action='#' id=\"resultsForm\">\n  <input type=\"hidden\" name=\"saveToNewName\" id=\"saveTo-new\" value=\"\">\n\n\n<div class=\"form-group\"  id=\"saveTo-formgroup\">\n<label>Item Collection</label>\n  <select name=\"saveTo\"   class=\"form-control\" id=\"saveTo-selector\">\n    <option value=\"\"></option>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  </div>\n\n<div class=\"form-group\">\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Save items\" data-loading-text=\"Saving...\" class=\"btn btn-primary\" id=\"save-items-btn\" />\n</div>\n\n<a href=\"#\" id=\"empty-current-collection\">empty the current list</a>\n\n</form>";
  return buffer;
  });
templates['collect/searchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<ul class=\"nav nav-tabs\">\n  <li class=\"active\"><a href=\"#ontheweb\" data-toggle=\"tab\">On The Web</a></li>\n  <li><a href=\"#alreadysaved\" data-toggle=\"tab\">Already saved</a></li>\n</ul>\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"ontheweb\">\n    <form action=\"#\" id=\"collectForm\" role=\"form\" class=\"form-inline\">\n      <div class=\"form-group\">\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"platform\" value=\"twitter\" checked=\"checked\"> Twitter\n        </label>\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"platform\" value=\"facebook\"> Facebook\n        </label>\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"platform\" value=\"googleplus\"> Google+\n        </label>\n      </div>\n\n      <div class=\"form-group search-options\" id=\"search-options-twitter\">\n        <div class=\"checkbox\">\n          <label for=\"channel-twitter-search\">\n            <input type=\"radio\" name=\"channel\" value=\"search\" id=\"channel-twitter-search\" checked=\"checked\"> all tweets\n          </label>\n          <label for=\"channel-twitter-user\">\n            <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-twitter-user\"> user's timeline (enter username)\n          </label>\n        </div>\n        <a href=\"#\" id=\"advanced-twitter-search-trigger\" class=\"btn btn-sm btn-link\">Advanced search</a>\n      </div>\n      <div class=\"form-group search-options\" id=\"search-options-facebook\">\n        <div class=\"checkbox\">\n          <label for=\"channel-facebook-user-posts\">\n            <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-facebook-user-posts\" > user's posts\n          </label>\n          <label for=\"channel-search-facebook-pages\">\n            <input type=\"radio\" name=\"channel\" value=\"page\" id=\"channel-search-facebook-pages\"> search for a Facebook page\n          </label>\n          \n        </div>\n      </div>\n      <div class=\"form-group search-options\" id=\"search-options-googleplus\">\n        <div class=\"checkbox\">\n          <label for=\"channel-search-googleplus-user\">\n            <input type=\"radio\" name=\"channel\" value=\"user\" id=\"channel-search-googleplus-user\"> user's posts\n          </label>\n          <label for=\"channel-search-googleplus-people\">\n            <input type=\"radio\" name=\"channel\" value=\"search-people\" id=\"channel-search-googleplus-people\"> search for a profile\n          </label>\n          <label for=\"channel-search-googleplus-activities\">\n            <input type=\"radio\" name=\"channel\" value=\"search-activities\" id=\"channel-search-googleplus-activities\"> all activities\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"search terms\">\n          <span class=\"input-group-btn\">\n          <input type=\"submit\" value=\"Go\" name=\"submitgo\" class=\"btn btn-default\" />\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"tab-pane\" id=\"alreadysaved\">\n    <form action=\"#\" id=\"alreadySavedForm\" role=\"form\" class=\"form-inline\">\n    <input type=\"hidden\" name=\"platform\" value=\"collected\" > \n      <div class=\"form-group\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"platform_www\" value=\"1\" checked=\"checked\"> Web Clips\n        </label>\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"platform_twitter\" value=\"1\"> Twitter\n        </label>\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"platform_facebook\" value=\"1\"> Facebook\n        </label>\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"platform_googleplus\" value=\"1\"> Google+\n        </label>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" value=\"\" class=\"form-control\" placeholder=\"search terms\">\n          <span class=\"input-group-btn\">\n          <input type=\"submit\" value=\"Go\" name=\"submitgo\" class=\"btn btn-default\" />\n          </span>\n        </div>\n      </div>\n    </form>\n\n\n    </div>\n  </div>\n  <div class=\"form-group\" id=\"advanced-twitter-search-wrapper\">\n  </div>\n  <div class=\"form-group\" id=\"advanced-facebook-search-wrapper\">\n  </div>\n  <div class=\"form-group\" id=\"advanced-googleplus-search-wrapper\">\n  </div>";
  return buffer;
  });
templates['collect/searchResultFacebookPage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"list-group-page-item media\" data-itemid=\"";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <h5 class=\"media-heading\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n  <h6>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.category)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h6>\n   <div  class=\"pull-left\">  \n    <img src=\"https://graph.facebook.com/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/picture?type=square\"  class=\"media-object\">\n  </div>\n\n  <div><a href=\"#\" data-pageid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"show-page-posts\">posts</a></div>\n  <div><a href=\"#\" data-pageid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"show-page-feed\">feed</a></div>\n</li>\n\n";
  return buffer;
  });
templates['collect/searchResultFacebookPost'] = template(function (Handlebars,depth0,helpers,partials,data) {
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

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <a href=\"#\">view ";
  if (helper = helpers.pageCommentsCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageCommentsCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " comments</a>\n  ";
  return buffer;
  }

  buffer += "<li class=\"list-group-item media\" data-itemid=\"";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n  <h6 class=\"media-heading\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h6>\n\n  <div  class=\"pull-left\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorAvatarUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  class=\"media-object\">\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.content), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <a class=\"more-info-button\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">post info</a>\n  <div class=\"postdata\">\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">original</a> posted at "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.datePosted)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " by <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorProfileUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.usernameID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</a> on <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </div>\n  \n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.imageUrl), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pageCommentsCount), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"#\" class=\"save-btn\">Save</a>\n</li>";
  return buffer;
  });
templates['collect/searchResultGoogleplusPeople'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"list-group-page-item media\" data-itemid=\"";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <h5 class=\"media-heading\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n  <h6>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.category)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h6>\n   <div class=\"pull-left\">  \n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  class=\"media-object\">\n  </div>\n\n  <a href=\"#\" data-personid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"show-page-posts\">See profile posts</a>\n</li>\n\n";
  return buffer;
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

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <a href=\"#\" class=\"show-replies-btn\">load "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.hasReplies)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " comments/replies</a>\n  ";
  return buffer;
  }

  buffer += "<li class=\"list-group-item media saved-already-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.alreadyCollected)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-itemid=\"";
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
    + "\" target=\"_blank\">original</a> posted at "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.datePosted)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " by <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorProfileUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.authorName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.usernameID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</a> on <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.sourceSiteName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </div>\n\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.imageUrl), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.atts)),stack1 == null || stack1 === false ? stack1 : stack1.hasReplies), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <a href=\"#\" class=\"save-btn\">Save</a>\n</li>\n\n";
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
templates['collect/searchTwitterAdvanced'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"modal fade\" id=\"advanced-twitter-search\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Advanced Twitter Search</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"advanced-searchfields\" id=\"advanced-twitter-search-form\">\n    <fieldset>\n      <legend class=\"t1-legend\"><span>Words</span></legend>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">All of these words</span>\n          <input type=\"text\" name=\"ands\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">This exact phrase</span>\n          <input type=\"text\" name=\"phrase\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">Any of these words</span>\n          <input type=\"text\" name=\"ors\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">None of these words</span>\n          <input type=\"text\" name=\"nots\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">These hashtags</span>\n          <input type=\"text\" name=\"tag\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">Written in</span>\n          <select class=\"t1-select\" id=\"lang\" name=\"lang\">\n            <option value=\"all\" selected=\"selected\">Any Language</option>\n              <option value=\"am\">Amharic (አማርኛ)</option>\n              <option value=\"ar\">Arabic (العربية)</option>\n              <option value=\"bg\">Bulgarian (Български)</option>\n              <option value=\"bn\">Bengali (বাংলা)</option>\n              <option value=\"bo\">Tibetan (བོད་སྐད)</option>\n              <option value=\"chr\">Cherokee (ᏣᎳᎩ)</option>\n              <option value=\"da\">Danish (Dansk)</option>\n              <option value=\"de\">German (Deutsch)</option>\n              <option value=\"dv\">Maldivian (ދިވެހި)</option>\n              <option value=\"el\">Greek (Ελληνικά)</option>\n              <option value=\"en\">English (English)</option>\n              <option value=\"es\">Spanish (Español)</option>\n              <option value=\"fa\">Persian (فارسی)</option>\n              <option value=\"fi\">Finnish (Suomi)</option>\n              <option value=\"fr\">French (Français)</option>\n              <option value=\"gu\">Gujarati (ગુજરાતી)</option>\n              <option value=\"iw\">Hebrew (עברית)</option>\n              <option value=\"hi\">Hindi (हिंदी)</option>\n              <option value=\"hu\">Hungarian (Magyar)</option>\n              <option value=\"hy\">Armenian (Հայերեն)</option>\n              <option value=\"in\">Indonesian (Bahasa Indonesia)</option>\n              <option value=\"is\">Icelandic (Íslenska)</option>\n              <option value=\"it\">Italian (Italiano)</option>\n              <option value=\"iu\">Inuktitut (ᐃᓄᒃᑎᑐᑦ)</option>\n              <option value=\"ja\">Japanese (日本語)</option>\n              <option value=\"ka\">Georgian (ქართული)</option>\n              <option value=\"km\">Khmer (ខ្មែរ)</option>\n              <option value=\"kn\">Kannada (ಕನ್ನಡ)</option>\n              <option value=\"ko\">Korean (한국어)</option>\n              <option value=\"lo\">Lao (ລາວ)</option>\n              <option value=\"lt\">Lithuanian (Lietuvių)</option>\n              <option value=\"ml\">Malayalam (മലയാളം)</option>\n              <option value=\"my\">Myanmar (မြန်မာဘာသာ)</option>\n              <option value=\"ne\">Nepali (नेपाली)</option>\n              <option value=\"nl\">Dutch (Nederlands)</option>\n              <option value=\"no\">Norwegian (Norsk)</option>\n              <option value=\"or\">Oriya (ଓଡ଼ିଆ)</option>\n              <option value=\"pa\">Panjabi (ਪੰਜਾਬੀ)</option>\n              <option value=\"pl\">Polish (Polski)</option>\n              <option value=\"pt\">Portuguese (Português)</option>\n              <option value=\"ru\">Russian (Русский)</option>\n              <option value=\"si\">Sinhala (සිංහල)</option>\n              <option value=\"sv\">Swedish (Svenska)</option>\n              <option value=\"ta\">Tamil (தமிழ்)</option>\n              <option value=\"te\">Telugu (తెలుగు)</option>\n              <option value=\"th\">Thai (ไทย)</option>\n              <option value=\"tl\">Tagalog (Tagalog)</option>\n              <option value=\"tr\">Turkish (Türkçe)</option>\n              <option value=\"ur\">Urdu (ﺍﺭﺩﻭ)</option>\n              <option value=\"vi\">Vietnamese (Tiếng Việt)</option>\n              <option value=\"zh\">Chinese (中文)</option>\n          </select>\n        </label>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <legend class=\"t1-legend\"><span>People</span></legend>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">From these accounts</span>\n          <input type=\"text\" name=\"from\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">To these accounts</span>\n          <input type=\"text\" name=\"to\">\n        </label>\n      </div>\n      <div class=\"txt\">\n        <label class=\"t1-label\">\n          <span class=\"td\">Mentioning these accounts</span>\n          <input type=\"text\" name=\"ref\">\n        </label>\n      </div>\n    </fieldset>\n\n    \n\n    <fieldset>\n      <legend class=\"t1-legend\"><span>Dates</span></legend>\n      <div class=\"txt\">\n        <label for=\"since\" class=\"t1-label td\">From this date</label>\n        <div class=\"input-daterange input-group\" id=\"datepicker\">\n          <input type=\"text\" class=\"input-sm form-control input-since\" name=\"since\" id=\"since\">\n          <label for=\"until\" class=\"t1-label input-group-addon\">to</label>\n          <input type=\"text\" class=\"input-sm form-control input-until\" name=\"until\" id=\"until\">\n        </div>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <legend class=\"t1-legend\"><span>Other</span></legend>\n      <div class=\"chk\">\n        <span class=\"td\">Select:</span>\n        <span class=\"chk-inner\">\n          <label class=\"t1-label\"><input name=\"attd\" type=\"checkbox\" value=\":)\"><span>Positive :)</span></label>\n          <label class=\"t1-label\"><input name=\"attd\" type=\"checkbox\" value=\":(\"><span>Negative :(</span></label>\n          <label class=\"t1-label\"><input name=\"attd\" type=\"checkbox\" value=\"?\"><span>Question ?</span></label>\n          <label class=\"t1-label\"><input name=\"include\" type=\"checkbox\" value=\"retweets\"><span>Include retweets</span></label>\n        </span>\n      </div>\n    </fieldset>\n\n    \n\n</form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Search</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n\n    \n\n\n";
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
  var buffer = "";


  buffer += "<ul class=\"nav nav-pills\">\n  \n  <li><a href=\"collect\">Collect</a></li>\n  <li><a href=\"collate\">Collate</a></li>\n  \n</ul>";
  return buffer;
  });
templates['webitems/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n<div id=\"itemsgrid\"></div>\n</div>";
  });
return templates;
});