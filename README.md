# Component library application using Webpack 5 Module Federation and Bit

This example shows how you can create a component library application that exposes components for other apps to use.

For more information, visit the article explaining this project

- `app1` is the component library application sharing reusable components from Bit.
- `app2` and `app3` are standalone applications that import components from `app1`.

## Running Demo

Run `npm install` and `npm start` inside each repo respectively. This will build and serve your apps on ports 3001, 3002 and 3003

- [localhost:3001](http://localhost:3001/) (The library)
- [localhost:3002](http://localhost:3002/) (Consumer app)
- [localhost:3003](http://localhost:3003/) (Consumer app)

Example referenced from https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote
