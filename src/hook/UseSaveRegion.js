import { useState, useEffect } from "react";

const UseSaveRegion = () => {
  const [clicked, setClicked] = useState([]);
  const [result, setResult] = useState([]);
  const [chosenRegion, setChosenRegion] = useState([]);

  const [region, setRegion] = useState(() => {
    const storedChosenRegion = localStorage.getItem("region");
    return storedChosenRegion ? JSON.parse(storedChosenRegion) : [];
  });

  const handleGetRegion = (item) => {
    setRegion((prevRegion) => [...prevRegion, item]);
  };

  const deleteLocalRegion = () => {
    localStorage.removeItem("region");
    setRegion([]);
    localStorage.removeItem("myStore");
    setClicked([]);
  };

  useEffect(() => {
    localStorage.setItem("region", JSON.stringify(region));
  }, [region]);

  const handleClick = (item) => {
    setClicked((prevClicked) => [...prevClicked, item]);
    const savedDataString = localStorage.getItem("myStore") || "[]";
    const savedData = JSON.parse(savedDataString);
    savedData.push(item);
    localStorage.setItem("myStore", JSON.stringify(savedData));
    setResult(!result);
  };

  return {
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
  };
};

export { UseSaveRegion };
