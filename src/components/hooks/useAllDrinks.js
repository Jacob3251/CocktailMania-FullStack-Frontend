import React, { useEffect, useState } from "react";

const useAllDrinks = (name) => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const url = `http://localhost:5000/categoriesDrinks?catName=${name}`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data);
        setLoading(false);
      });
  }, []);
  return [drinks, loading];
};

export default useAllDrinks;
