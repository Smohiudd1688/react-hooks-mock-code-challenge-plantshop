import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const renderPlants = plants?.map(plant => {
    return <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price} />
  });

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
