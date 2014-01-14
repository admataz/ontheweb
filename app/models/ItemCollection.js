'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');


var fields = {
  title: {type: String, required: true},
  content: {type: String},
  items: [{ type: Schema.Types.ObjectId, ref: 'webitem' }],
  search: { type: Object},
  status: {type: Boolean, defaut: false}
};

var theSchema = new Schema(fields);


theSchema.plugin(timestamps);

module.exports = mongoose.model('itemcollection', theSchema);

