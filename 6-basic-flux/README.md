# Basic Flux

A warning: I found [Flux](http://facebook.github.io/flux) (Facebook's tool for managing state and event-handling in their apps) **much** more difficult to wrap my head around. None of the explanations I found made sense to me and until I walked through the code in the [Flux TodoMVC example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc), I was ready to give up hope.

When we start using Flux, we have to get away from the "all in one page" demo style of code and start using properly-organized code like you'd see in a production application.

We also need a simple build process that gathers all our JavaScript files and makes them work together, using a tool called [Browserify](http://browserify.org). For convenience and speed, we tweak the Browserify build to compile our JSX on our dev machine in advance instead of in the browser when we load the page. Again, this is how all real apps do it, but I wanted to avoid that complexity as long as possible. The build process requires Node, NPM and the Browserify tool, but instructions for setting up all of that is in ```index.html```, and once you're set up, running the builds couldn't be simpler.

The good news is you can skip the build steps entirely if all you want to do is run the code: the dist/bundle.js file has already been created. Open ```index.html``` in a browser and it just works!

There is a "recommended flow" for going through the source code that follows the one-directional data flow Flux implements. If you don't follow it, you'll likely be as lost as I was. That flow is:

* ```index.html``` (for an explanation of Flux, the new directory structure and how to build the app)
* ```app.js``` (the main app file)
* ```js/components/like.react.js``` (the like button React component)
* ```js/actions/like-actions.js``` (connecting the button component to the dispatcher)
* ```js/stores/like-store.js``` (the center of state in the app, which listens to the dispatcher)
* ```js/components/counter.react.js``` (the React component displaying the count, which listens to the store)

The comments in each file presume you're following along in order, and they guide you from one file to the next, walking along the path from the like button to the counter. I hope this flow is comprehensible: it's the best way I could find to introduce the concepts and the code that implements them.

Have fun!