var BallActions  = require('../actions/ball_actions');
var EventEmitter = require('events').EventEmitter;
var merge        = require('react/lib/merge');
var SocketIO     = require('socket.io-client');

var CONNECTED_EVENT    = 'connected';
var DISCONNECTED_EVENT = 'disconnected';
var SHOT_FIRED_EVENT   = 'shotFired';
var FIRE_EVENT         = 'fire';

var _socket = SocketIO.connect('http://localhost:5000');

var FireControl = merge(EventEmitter.prototype, {
  emitConnected: function() {
    this.emit(CONNECTED_EVENT);
  },

  emitDisonnected: function() {
    this.emit(DISCONNECTED_EVENT);
  },

  addConnectedListener: function(callback) {
    this.on(CONNECTED_EVENT, callback);
  },

  addDisconnectedListener: function(callback) {
    this.on(DISCONNECTED_EVENT, callback);
  },

  removeConnectedListener: function(callback) {
    this.removeListener(CONNECTED_EVENT, callback);
  },

  removeDisonnectedListener: function(callback) {
    this.removeListener(DISCONNECTED_EVENT, callback);
  },

  fire: function() {
    _socket.emit(FIRE_EVENT);
  },

  shotFired: function(data) {
    console.log('shotFired callback')
    var position = {
      x: 250,
      y: 19
    };

    BallActions.fire(position, data.velocity);

    this.emit(SHOT_FIRED_EVENT, data);
  }

});

_socket.on('connect', function(data) {
  FireControl.emitConnected();

  _socket.on('shotFired', function (data) {
    console.log('Shot Fired');
    FireControl.shotFired(data);
  });

  _socket.on('disconnect', function() {
    FireControl.emitDisconnected();
  });
});

module.exports = FireControl;
