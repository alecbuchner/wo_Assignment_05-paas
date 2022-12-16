import join from "lodash/join";
import "./scss/style.scss";
import turtok from "./images/turtok.png";

function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

function image()
{
  const image = new Image();
  image.src = turtok;

  return image;
}

document.body.appendChild(component());
document.body.appendChild(image());
