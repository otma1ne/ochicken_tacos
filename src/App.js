import "./App.scss";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import Header from "./shared/Header/Header.jsx"
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer /> 
    </div>
  );
}

export default App;
