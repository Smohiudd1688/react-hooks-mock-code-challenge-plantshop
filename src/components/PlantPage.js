import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantList => setPlants(plantList));
  }, []);

  function handlePlantSubmit(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleSearchChange(search) {
    setSearchInput(search);
  }

  const renderPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchInput.toUpperCase());
  })

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={handlePlantSubmit} />
      <Search searchInput={searchInput} onSearchChange={handleSearchChange} />
      <PlantList plants={renderPlants} />
    </main>
  );
}

export default PlantPage;
