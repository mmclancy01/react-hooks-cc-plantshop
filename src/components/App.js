import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const[search, setSearch]= useState("")
  // const[plantsFiltered, setPlantsFiltered] = useState([])
  const filteredPlants = 
      plants.filter((plant) =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      );
  

  
  
  
     
    

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(response=> response.json())
    .then(data=> setPlants(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants= {filteredPlants} setPlants={setPlants} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
