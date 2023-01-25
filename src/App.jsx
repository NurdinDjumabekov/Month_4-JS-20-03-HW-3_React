import "./App.css";
import Menu from "./components/Menu/Menu";
import ObjectsProducts from "./components/ObjecsaProducts/ObjectsProducts";
import { useState } from "react";
// import Backet from "./components/Backet/Backet";

function App() {
  // const [countBasket, setCountBasket] = useState(0)
  return (
    <div className="App">
      <Menu />
      <ObjectsProducts />
      {/* <Backet /> */}
    </div>
  );
}

export default App;

