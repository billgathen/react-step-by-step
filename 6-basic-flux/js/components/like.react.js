// First pull in the React library so we can use its features.
var React = require('react');

// Then we pull in the LikeActions object, which we'll
// call whenever our button is clicked.
var LikeActions = require('../actions/like-actions');

// The Like element will start the data flow when someone clicks it.

var Like = React.createClass({
  render: function(){
    // We attach behaviors to page events by adding properties
    // (which look like HTML attributes) into the element
    // Here we're attaching a call to the _onClick method
    // to the DOM click event. The curly brackets alert React
    // that what we're supplying is code, not just a string.
    //
    // Here's a list of all the DOM events React can handle:
    // https://facebook.github.io/react/docs/events.html
    // NOTE: the HTML element you're creating must send the
    // event in question or React won't know about it.
    // Putting an onChange property on a button wouldn't
    // work because buttons don't send the "change" DOM event.
    //
    return <button onClick={ this._onClick }>Like</button>;
  },
  // This method will be called every time someone clicks
  // our button.
  _onClick: function() {
    // To let the rest of the app know something
    // has happened, we tell the LikeActions object to
    // send an event. We could send data along as arguments,
    // (for example, which button was pressed, or the contents
    // of an input box) but in this case just the fact that
    // an event has fired is enough information.
    //
    // Actions should be about what has already happened,
    // not what should happen next, which is why we've called
    // the method liked and not incrementLikeCounter.
    //
    LikeActions.liked();
  }
});

// Now head over to js/actions/like-actions.js to see what
// happens next!

module.exports = Like;