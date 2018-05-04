const dom = crel.proxy;
const appendEl = crel;
console.log("hello");
// alert("YO")
let y = 20;
let yVelocity = 10;

let x = 40;
let xVelocity = 10;

function onChangeY(value) {
  y = value;
}

setInterval(() => {
  y += yVelocity;
  x += xVelocity;

  const sandboxRect = window.sandbox.getBoundingClientRect();
  if (y > sandboxRect.bottom || y < sandboxRect.top) {
    yVelocity = -1 * yVelocity;
  }
  if (x >= sandboxRect.right || x <= sandboxRect.left) {
    xVelocity = -1 * xVelocity;
  }

  render();
}, 40);

function render() {
  window.sandbox.innerHTML = "";
  appendEl(
    window.sandbox,
    dom.div({ class: "ball", style: `top: ${y}; left: ${x}` }, "")
  );
}

window.onload = () => {
  console.log("ready");

  // appendEl(document.body, dom.h1("Page title"));
};
