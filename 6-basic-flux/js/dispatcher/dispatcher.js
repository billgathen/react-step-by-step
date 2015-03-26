// Our dispatcher is a simple pass-through to Flux's
// own dispatcher. There's actually no custom code here.
//
// It's just a central location for creating a single instance of
// the dispatcher to be used by the rest of the app.
//
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

// The Flux team calls the dispatcher the "traffic cop".
// It's a message queue, keyed with the value of actionType
// passed to the dispatch method.
//
// We'll see in a moment how stores attach to this queue,
// receiving the messages in the order the dispatcher did.
//
// So head over to js/stores/like-store.js to see how stores
// register with the dispatcher to receive events!
