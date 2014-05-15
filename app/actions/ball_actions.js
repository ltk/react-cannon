var AppDispatcher          = require('../dispatcher/app_dispatcher');
var AppAnimationDispatcher = require('../dispatcher/app_animation_dispatcher');
var BallConstants          = require('../constants/ball_constants');

var BallActions = {

  fire: function(position, velocity) {
    AppDispatcher.handleViewAction({
      actionType: BallConstants.BALL_FIRE,
      position: position,
      velocity: velocity
    });
  },

  animateAll: function() {
    AppAnimationDispatcher.handleViewAction({
      actionType: BallConstants.BALL_ANIMATE_ALL
    });
  }

};

module.exports = BallActions;
