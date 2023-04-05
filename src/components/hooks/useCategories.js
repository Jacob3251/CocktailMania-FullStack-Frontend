import React, { useEffect, useState } from "react";

const useCategories = () => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return [cat, loading];
};

export default useCategories;
