import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";


function App() {

  const [night, setNight] = useState(false)

  return (
    <div className="App">
     <MainPage night={night} setNight={setNight}/>
    </div>
  );
}

export default App;
