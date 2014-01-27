Webitemsapp.Webitem = DS.Model.extend({
  url: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  imageUrl: DS.attr('string'),
  geotags: DS.attr('string'),
  authorName: DS.attr('string'),
  authorProfileUrl: DS.attr('string'),
  authorAvatarUrl: DS.attr('string'),
  sourceSiteName: DS.attr('string'),
  sourceSiteUrl: DS.attr('string'),
  sourceSiteLogoUrl: DS.attr('string'),
  // inReplyTo: Schema.ObjectId,
  createdAt: DS.attr('date'),
  datePosted: DS.attr('date'),
  dateLastValidated: DS.attr('date'),
  comment: DS.attr('string'),
  tags: DS.attr('string'),
  status: DS.attr('boolean')
});

