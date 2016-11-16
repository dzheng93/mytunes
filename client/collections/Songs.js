// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({


  url: 'https://api.parse.com/1/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    // debugger;
    this.fetch({
      // reset: true,
      // async: false,
      success: function(data) {
        // console.log(data);
        // console.log(data.models[0].attributes.results);
        // data: { limit: 10 }

        // library.reset(<%= @library.to_json %>);

        app = new AppModel({library: data});

        // build a view for the top level of the whole app
        appView = new AppView({model: app});

        // put the view onto the screen
        $('body').append(appView.render());


      },
      error: function() {}
    });

    // this.reset(SongModel);
  }, 
  // parse: function(data) {
  model: SongModel
  //   return
  // }

  // var songData = new Songs();

  // songData.fetch({
  //   success: function(songData, response) {
  //     songData.each(function(item, index, all) {
  //       item.set('artists');
  //       item.save();
  //     });
  //   }
  // })
  // Songs.fetch({data: })

  // initialize: function() {
  //   this.fetch({
  //     success: function(collection, response) {
  //       console.log(response);
  //       console.log(collection.models);
  //     },
  //     error: function() {}
  //   });
    // debugger;
    // $.ajax({
    //   // This is the url you should use to communicate with the parse API server.
    //   url: 'https://api.parse.com/1/classes/songs',
    //   type: 'GET',
    //   data: 'JSON.stringify(songs)',
    //   contentType: 'application/json',
    //   success: function (data) {
    //     console.log('myTunes: Song received');
    //     this.fetch
    //   },
    //   error: function (data) {
    //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //     console.error('myTunes: Songs not received', data);
    //   }
    // });
  // }


});