// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('pop', function() {
      this.render();
    }, this);

    this.collection.on('ended', function() {
      this.render();
    }, this);

    this.collection.on('dequeue', function() {
      this.render();
    }, this);
  },



  render: function() {
    // SongQueueEntryView.prototype.render.call(this);
    // return this.$el;
    this.$el.children().detach();

    this.$el.html('<th class="songqueue">Song Queue</th>').append(
      this.collection.map(function(song) {

        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
