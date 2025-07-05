import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="head" tabIndex="5">Namaste React hahahaha</h1>;
};
const number =100+20;
const HeadingComponent = () => {
  return (
    <div className="heading-container">
      <Title />
      {Title()}
      <Title></Title>
      {number}
      <h1 className="heading">Namaste React via Functional component </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
