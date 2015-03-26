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
// system knows about, stored as constants. This makes
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
var LikeActions = {
  liked: function() {
    Dispatcher.dispatch({
      actionType: Constants.LIKED
    });
  }
};
// If there's any data to pass along with an event,
// we supply it as property name/value pairs on the
// object, like this:
//
// var BankActions = {
//   deposit: function(_accountNumber, _amount) {
//     Dispatcher.dispatch({
//       actionType: Constants.DEPOSIT,
//       accountNumber: _accountNumber,
//       amount: _amount
//     });
//   }
// };
//

module.exports = LikeActions;

// The constants file is just a hash, so you can take a peek
// if you like, but our next stop is js/dispatcher/dispatcher.js
// to find out how these "dispatches" are passed-along.
