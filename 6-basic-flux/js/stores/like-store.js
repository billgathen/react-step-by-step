// Stores are where the application keeps track of its state.
// In our app the only state is how many likes have been counted.
//
// We need the dispatcher, because we'll be registering ourselves
// with it in order to find out about events
//
var Dispatcher = require('../dispatcher/dispatcher');
//
// The event emitter allows us to send our own events, which our
// React views will subscribe to so they know when we've changed.
//
var EventEmitter = require('events').EventEmitter;
//
// Constants make sure we're talking about the same events as the
// LikeActions object is sending
//
var Constants = require('../constants/constants');
//
// Assign allows us to mix the behavior of one object (in this case
// the event emitter) into another object (our store), allowing our
// store to send events itself.
//
var assign = require('object-assign');

// CHANGE_EVENT is the only message our store sends: we don't care
// what changed, or what the new values are, because our views
// will ask for our data themselves when they hear our events.
//
// Again, we use a constant to prevent mis-typing.
//
var CHANGE_EVENT = 'change';

// This is our like counter.
var _likes = 0;

// Our actual object. Notice the use of assign and EventEmitter.prototype
// to "mix-in" the event-generating behavior.
//
var LikeStore = assign({}, EventEmitter.prototype, {
  // The read-only method the view uses to get the number of likes.
  // There are never any write methods on the store: the store handles
  // its own state in response to events it listens for.
  //
  likes: function() {
    return _likes;
  },
  // The method the view uses to tell the store what code to run
  // when an event fires
  //
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  // The method the view uses to stop listening to this store's events.
  //
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  // The "alert all listeners" function the store uses when it wants
  // to tell the world its state has changed.
  //
  emitChange: function() {
    // this.emit sends out an event: all the callbacks that were supplied
    // will be executed, in the order they were added
    //
    this.emit(CHANGE_EVENT);
  }
});

// The store registers with the dispatcher to be alerted whenever ANY
// events come through it. The switch statement allows it to act on
// any events it cares about, while ignoring the rest.
//
// This is an important design principle: the dispatcher alerts every
// store about every event. It doesn't filter them in any way. The
// stores are responsible for deciding which events they care about
//
Dispatcher.register(function(action){
  switch(action.actionType) {
    case Constants.LIKED:
      _likes += 1; // change our store's state
      LikeStore.emitChange(); // alert all listeners
      break;
    default:
      // must be an event we don't care about
  };
});

// Now that the store know whenever an event has occurred, we only
// need to attach our Counter element to this store so it can update
// itself when the store updates.
//
// That code lives in js/components/counter.react.js

module.exports = LikeStore;