var AppDispatcher       = require('../dispatcher/app_dispatcher');
var Ball                = require('../models/ball');
var BallActions         = require('../actions/ball_actions');
var BallConstants       = require('../constants/ball_constants');
var EventEmitter        = require('events').EventEmitter;
var merge               = require('react/lib/merge');
var AppAnimationDispatcher = require('../dispatcher/app_animation_dispatcher');

var CHANGE_EVENT = 'change';

var _balls = {};

function fire(position, velocity) {
  var ball = new Ball(position, velocity);

  _balls[ball.id] = ball;
}

function animateAll() {
  // Someday something will be here. Like collision detection or whatnot.
}

var BallStore = merge(EventEmitter.prototype, {
  getAll: function() {
    return _balls;
  },

  emitChange: function() {
    console.log('emitting change event');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppAnimationDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case BallConstants.BALL_ANIMATE_ALL:
      animateAll();
      BallStore.emitChange();
      break;

    default:
      return true;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case BallConstants.BALL_FIRE:
      fire(action.position, action.velocity);
      BallStore.emitChange();
      break;

    default:
      return true;
  }

  return true; // Needed by promise in Dispatcher.
})

module.exports = BallStore;
