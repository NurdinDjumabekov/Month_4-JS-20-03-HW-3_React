import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ObjectsProducts from "./components/ObjecsaProducts/ObjectsProducts";
function App() {
  const [value, setValue] = useState(" ");
  const inputsearch = (e) => {
    setValue(e.target.value);
    let inputInfo = e.target.value;
    console.log(inputInfo);
  };

  return (
    <div className="App">
      <Menu onSearch={inputsearch} />
      <ObjectsProducts value={value} />
    </div>
  );
}

export default App;
