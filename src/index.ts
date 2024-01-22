import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

declare global {
  interface Window {
    Stimulus: Application;
  }
}

window.Stimulus = Application.start();
const context = require.context("./controllers", true, /\.ts$/);
window.Stimulus.load(definitionsFromContext(context));

window.onload = () => {
  // Your code here
  console.log("Hello World!");
};
