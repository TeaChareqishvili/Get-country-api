



const UseFetchData = async () => {
  const apiUrl = "https://restcountries.com/v3.1/all";
  try {
    const storedData = localStorage.getItem("countriesData");
    if (storedData) {
      const jsonData = JSON.parse(storedData);
      console.log("Data in local storage:", jsonData);
      return jsonData;
    }
    
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    localStorage.setItem("countriesData", JSON.stringify(jsonData));

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
 
};

export { UseFetchData };

