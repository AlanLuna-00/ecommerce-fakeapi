import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { useFetchItems } from "../hooks/useFetchItems.js";
import Filters from "./Filters.jsx";
import "../App.css";

const Cards = () => {
  const { items, loading, error } = useFetchItems();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => setShowSpinner(true), 500);
    } else {
      setShowSpinner(false);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="cards-container">
      <h1 className="cards-title mt-2 mb-2 text-3xl">Products</h1>
      <Filters />
      {showSpinner && <div className="cards-spinner mt-3" />}
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 mt-4">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              id={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
