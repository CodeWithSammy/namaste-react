import React, { Component } from "react";
import ReactDOM from "react-dom/client";


// JSX ( transpiles before it reaches the JS)-> PARCEL -> Babel 

// JSX -> Babel transpiles it to React.createElement -> ReactElement - JS object -> HTMLElement(render)

const jsxHeading =  <h1 className="head" tabIndex="5"> Hello from the Jsx Side</h1> // jsx element


const HeadingFromSecondComponent =()=>(  <h1 className="head" tabIndex="5"> Hello from the Jsx Side</h1> 
);// jsx element

// functional Component
const Heading =()=>(
  <div id = "container">
    {HeadingFromSecondComponent()}
    <HeadingFromSecondComponent></HeadingFromSecondComponent> 
    <HeadingFromSecondComponent/> 
    <h1 className="head" tabIndex="5"> Hello from Functional component</h1>
  </div>
);

// Component composition is component inside another component

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));root.render(<Heading/>);