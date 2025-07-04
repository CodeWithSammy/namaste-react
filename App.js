import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",    
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grandchild" }, "H1 tag 1"),
    React.createElement("h1", { id: "grandchild" }, "H1 tag 2"),
  ]),React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grandchild" }, "H1 tag 1.1"),
    React.createElement("h1", { id: "grandchild" }, "H1 tag 2.2"),
  ])]
);

const heading = React.createElement("h1", {}, "Hello, World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
