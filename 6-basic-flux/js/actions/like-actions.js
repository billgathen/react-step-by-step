// This is where we gather all the actions our app
// might like to send around the topic of "liking".
//
// It's called directly by whatever wants to send an
// event.
//
// First, we pull in our dispatcher, which handles
// connecting event senders with event receivers.
//
var Dispatcher = require('../dispatcher/dispatcher');
//
// Then we'll pull in the list of valid events the
// system knows about, stored in constants. This makes
// sure that senders and receivers are using the exact
// same terminology when referring to events. If
// we just used plain strings to identify them, the
// sender could send a "liked" event and the receiver
// could listen for a "like" event, meaning the sent
// messages would never be heard!
//
var Constants = require('../constants/constants');

// Our LikeActions object calls the dispatcher.
// The dispatch method accepts an object that contains
// at least an actionType property. The value of that
// property tells the dispatcher what event to send.
//
// If there was any data to pass along with this event,
// we'd supply it as property name/value pairs on the
// object, like this:
//
// var BankActions = {
//   deposit: function(_account_number, _amount) {
//     Dispatcher.dispatch({
//       actionType: Constants.DEPOSIT,
//       account_number: _account_number,
//       amount: _amount
//     });
//   }
// };
//
var LikeActions = {
  liked: function() {
    Dispatcher.dispatch({
      actionType: Constants.LIKED
    });
  }
};

// There's surprisingly-little to see in either the constants
// or the dispatcher (though you're welcome to look!), so
// head over to js/stores/like-store.js to see how stores
// register with the dispatcher to receive these events!

module.exports = LikeActions;