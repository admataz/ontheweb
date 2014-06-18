var mongoose = require('mongoose');
var paginator = require('mongoose-paginator');

var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var uniqueValidator = require('mongoose-unique-validator');

var fields = {
  url: {type: String, required: true, unique:true},
  title: {type: String, required: true},
  content: {type: String},
  imageUrl: {ty00pe: String},
  geotags: {type: String},
  authorName: {type: String},
  authorProfileUrl: {type: String},
  authorAvatarUrl: {type: String},
  sourceSiteName: {type: String},
  sourceSiteUrl: {type: String},
  sourceSiteLogoUrl: {type: String},
  inReplyTo: {type: String},
  dateCollected: {type: Date},
  datePosted: {type: Date},
  dateLastValidated: {type: Date},
  comment: {type: String},
  tags: {type: String},
  status: {type: Boolean, defaut: false}
};

var theSchema = new Schema(fields);

theSchema.plugin(timestamps);
theSchema.plugin(uniqueValidator, { message: 'You have already saved this web item' });

theSchema.plugin(paginator, {
    limit: 200,
    defaultKey: '_id',
    direction: -1
});

module.exports = mongoose.model('webitem', theSchema);
