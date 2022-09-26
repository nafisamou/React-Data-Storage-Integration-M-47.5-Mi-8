import React, { useEffect, useState } from "react";
import { getTotal } from "../../utilities/calculate";
import Cosmetic from "./Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [Cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  
const total = getTotal(Cosmetics);

  return (
    <div>
      <h1>This is my Cosmetics Compo</h1>
      <p>Total:{total} </p>
      {Cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
