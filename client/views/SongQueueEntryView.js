// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    
  },

  events: {
    'click': function() {
      // this.model.play();
      // come back to look into enqueue, should not change songs 
      // if the song is already playing, should just add to queue without playing
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
    // return this.$el;
  }
});
