import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { RegionDetail } from "./components/regionDetail/RegionDetail";

import { UseSaveRegion } from "./hook/UseSaveRegion";

function App() {
  const [night, setNight] = useState(false);
  // const [region, setRegion] = useState ([])

const {handleGetRegion,region,deleteLocalRegion} = UseSaveRegion()

  const ChangeMode = () => {
    setNight(!night);
  };

  // const handleGetRegion = (item) => {
  //   // console.log("Clicked on region:", item);
  //   setRegion(item);
   
  // };

 

  

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
              />
            }
          />
           <Route path="/region" element={<RegionDetail night={night} region={region} deleteLocalRegion={deleteLocalRegion} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
