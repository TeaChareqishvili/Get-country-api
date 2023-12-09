

const UseFetchData = async () => {
  const apiUrl = "https://restcountries.com/v3.1/all";
  try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
    
      return jsonData;

      
  } catch (error) {
      console.error("Error fetching data:", error);
      return null;
  }
 
};
export { UseFetchData };
