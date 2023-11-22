

const UseFetchData = ()=>{

    const data = "https://restcountries.com/v3.1/all"

    fetch(data)
      .then(response => response.json("data",data))
      .then(json => console.log(json))
       console.log("nia", data)
    

      return data
}
export {UseFetchData}