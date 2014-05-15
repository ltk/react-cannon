var BallStore     = require('../stores/ball_store');
var Cannon        = require('./cannon.jsx');
var FireControl   = require('../lib/fire_control');
var React         = require('react/addons');
var ShootingRange = require('./shooting_range.jsx');

var classSet = React.addons.classSet;

function getAllBalls() {
  return BallStore.getAll();
}

var App = React.createClass({
  getInitialState: function() {
    return {
      fireControlReady : false,
      allBalls         : getAllBalls()
    };
  },

  componentDidMount: function() {
    BallStore.addChangeListener(this._onChange);
    FireControl.addConnectedListener(this._onFireControlConnected);
    FireControl.addDisconnectedListener(this._onFireControlDisconnected);
  },

  componentWillUnmount: function() {
    BallStore.removeChangeListener(this._onChange);
    FireControl.removeConnectedListener(this._onFireControlConnected);
    FireControl.removeDisconnectedListener(this._onFireControlDisconnected);
  },

  render: function() {
    var className = classSet({
      'ready': this.state.fireControlReady
    });

    return (
      <div id="cannode-react-app" className={ className }>
        <Cannon />
        <ShootingRange balls={ this.state.allBalls } />
      </div>
    );
  },

  _onChange: function() {
    this.setState({ allBalls: getAllBalls() });
  },

  _onFireControlConnected: function() {
    this.setState({ fireControlReady: true });
  },

  _onFireControlDisconnected: function() {
    this.setState({ fireControlReady: false });
  }

});

module.exports = App;
