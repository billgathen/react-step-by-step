// Browserify uses the 'require' expressions in our code
// to locate the other files this one needs to function.
// Running the build process pulls all the code together
// so our web page can access it all.
//
// For more information on Browserify, try
// https://github.com/substack/browserify-handbook
//
var React   = require("react");
// Our own React components go in the components directory.
// Notice we start with a ./ so Browserify knows to start
// in this directory when looking for our files, but we
// can leave off the .js.
//
// We didn't need a path to the React library, because
// it was installed in the node_modules directory by NPM
// and Browserify automatically checks for files there.
//
var Like    = require("./js/components/like.react");
var Counter = require("./js/components/counter.react");

// We render each of the components into the page just as before.
React.render(
  <Counter />,
  document.getElementById('counter')
);

React.render(
  <Like />,
  document.getElementById('like')
);

// To start following the data flow, let's go to js/components/like.react.js first.