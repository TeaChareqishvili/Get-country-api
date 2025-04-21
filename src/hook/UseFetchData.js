const UseFetchData = async () => {
  const apiUrl = "/api/countries";

  try {
    const storedData = localStorage.getItem("countriesData");
    if (storedData) {
      const jsonData = JSON.parse(storedData);
      return jsonData;
    }
    console.log(storedData, "data");
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    localStorage.setItem("countriesData", JSON.stringify(jsonData));

    return jsonData;
  } catch (error) {
    return null;
  }
};

export { UseFetchData };
