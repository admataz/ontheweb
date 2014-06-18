define(['app/views/BaseView', 'template', 'underscore', 'jquery', 'app/ui/datepicker'], function(BaseView, Template, _, $) {


   var serializeAdvancedForm = function() {
      
      var a = $("#advanced-twitter-search-form"),
        b = a.serializeArray(),
        c = [];

        var g;

      return b.forEach(function(b) {
        var d = b.value,
          e = a.find("select[name=within]").val() + a.find("input:radio[name=units]:checked").val();
        if (!d) {
          return;
        }
        switch (b.name) {
          case "attd":
          case "ands":
            c.push(d);
            break;
          case "ors":
            c.push(d.split(" ").join(" OR "));
            break;
          case "phrase":
            c.push('"' + d + '"');
            break;
          case "nots":
            c.push("-" + d.split(" ").join(" -"));
            break;
          case "tag":
            c.push("#" + d.replace(/#+/g, "").split(" ").join(" OR #"));
            break;
          case "from":
            c.push("from:" + d.replace(/@+/g, "").split(" ").join(" OR from:"));
            break;
          case "to":
            c.push("to:" + d.replace(/@+/g, "").split(" ").join(" OR to:"));
            break;
          case "ref":
            c.push("@" + d.replace(/@+/g, "").split(" ").join(" OR @"));
            break;
          // case "near":
          //   c.push('near:"' + d + '" within:' + e);
          //   break;
          // case "place_id":
          //   var f = a.find(".geo-picker .geo-status").text();
          //   c.push('near:"' + f + '" within:' + e);
          //   break;
          case "since":
            g = getUTCyyyymmdd($(".input-since").datepicker("getUTCDate"));
            c.push("since:" + g);
            break;
          case "until":
            g = getUTCyyyymmdd($(".input-until").datepicker("getUTCDate"));
            c.push("until:" + g);
            break;
          case "include":
            c.push("include:retweets");
            break;
          case "lang":
            d !== "all" && c.push("lang:" + d);
        }
      }), c.join(" ").trim();
    };


     function initializeDatePicker() {
      $(".input-daterange").datepicker({
        format: "yyyy-mm-dd",
        startDate: "2006-03-21",
        endDate: new Date(),
        autoclose: !0,
        todayHighlight: !0,
        language: 'en'
      });
    }

    function setUntilMinDate(a) {
      $(".input-until").datepicker("setStartDate", a.date)
    }

    function setSinceMaxDate(a) {
      $(".input-since").datepicker("setEndDate", a.date)
    }

    function getUTCyyyymmdd(a) {
      var b = a.getUTCFullYear().toString(),
        c = (a.getUTCMonth() + 1).toString(),
        d = c[1] ? c : "0" + c[0],
        a = a.getUTCDate().toString(),
        e = a[1] ? a : "0" + a[0];
      return b + "-" + d + "-" + e
    }





  return BaseView.extend({
    template: Template['collect/searchTwitterAdvanced'],
    initialize: function() {
      this.on('afterRender', _.bind(this.onAfterRender, this));
    },

    events: {
      'submit #advanced-twitter-search-form': 'onAdvancedFormSubmitted',
      'click #advanced-twitter-search .btn-primary': 'onAdvancedFormSubmitted',
    },


    onAdvancedFormSubmitted: function(evt){
      evt.preventDefault();
      var searchstring = serializeAdvancedForm();

      this.pubSub.trigger("advancedSearch:submitted", {q:searchstring});
      $('#advanced-twitter-search').modal('hide');
      return false;
    },


    onAfterRender: function(view){
      initializeDatePicker();
      $(".input-since").datepicker().on("changeDate", setUntilMinDate);
      $(".input-until").datepicker().on("changeDate", setSinceMaxDate);
    }
  });

});