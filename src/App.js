import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { RegionDetail } from "./components/regionDetail/RegionDetail";


import { UseSaveRegion } from "./hook/UseSaveRegion";


function App() {
  const [night, setNight] = useState(false);
  const [result, setResult] = useState([])
 

const {handleGetRegion,region,deleteLocalRegion, handleClick, clicked,setClicked} = UseSaveRegion()

  const ChangeMode = () => {
    setNight(!night);
  };



  return (
    <div className="App">
      <div className={night ? "night-mode" : "main-wrapper"}>
        <Header night={night} setNight={setNight} ChangeMode={ChangeMode} />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                night={night}
                setNight={setNight}
                ChangeMode={ChangeMode}
                handleGetRegion={handleGetRegion}
                result={result}
                setResult={setResult}
                clicked={clicked}
                setClicked={setClicked}
                handleClick={handleClick}
              />
            }
          />
           <Route path="/region" element={<RegionDetail night={night} region={region} deleteLocalRegion={deleteLocalRegion} clicked={clicked} />} />
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
