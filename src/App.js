import { MainPage } from "./components/mainPage/MainPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";

function App() {
  const [night, setNight] = useState(false);

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
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
