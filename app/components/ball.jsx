var React  = require('react');

var Ball = React.createClass({

  propTypes: {
    ball: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="cannon-ball" style={ this.style() }></div>
    );
  },

  style: function() {
    var ballPosition = this.props.ball.currentPosition();

    return {
      width        : '10px',
      height       : '10px',
      background   : 'black',
      borderRadius : '10px',
      position     : 'absolute',
      left         : ballPosition.x + 'px',
      top          : ballPosition.y + 'px'
    };
  }

});

module.exports = Ball;
