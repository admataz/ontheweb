define(['app/views/BaseView', 'template', 'underscore', 'app/ui/bootbox', 'app/ui/selectize'],
  function(BaseView, Template, _, bootbox) {

    return BaseView.extend({

      template: Template['collect/saveForm'],

      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));
      },

      serialize: function() {
        return {
          items: this.collection.toJSON()
        };
      },

      events: {
        'change #saveTo-selector': 'onSelectSaveToChanged',
        'submit form': 'onSaveFormSubmitted',
        'click #empty-current-collection': 'onEmptyClicked'
      },

      onAfterRender: function(view) {
        this.$('#saveTo-selector').selectize({
          create: _.bind(this.onSelectSaveToCreate, this), //true,
          addPrecedence: true,
          persist: true
        });

      },

      onEmptyClicked: function(evt) {
        bootbox.confirm('Are you sure you want to empty the current list?', _.bind(this.onEmptyConfirmed, this));
        evt.preventDefault();
      },

      onEmptyConfirmed: function(confirmed) {
        if (confirmed) {
          this.pubSub.trigger('itemCollection:empty');
        }
      },

      onSelectSaveToCreate: function(input, cb) {
        var sel = this.$('#saveTo-selector')[0];
        sel.selectize.addOption({
          text: input,
          value: 'new'
        });
        this.$('#saveTo-new').attr('value', input);
        sel.selectize.refreshOptions();
        sel.selectize.addItem(0);
        cb();
      },

      onSelectSaveToChanged: function(evt) {
        this.pubSub.trigger('itemCollection:selected', evt.target.value);
      },

      onSaveFormSubmitted: function(evt) {
        var data = this.formToData(evt.target);
        evt.preventDefault();

        if (!data.saveTo && !data.saveToNewName) {
          return;
        }
        this.pubSub.trigger('collect:save', data);
      }

    });

  });