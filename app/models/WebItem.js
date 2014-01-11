var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp'),
  uniqueValidator = require('mongoose-unique-validator');


var fields = {
  url: {type: String, required: true, unique:true},
  title: {type: String, required: true},
  content: {type: String},
  imageUrl: {type: String},
  geotags: {type: String},
  authorName: {type: String},
  authorProfileUrl: {type: String},
  authorAvatarUrl: {type: String},
  sourceSiteName: {type: String},
  sourceSiteUrl: {type: String},
  sourceSiteLogoUrl: {type: String},
  inReplyTo: Schema.ObjectId,
  dateCollected: {type: Date},
  datePosted: {type: Date},
  dateLastValidated: {type: Date},
  status: {type: Boolean, defaut: false}
};

var theSchema = new Schema(fields);

theSchema.plugin(timestamps);
theSchema.plugin(uniqueValidator);

module.exports = mongoose.model('WebItem', theSchema);

