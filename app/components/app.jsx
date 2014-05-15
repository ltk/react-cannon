var BallStore     = require('../stores/ball_store');
var Cannon        = require('./cannon.jsx');
var React         = require('react');
var ShootingRange = require('./shooting_range.jsx');

function getBallState() {
  return {
    allBalls: BallStore.getAll()
  }
}

var App = React.createClass({
  getInitialState: function() {
    return getBallState();
  },

  componentDidMount: function() {
    BallStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BallStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div id="cannode-react-app">
        <Cannon />
        <ShootingRange balls={ this.state.allBalls } />
      </div>
    );
  },

  _onChange: function() {
    console.log('app _onChange')
    this.setState(getBallState());
  }

});

module.exports = App;
