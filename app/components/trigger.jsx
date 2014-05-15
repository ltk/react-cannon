var BallActions = require('../actions/ball_actions');
var FireControl = require('../lib/fire_control');
var React       = require('react');

var Trigger = React.createClass({

  render: function() {
    return (
      <button className="trigger" onClick={ this._onClick }>Fire!</button>
    );
  },

  _onClick: function() {
    FireControl.fire();
  }

});

module.exports = Trigger;
