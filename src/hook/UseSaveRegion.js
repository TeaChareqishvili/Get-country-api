
import { useState, useEffect } from "react";


const UseSaveRegion = ()=>{

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
       
      };

      useEffect(() => {
        localStorage.setItem('region', JSON.stringify(region));
        
      }, [region]);

      return {handleGetRegion, region,deleteLocalRegion}
}

export {UseSaveRegion}