import React, { useContext } from "react";
import { categoryContext } from "../contexts/catergoryContext";
const SideNavigationCard = ({ name, selectCategory, op }) => {
  const { setCategoryName, setPage } = useContext(categoryContext);
  return (
    <div
      onClick={() => {
        setCategoryName(name);
        setPage(0);
      }}
      className={`bg-transparent cursor-pointer hover:bg-white  py-3 flex justify-center w-[75%] mx-auto shadow-none hover:shadow-black hover:shadow-lg duration-500 hover:bg-opacity-25 rounded-md  font-semibold ${
        op && "text-[#333333]"
      }`}
    >
      <h1 className="">{name}</h1>
    </div>
  );
};

export default SideNavigationCard;
