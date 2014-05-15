var Ball  = require('./ball.jsx');
var React = require('react');

var ShootingRange = React.createClass({

  propTypes: {
    balls: React.PropTypes.object.isRequired
  },

  render: function() {
    if (Object.keys(this.props.balls).length < 1) {
      return <noscript />;
    }

    return (
      <div className="shooting-range">
        <ul>{ this.ballComponents() }</ul>
      </div>
    );
  },

  ballComponents: function() {
    var balls = this.props.balls;
    var components = [];

    console.log('balls', this.props.balls)
    for(ballId in balls) {
      if (balls.hasOwnProperty(ballId)) {
        var ball = balls[ballId];
        components.push(<Ball key={ ball.id } ball={ ball } />);
      }
    }

    return components;
  }

});

module.exports = ShootingRange;
