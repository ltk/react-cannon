var BallActions = require('../actions/ball_actions');
var React       = require('react');

var Trigger = React.createClass({

  render: function() {
    return (
      <button className="trigger" onClick={ this._onClick }>Fire!</button>
    );
  },

  _onClick: function() {
    console.log('trigger _onClick')
    var position = {
      x: 158,
      y: 52
    };

    var velocity = {
      x: Math.random(),
      y: 0
    };

    BallActions.fire(position, velocity);
  }

});

module.exports = Trigger;
