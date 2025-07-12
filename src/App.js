import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {path: "/", element: <Body />},
      { path: "/about", element: <About /> },
  {path:"/contact", element:<Contact />},
  {path: "/restaurant/:id", element: <ResMenu />},
  // This is a placeholder for the restaurant details page
  // You can create a separate component for restaurant details and use it here}
]}
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
