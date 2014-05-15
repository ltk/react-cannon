var Ball = function(position, velocity) {
  this.id              = Date.now();
  this.initialPosition = position;
  this.initialVelocity = velocity;
};

Ball.prototype = {

  acceleration: {
    x: 0,
    y: -0.001
  },

  initialTime: function() {
    return this.id;
  },

  currentTime: function() {
    return Date.now();
  },

  elapsedTime: function() {
    return (this.currentTime() - this.initialTime());
  },

  currentAxisPosition: function(axis) {
    return (this.initialPosition[axis] + (this.initialVelocity[axis] * this.elapsedTime()) - 0.5 * this.acceleration[axis] * this.elapsedTime() * this.elapsedTime())
  },

  currentPosition: function() {
    return {
      x: this.currentAxisPosition('x'),
      y: this.currentAxisPosition('y')
    };
  }

};

module.exports = Ball;
