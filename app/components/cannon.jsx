var React   = require('react');
var Trigger = require('./trigger.jsx');


function cannonBodyStyles() {
  return {
    width      : '100px',
    height     : '100px',
    background : 'grey'
  };
}

function cannonBarrelStyles() {
  return {
    width      : '50px',
    height     : '15px',
    background : 'grey',
    position   : 'relative',
    top        : '43px',
    left       : '100px'
  };
}

var Cannon = React.createClass({

  render: function() {
    console.log('Cannon', this)
    return (
      <div className="cannon" style={ cannonBodyStyles() }>
        <div className="barrel" style={ cannonBarrelStyles() }></div>
        <Trigger />
      </div>
    );
  }

});

module.exports = Cannon;
