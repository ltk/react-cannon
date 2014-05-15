var React   = require('react');
var Trigger = require('./trigger.jsx');


function cannonBodyStyles() {
  return {
    width           : '250px',
    height          : '122px',
    backgroundImage : 'url(./bundle/assets/images/cannon.jpg)'
  };
}


var Cannon = React.createClass({

  render: function() {
    console.log('Cannon', this)
    return (
      <div className="cannon" style={ cannonBodyStyles() }>
        <Trigger />
      </div>
    );
  }

});

module.exports = Cannon;
