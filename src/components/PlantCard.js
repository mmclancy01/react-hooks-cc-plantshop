import React, {useState} from "react";

function PlantCard({plant, setPlants}) {
  const [stock, setStock] = useState(true)
  function handleToggle() {
    setStock(!stock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
