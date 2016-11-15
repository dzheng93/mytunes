// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio onended=controls autoplay />',

  initialize: function() {
    // this.$el.on('ended', function() {
    //   //this.model.remove(this.at(0));
    //   this.playerView.setSong(this.at(0));
    // }, this);
    // this.render();
    // this.el.onended = this.render;

    // console.log(this.el.onended);


  },

  // events: {
  //   'ended': 'this.render'
  // },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
