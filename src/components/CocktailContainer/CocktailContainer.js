import React, { useContext, useEffect, useState } from "react";
import useAllDrinks from "../hooks/useAllDrinks";
import { categoryContext } from "../contexts/catergoryContext";
const CocktailContainer = () => {
  const [catType, setCatType] = useState(0);
  const [drinks, setDrinks] = useState([]);
  // useAllDrinks("Ordinary_Drink");
  // states for finding the total number of pages in the data

  const { categoryName, pageCount, setPageCount, page, setPage } =
    useContext(categoryContext);
  // State for find the current page

  // console.log(drinks);
  useEffect(() => {
    fetch(`http://localhost:5000/paged?type=${categoryName}&page=${page}`)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, [page, categoryName]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/pageCount?catname=${categoryName}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // The code below will determine how many page button should we create
  //       const count = data.count;
  //       const pages = Math.ceil(count / 15);
  //       setPageCount(pages);
  //     });
  // }, [categoryName]);
  return (
    <div className="w-[100%] bg-white  bg-opacity-10 rounded-md ml-5">
      {/* pagination Button */}
      <>
        <div className="my-5 py-5 pl-5">
          {page === 0 ? (
            <></>
          ) : (
            <button
              onClick={() => setPage(page === 0 ? page : page - 1)}
              className="bg-white mr-2 px-4 py-1 bg-opacity-20 hover:bg-opacity-90 hover:scale-[1.04] rounded-md font-semibold duration-300"
            >
              Previous
            </button>
          )}
          <button className="bg-white mr-2 px-4 py-1 bg-opacity-20 rounded-md font-semibold ">
            {page + 1}
          </button>
          {page + 1 === pageCount ? (
            <button
              className="bg-white mr-2 px-4 py-1 bg-opacity-20  rounded-md font-semibold "
              disabled
            >
              Finished
            </button>
          ) : (
            <button
              onClick={() => setPage(page + 1 == pageCount ? page : page + 1)}
              className="bg-white mr-2 px-4 py-1 bg-opacity-20 hover:bg-opacity-90 hover:scale-[1.04] rounded-md font-semibold duration-300"
            >
              Next
            </button>
          )}
        </div>

        {/* {[...Array(pageCount).keys()].map((id) => (
          <button
            onClick={() => {
              setPage(id);
            }}
            className="bg-white mr-2 px-4 py-1"
          >
            {id + 1}
          </button>
        ))} */}
      </>
      {/* {loading ? (
        <div>Loading</div>
      ) : ( */}
      <>
        <div className="grid grid-cols-3 w-[80%] mx-auto p-5 gap-y-[80px] z-0">
          {drinks.map((drink) => (
            <div className="bg-white bg-opacity-25 pb-5 w-[80%] mx-auto rounded-xl hover:shadow-orange-700 hover:shadow-lg hover:scale-105 duration-300">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="rounded-t-xl w-full"
              />
              <h3 className="ml-5 mt-8 font-bold text-lg">{drink.strDrink}</h3>
            </div>
          ))}
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default CocktailContainer;
