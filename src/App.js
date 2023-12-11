import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { RegionDetail } from "./components/regionDetail/RegionDetail";


import { UseSaveRegion } from "./hook/UseSaveRegion";


function App() {
  const [night, setNight] = useState(false);
  const [result, setResult] = useState([])
  const [clicked,setClicked] = useState([])

const {handleGetRegion,region,deleteLocalRegion} = UseSaveRegion()

  const ChangeMode = () => {
    setNight(!night);
  };

  const handleClick = (item) => {
    setClicked((prevClicked) => [...prevClicked, item]);
    const savedDataString = localStorage.getItem('myStore') || '[]';
    const savedData = JSON.parse(savedDataString);
    savedData.push(item);
    localStorage.setItem('myStore', JSON.stringify(savedData));
    // console.log(savedData, 'localclicked');
  };
 
  console.log('clicked', clicked)
  

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
