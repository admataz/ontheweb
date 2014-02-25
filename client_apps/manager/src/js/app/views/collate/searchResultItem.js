define(['app/views/BaseView', 'template'], function(BaseView, Template) {

  return BaseView.extend({

    template: Template['collate/searchResultItem'],

    events: {
      'click .postdata a': 'onShowPostData'
    },

    onShowPostData: function(evt){
      evt.preventDefault();
      console.log($(evt.target).attr('href'));

    },





/**
 * should a render function return a result or always look after the writing to the DOM? 
 * This one returns a DOM element - leaving it to the parent view to touch the DOM
 * @return {[type]} [description]
 */
    ssrender: function(data) {

      return {item:this.template(data)};

      /*
       var pubsub = this.pubSub;
      

      var addlink = $('<a href="#">add</a>');
      addlink.on('click', function(evt) {
        var index = ($(this).parent().data('itemid'));
        pubsub.trigger("webitem:selected", index);
        evt.preventDefault();
      });


      var moreinfolink = $('<button>info</button>');


      this.$('.list-group-item').append(addlink);
      var t = this.$('.list-group-item');

      t.append(moreinfolink);

      moreinfolink.on('click', function(evt){
        $(this).popover({
          html: true,
          content: $('.postdata',$(this).parent()).html()
        });


        console.log($('.postdata',$(this).parent()).html());
        evt.preventDefault();

      });
     
      $('button',t).popover('show');

       */

    }

  });

});