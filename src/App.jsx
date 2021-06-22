import React from "react";
import Header from "./Container/Header";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./assets/scss/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Container/Content";

export default function App() {
  return (
    <>
      {/* <Router> */}
      <div className="wrapper">
        <Header />
        <Content />
      </div>
      {/* </Router> */}
    </>
  );
}
