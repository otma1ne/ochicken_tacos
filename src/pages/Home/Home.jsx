import React from "react";
import Home_page from "../../shared/Homa_page/Home_page.jsx"
import Wrapper from "../../shared/components/Wrapper/wrapper.jsx"
import Sales from "../../shared/components/Sales/Sales.jsx"
import Menu from "../../shared/components/Menu/Menu.jsx"
function Home() {
  return (
    <div>
      <Home_page />
      <Sales />
      <Wrapper />
      <Menu />
    </div>
  );
}

export default Home;
