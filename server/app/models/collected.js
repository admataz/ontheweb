var webitem = require('./webitem');


module.exports = {
  query: function(obj, cb){
    var results;
    var dbquery = webitem.find();
    var platform_search = [];
    var q;

    if (obj.q) {
      q = new RegExp(obj.q, "i");
      dbquery.or([{
        title: q
      }, {
        content: q
      }, {
        url: q
      }, {
        comment: q
      }, {
        tags: q
      }]);
    }

    if(obj.platform_twitter){
      platform_search.push('twitter');
    }
    if(obj.platform_facebook){
      platform_search.push('facebook');
      
    }
    if(obj.platform_googleplus){
      platform_search.push('googleplus');
      
    }
    if(obj.platform_www){
      platform_search.push('www');
      
    }
    

    if(platform_search.length){
      // dbquery.where(1);
      dbquery.in("sourcePlatform", platform_search);
    }


    results = dbquery.exec(function(err, data){
        if(err){
          return cb(err);
        }

        return cb(null, data.map(function(d){return d.toObject()}));
    });
    


  }

};