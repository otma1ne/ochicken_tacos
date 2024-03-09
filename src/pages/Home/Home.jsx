import React from "react";
import HomePage from "../../shared/HomePage/HomePage.jsx";
import Wrapper from "../../shared/components/Wrapper/wrapper.jsx";
import Sales from "../../shared/components/Sales/Sales.jsx";
import Menu from "../../shared/components/Menu/Menu.jsx";
function Home() {
  return (
    <div>
      <HomePage />
      <Sales />
      <Wrapper />
      <Menu />
    </div>
  );
}

export default Home;
