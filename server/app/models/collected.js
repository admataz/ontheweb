var webitem = require('./webitem');


module.exports = {
  query: function(obj, cb){
    var results;
    var dbquery = webitem.find();

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
    
    results = dbquery.exec(function(err, data){
        if(err){
          return cb(err);
        }

        return cb(null, data.map(function(d){return d.toObject()}));
    });
    


  }

};