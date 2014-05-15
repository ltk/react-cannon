var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var _callbacks = [];

var AnimationDispatcher = function() {};

AnimationDispatcher.prototype = {
  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
  },

  dispatch: function(payload) {
    requestAnimationFrame(function() {
      this.performAction(payload);
    }.bind(this));
  },

  performAction: function(payload) {
    _callbacks.forEach(function(callback) {
      callback(payload);
    });
  }
};

module.exports = AnimationDispatcher;
