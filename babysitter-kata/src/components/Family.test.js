import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Family from "./Family";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a selected family", () => {
//   act(() => {
//     render(<Family />, container);
//   });
//   expect(container.textContent).toBe("Please select a family");

  act(() => {
    render(<Family name="A" />, container);
  });
  expect(container.textContent).toBe("A");

  act(() => {
    render(<Family name="B" />, container);
  });
  expect(container.textContent).toBe("B");
});