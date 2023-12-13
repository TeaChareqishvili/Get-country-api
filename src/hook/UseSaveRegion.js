
import { useState, useEffect } from "react";


const UseSaveRegion = ()=>{

  const [clicked,setClicked] = useState([])

    const [region, setRegion] = useState(()=>{

        const storedChosenRegion = localStorage.getItem('region');
        return storedChosenRegion ? JSON.parse(storedChosenRegion) : [];
     
    })

    const handleGetRegion = (item) => {
        setRegion((prevRegion) => [...prevRegion, item]);
      };

      const deleteLocalRegion = () => {
        localStorage.removeItem('region');
        setRegion([]);
        localStorage.removeItem('muStore')
        setClicked([])
        console.log('delete')
       
      };

      useEffect(() => {
        localStorage.setItem('region', JSON.stringify(region));
        
      }, [region]);

      const handleClick = (item) => {
        setClicked((prevClicked) => [...prevClicked, item]);
        const savedDataString = localStorage.getItem('myStore') || '[]';
        const savedData = JSON.parse(savedDataString);
        savedData.push(item);
        localStorage.setItem('myStore', JSON.stringify(savedData));
        // console.log(savedData, 'localclicked');
      };

      return {handleGetRegion, region,deleteLocalRegion, handleClick, clicked,setClicked}
}

export {UseSaveRegion}