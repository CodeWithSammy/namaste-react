import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    resName: "Meghana Foods",
  },
  {
    resName: "KFC",
  },
  {
    resName: "McDonald's",
  },
  {
    resName: "Dominos",
  },
];
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://dynamic.brandcrowd.com/asset/logo/5c6cee11-6c92-402c-bda4-e2c11ec15db3/logo-search-grid-1x?logoTemplateVersion=3&v=638584435499400000"
        alt="Namaste React Logo"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResCard = (props) => {
    
    const { resData } = props;
    console.log(props);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://dynamic.brandcrowd.com/asset/logo/5c6cee11-6c92-402c-bda4-e2c11ec15db3/logo-search-grid-1x?logoTemplateVersion=3&v=638584435499400000"
        alt="Restaurant Logo"
      />
      <h3>{resData.resName}</h3>
      <a>Cuisine</a>
      <a>4.3 Rating</a>
      <a>Delivery Time</a>
      <a>Cost for Two</a>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <ResCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
