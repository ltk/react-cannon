var AnimationDispatcher = require('./animation_dispatcher');
var merge               = require('react/lib/merge');

var AppAnimationDispatcher = merge(AnimationDispatcher.prototype, {

  handleViewAction: function(action) {
    this.handleAction('VIEW_ACTION', action);
  },

  handleStoreAction: function(action) {
    this.handleAction('STORE_ACTION', action);
  },

  handleAction: function(source, action) {
    console.log('app animation handleAction', source, action)
    this.dispatch({
      source: source,
      action: action
    });
  }

});

module.exports = AppAnimationDispatcher;
