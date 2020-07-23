
var station = 0;
// todo turn into factory

var segmentLenghtUniform = distanceBtwnStations / 5px * minute;
//todo turn into a factory

var lineLength = sum of station * sum of segmentLenghtUniform
// todo factory for all the different lines


//https://developers.google.com/transit/gtfs-realtime/examples/nodejs-sample
//https://developers.google.com/transit/gtfs-realtime/#getting_help
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var requestSettings = {
  method: 'GET',
  url: 'URL OF YOUR GTFS-REALTIME SOURCE GOES HERE',
  encoding: null
};
request(requestSettings, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});