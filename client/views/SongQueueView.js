// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('pop', function() {
      this.render();
    }, this);
  },

  render: function() {
    SongQueueEntryView.prototype.render.call(this);
    return this.$el;
  }

});
