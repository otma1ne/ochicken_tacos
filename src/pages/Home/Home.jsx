import React from "react";
import Home_page from "../../shared/Homa_page/Home_page.jsx"
import  Wrapper from "../../shared/components/Wrapper/wrapper.jsx"
import Sales from "../../shared/components/Sales/Sales.jsx"
function Home() {
  return (
    <div>
      <Home_page />
      <Wrapper />
      <Sales />
    </div>
  );
}

export default Home;
