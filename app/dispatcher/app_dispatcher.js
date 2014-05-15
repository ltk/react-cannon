var Dispatcher = require('./dispatcher');
var merge      = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {

  handleViewAction: function(action) {
    this.handleAction('VIEW_ACTION', action);
  },

  handleStoreAction: function(action) {
    this.handleAction('STORE_ACTION', action);
  },

  handleAction: function(source, action) {
    console.log('handleAction', source, action)
    this.dispatch({
      source: source,
      action: action
    });
  }

});

module.exports = AppDispatcher;
