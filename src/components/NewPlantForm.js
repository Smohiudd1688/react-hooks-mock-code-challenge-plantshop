import React, {useState} from "react";

function NewPlantForm({onNewPlantSubmit}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();

    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(plant => onNewPlantSubmit(plant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form  onSubmit={handleSubmit} >
        <input 
              type="text" 
              name="name" 
              placeholder="Plant name" 
              value={name} 
              onChange={(event) => setName(event.target.value)}
        />
        <input 
              type="text" 
              name="image" 
              placeholder="Image URL" 
              value={image}
              onChange={(event) => setImage(event.target.value)}
        />
        <input 
              type="number" 
              name="price" 
              step="0.01" 
              placeholder="Price"
              value={price} 
              onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
