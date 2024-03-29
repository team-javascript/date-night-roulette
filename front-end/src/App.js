import React, { useEffect, useState } from "react";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";

const App = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({ places: [] });

  // make method to sort by price that changes state of area.places. That way we dont need to hit db
  useEffect(() => {
    fetch("http://localhost:4000/api/areas")
      .then(res => res.json())
      .then(areas => setAreas(areas));
  }, []);

  const getArea = userAreaId => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}`)
      .then(res => res.json())
      .then(area => setArea(area));
  };

  return (
    <div className="wrapper">
      <Layout areas={areas} getArea={getArea}>
        <PlaceCardList places={area.places} />
      </Layout>
    </div>
  );
};
export default App;
