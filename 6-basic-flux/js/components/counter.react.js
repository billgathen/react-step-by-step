// Pull in the React library so we can use its features.
//
var React = require('react');
//
// Then require the LikeStore, so we can listen for changes on it
//
var LikeStore = require('../stores/like-store');

// We create a method of transferring the data in LikeStore into
// the state of our component
//
function getState() {
  return {
    likes: LikeStore.likes()
  }
}

var Counter = React.createClass({
  // When the component is created, we use our helper method to
  // get the current values from LikeStore
  //
  getInitialState: function() {
    return getState()
  },
  render: function(){
    // We use the retrieved value of likes to render the component
    //
    return <h1>{ this.state.likes } likes!</h1>;
  },
  // componentDidMount is automatically run by React when the component
  // is first created. We use it to tell the LikeStore to call our
  // onChange method every time the store changes.
  //
  componentDidMount: function() {
    LikeStore.addChangeListener(this.onChange);
  },
  // If our component is ever removed from the page, componentDidUnmount
  // is automatically run by React, allowing us to remove the listener
  // when it's no longer needed
  //
  componentDidUnmount: function() {
    LikeStore.removeChangeListener(this.onChange);
  },
  // setState replaces the existing contents of the component's
  // state with whatever the store returns, then triggers an
  // automatic re-render of the component. Our updated liked count
  // should increment on the page every time we click the button!
  //
  // NOTE: if this component had any nested components that inherited
  // its state, those child components would automatically re-render
  // as well!
  //
  onChange: function() {
    this.setState(getState());
  }
});

module.exports = Counter;

// And that's Flux!
//
// Note that there's no reason a component can't both send and receive
// events: a component that uses Flux to query a server and display the
// results would implement the "send" features of like.react.js and
// the "receive" features of counter.react.js. To keep things as
// clear as possible, I picked a problem that flows from A to B instead.
//