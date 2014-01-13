
define(['lib/reqwest/reqwest'],function(reqwest) {
  var linkTitle = (document.title);
  var linkLocation = (window.location);
  var selectedText = '';
  var webItem = {};



  // Get the selection
  // Note: This method of getting the selected text works on Safari for Mac and  on iPad as long as the bookmark is in the bookmarks bar. It does not work on iPhone.
  
  if (window.getSelection) {
    selectedText = window.getSelection();
  } else if (document.getSelection) {
    selectedText = document.getSelection();
  } else if (document.selection) {
    selectedText = document.selection.createRange().text;
  }

  webItem.url = linkLocation.toString();
  webItem.title = linkTitle.toString();
  webItem.content = selectedText.toString();


  reqwest({
    url: 'http://localhost:8001/webitem',
    method: 'post',
    type: 'json',
    processData: false,
    crossOrigin: true,
    data: JSON.stringify(webItem),
    contentType: 'application/json',
    success: function(resp) {
      console.log(resp);
    }
  });



});