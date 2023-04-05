import React, { useState } from "react";
import useAllDrinks from "../hooks/useAllDrinks";

const CocktailContainer = () => {
  const [catType, setCatType] = useState(0);
  const [drinks, loading] = useAllDrinks("Ordinary_Drink");
  console.log(drinks);
  return (
    <div className="w-[75%] bg-white  bg-opacity-10 rounded-r-md ml-5">
      <h3 className="text-left ml-10 my-5 text-orange-600 text-xl font-semibold">
        Title
      </h3>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <h3>Total Drinks{drinks.length}</h3>
          <div className="grid grid-cols-3 gap-5 p-5">
            {drinks.map((drink) => (
              <div className="bg-red-500">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <h3>{drink.strDrink}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CocktailContainer;
