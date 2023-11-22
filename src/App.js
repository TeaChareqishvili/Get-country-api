import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";


function App() {

  const [night, setNight] = useState(false)

  const ChangeMode = () => {
    setNight(!night);
  };

  return (
    <div className="App">
     <MainPage night={night} setNight={setNight} ChangeMode={ChangeMode}/>
    </div>
  );
}

export default App;
