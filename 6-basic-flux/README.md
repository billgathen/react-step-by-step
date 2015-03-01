# Basic Flux

## What is Flux?

[Flux](http://facebook.github.io/flux) is the design pattern Facebook uses to handle data flow and interaction within a React app. Flux is (mostly) event-driven and its defining characteristic is that data flows in one direction through the app. We chain events (or actions) together so components find out about the actions they care about and can react (pun intended) appropriately.

Our example app tracks "likes" for a web page, and we'll use Flux to let the display counter know when someone has clicked the "like" button.

## The Challenges

I found Flux **much** more difficult to wrap my head around than React alone. None of the explanations made sense to me. Until I walked through the code in the [Flux TodoMVC example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc), I was ready to give up. I hope this repo will be the guide you need to pick up Flux quickly and begin using it in your own apps.

Flux uses CommonJS ```require``` statements to pull in behaviors from other files, so we'll switch from *all in one file* mode to *how apps are really built* mode. This means we'll stop compiling our JSX in the browser: instead we'll add a build tool at the command-line and pre-compile before serving. The [Browserify](http://browserify.org) tool will gather and combine all our code files into a single file that lives at ```dist/bundle.js```. Pre-compiling is more efficient and all production apps use it, but it's added complexity I wanted to avoid as long as possible in these examples.

Underneath this directory are two sub-directories: ```js``` and ```dist```. The ```js``` directory contains the directories where we'll put our React/Flux code: ```actions```, ```components```, ```constants```, ```dispatcher``` and ```stores```. The ```dist``` directory is where our build step will put the compiled application file: ```bundle.js```. You can see in ```index.html``` that ```dist/bundle.js``` is the only script file we need to include for our app to load into the page. Convenient!

The good news is you can ignore the build steps entirely if all you want to do is run the code: the ```dist/bundle.js``` file has already been created. Open ```index.html``` in a browser and it just works!

## The Guided Tour

I've laid out a recommended flow for going through the source code which follows Flux's one-directional data flow. **If you don't follow it, you'll likely be as lost as I was.** That flow is:

* [```index.html```](index.html) (the page containing our app)
* ```app.js``` (the main app file)
* ```js/components/like.react.js``` (the like button React component)
* ```js/actions/like-actions.js``` (connecting the button component to the dispatcher)
* ```js/stores/like-store.js``` (the container for state in the app, which listens to the dispatcher)
* ```js/components/counter.react.js``` (the React component displaying the count, which listens to the store)

The comments in each file presume you're following along in order, and they guide you from one file to the next, walking along the path from the like button to the counter. I hope this flow is comprehensible: it's the best way I could find to introduce the concepts and the code that implements them.

Have fun!

## If You Want To Experiment

When you make changes to the code, you'll need to re-run the build process and refresh the page to see your changes in the browser. If you don't have Node installed on your dev machine, follow the instructions [here](http://nodejs.org) to do that first. Then execute the following from the command-line in this directory:

* ```npm install```
* ```npm install browserify -g```

They will install all the JavaScript libraries you'll be using to build the project, and globally install the [Browserify](http://browserify.org) tool so it can be executed from the command-line. They only have to be run once.

To actually run the build after making changes to the code, type ```npm run build``` at the command-line in this directory. It will gather and combine all the files you need into ```dist/bundle.js```, converting our JSX to plain JavaScript as it goes.

For more details on how the build process works, look in the package.json file under the "scripts" property.