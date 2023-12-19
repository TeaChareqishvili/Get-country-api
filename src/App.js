import { MainPage } from "./components/mainPage/MainPage";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { RegionDetail } from "./components/regionDetail/RegionDetail";
import { UseSaveRegion } from "./hook/UseSaveRegion";

function App() {
  const [night, setNight] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = nightMode ? "#212e37" : "#fafafa";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [nightMode]);

  const {
    handleGetRegion,
    region,
    deleteLocalRegion,
    handleClick,
    clicked,
    setClicked,
    result,
    setResult,
    chosenRegion,
    setChosenRegion,
  } = UseSaveRegion();

  const ChangeMode = () => {
    setNight(!night);
    setNightMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <div className={night ? "night-mode" : "main-wrapper"}>
        <Header night={night} setNight={setNight} ChangeMode={ChangeMode} />
      </div>
      <Routes>
        <Route
          path="/Get-country-api"
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
              chosenRegion={chosenRegion}
              setChosenRegion={setChosenRegion}
            />
          }
        />
        <Route
          path="/region"
          element={
            <RegionDetail
              night={night}
              region={region}
              deleteLocalRegion={deleteLocalRegion}
              clicked={clicked}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;


