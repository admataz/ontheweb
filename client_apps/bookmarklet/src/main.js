define(['module', 'lib/reqwest/reqwest', 'lib/bonzo/bonzo', 'lib/qwery/qwery', 'lib/bean/bean'], function(module, reqwest, bonzo, qwery, bean) {


// can't seem to get require.js config.config module stuff to work - so remember to change this when publishing to live. 
  var hostURL = 'http://ontheweb.jit.su/webitem';
  // var hostURL = 'http://localhost:8001/webitem';


  var webItem = {};
  var saveWebItemOverlay;

  // emulate jquery


  function $(selector, context) {
    return bonzo(qwery(selector, context));
  }

  bean.setSelectorEngine(qwery);

  // From Instapaper's bookmarklet  - not using this right now - but useful for reference

  function getBasicPageInfo() {
    var canonical_url, links = document.getElementsByTagName('link'),
      params = {
        url: document.URL
      },
      i, title,
      // XPaths
      titleXPaths;
    // Attempt to get the canonical url
    canonical_url = getContentFromTag('meta', 'property', 'og:url');
    if (canonical_url) {
      params.canonical_url = canonical_url;
    } else {
      for (i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') === 'canonical') {
          params.canonical_url = links[i].getAttribute('href');
          break;
        }
      }
    }
    // Think about only grabbing the title if its canonical or parsed
    title = getContentFromTag('meta', 'property', 'og:title');
    if (!title) {
      title = document.title;
    }
    params.title = scrubTitle(title);
    return params;
  }


  // Get the selection
  // Note: This method of getting the selected text works on Safari for Mac and  on iPad as long as the bookmark is in the bookmarks bar. It does not work on iPhone.

  function collectWebItemData() {
    var linkTitle = (document.title);
    var linkLocation = (window.location);
    var selectedText = '';

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
  }





  function createOverlay() {
    var defaultStyle, overlayStyle, formStyle, inputStyle, overlayTemplate, formTemplate, form;


    if ($('#webItemBookmarkletOverlay').length) {
      $('#webItemBookmarkletOverlay').remove();
    }

    collectWebItemData();


    defaultStyle = {
      color: '#000',
      'font-family': 'Arial,sans-serif',
      // margin: '4px 0',
      // padding: '4px',
      'font-size': '14px',
    };


    overlayStyle = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      //supported from IE 7 - makes covering whole viewport easy
      top: '0',
      left: '0',
      zindex: '2147483647',
      //highest possible 32-bit integer 
      background: 'rgba(24,24,24,0.8)',
    };


    formStyle = {
      width: '640px',
      height: '480px',
      position: 'absolute',
      background: '#fff',
      left: '50%',
      top: '50%',
      border: '1px solid #fff',
      padding: '10px',
      marginLeft: '-320px',
      marginTop: '-240px'
    };


    inputStyle = {
    };

    overlayTemplate = '<div id="webItemBookmarkletOverlay"></div>';

    formTemplate = '<form><h1>Save this web item</h1>';
    formTemplate += '<div class="summary"><ul>';
    formTemplate += '<li><b>Title: </b>' + webItem.title + '</li>';
    formTemplate += '<li><b>URL: </b>' + webItem.url + '</li>';
    if(webItem.content.length){
      formTemplate += '<li><b>Excerpt:</b><div class="excerpt">“' + webItem.content + '”</div></li>';
    }
    formTemplate += '</ul></div>';
    formTemplate += '<div class="forminput"><label>Comment:</label><textarea id="webItemBookmarkletComment"></textarea></div><div class="forminput"><label>Tags:</label><textarea id="webItemBookmarkletTags"></textarea></div><div><input type="submit" value="save" id="webitemsave"><a href="#" id="webitemcancel">Cancel</a></form>';
    saveWebItemOverlay = bonzo(bonzo.create(overlayTemplate));
    form = bonzo(bonzo.create(formTemplate));
    // saveWebItemOverlay.css(overlayStyle);
    // form.css(formStyle);
    saveWebItemOverlay.append(form);
    bonzo(document.body).append(saveWebItemOverlay);

    // $('span,a,p,h3,h4,h5,input,label,textarea', form).css(defaultStyle);

    // $('#webItemBookmarkletComment', saveWebItemOverlay).css({
    //   'width': '100%',
    //   'height': '60px',
    //   'display': 'block'
    // });

    // $('#webItemBookmarkletTags', saveWebItemOverlay).css({
    //   'width': '100%',
    //   'height': '12px',
    //   'display':'block'
    // });

    // $('input', saveWebItemOverlay).css({
    //   'margin': '10px'
    // });

    bean.on(form.get(0), 'click', $('#webitemcancel'), function(evt) {
      evt.preventDefault();
      closeOverlay()
    });
    bean.on(form.get(0), 'submit', function(evt) {
      evt.preventDefault();
      saveItem();
    });
  }


  function saveItem() {
    webItem.comment = $('#webItemBookmarkletComment').attr('value');
    webItem.tags = $('#webItemBookmarkletTags').attr('value');
    webItem.sourcePlatform = 'www';
    webItem.sourceId = '';
    var req = reqwest({
      url: hostURL,
      method: 'post',
      type: 'json',
      processData: false,
      crossOrigin: true,
      data: JSON.stringify(webItem),
      contentType: 'application/json',
      success: showFeedbackSuccess,
      error: showFeedbackError
    });

  }



  function onItemSaved(data){
    
  }


  function showFeedbackSuccess(data){
      var response = $('form',saveWebItemOverlay).empty().append('<h1>Your Web Item was saved succesfully</h1><button>OK</button>');
      response.css({
        'color':'#000',
        'font-family':'Arial,sans-serif'
      });
      bean.on(response.get(0),'click',$('button'),function(evt) {
        evt.preventDefault();
        closeOverlay()
      });
  }


  function showFeedbackError(err){
    var msg = JSON.parse(err.response).message;
    var response = $('form',saveWebItemOverlay).append('<h1>There was an error saving your Web Item</h1><p>'+msg+'</p><button>Ok</button> (You can try again)');
    $(response).css({
      'color':'#000',
      'font-family':'Arial,sans-serif'
    });
      bean.on(response.get(0),'click',$('button'),function(evt) {
        evt.preventDefault();
        closeOverlay()
      });
  }

  function closeOverlay() {
    saveWebItemOverlay.remove();
    $('#webItemBookmarkletScript, #webItemBookmarkletStyle').remove();
  }


  createOverlay();


  // javascript:function%20iprl5()%7Bvar%20d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;try%7Bif(!b)throw(0);d.title='(Saving...)%20'+d.title;z.setAttribute('src',l.protocol+'//www.instapaper.com/j/3ct5Beq2lIBx?u='+encodeURIComponent(l.href)+'&t='+(new%20Date().getTime()));b.appendChild(z);%7Dcatch(e)%7Balert('Please%20wait%20until%20the%20page%20has%20loaded.');%7D%7Diprl5();void(0)
});