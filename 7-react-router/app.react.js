// If you're experimenting at home, see the 
// "If You Want To Experiment" section of the
// Part 6 README.md to learn how to rebuild the
// bundle.js file and see your changes.
//
var React        = require('react');

// Useful tools for building routes
var Router       = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link         = Router.Link;
var Route        = Router.Route;
var RouteHandler = Router.RouteHandler;

// This element contains all content that's shared
// across all our routes.
//
var App = React.createClass({
  render: function() {
    // Notice the use of the Link element: the "to" attribute
    // indicates which route name will trigger on click.
    //
    // The RouteHandler element is where our content will be
    // rendered. You can see we have content both above and
    // below it on the page.
    //
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>

        <RouteHandler />

        <footer>
          Brought to you by "React: Step by Step"
        </footer>
      </div>
    );
  }
});

// Three very simple elements just to get some different content
// up on the page when the routes change.
//
var Dashboard = React.createClass({
  render: function() {
    return <h1>How dashing!</h1>;
  }
});

var Inbox = React.createClass({
  render: function() {
    return <h1>You've got mail!</h1>;
  }
});

var Calendar = React.createClass({
  render: function() {
    return <h1>Take a day just for you</h1>;
  }
});

// We use the nested-elements approach when defining the
// hierarchy of our routes, allowing routes that contain
// sub-routes. This leaves a very concise description of how
// our routes fit together in our page.
//
// Each route has attributes for:
// - name: matching the "to" attribute in our Link elements
// - path: [optional] if the name isn't what the URL
//   will show for the route, as in the "app" route
// - handler: referring to the React element that will
//   display when the route is triggered
//
// We also have a DefaultRoute, which is used when none
// of the sub-routes match the URL.
//
var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="inbox" handler={ Inbox } />
    <Route name="calendar" handler={ Calendar } />
    <DefaultRoute handler={ Dashboard } />
  </Route>
);

// Now that we're configured, we tell the Router to run,
// passing it the routes we've defined and a function
// to render the view.
//
// The URLs generated by the router are easy to bookmark
// or share, linking directly to any route in our app.
//
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});