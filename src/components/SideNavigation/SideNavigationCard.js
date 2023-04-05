import React from "react";

const SideNavigationCard = ({ name }) => {
  return (
    <div className="bg-transparent hover:bg-white py-3 flex justify-center w-[75%] mx-auto shadow-none hover:shadow-[#e6c9a48e] hover:shadow-lg duration-500 hover:bg-opacity-25 rounded-md  font-semibold text-orange-600">
      <h1 className="">{name}</h1>
    </div>
  );
};

export default SideNavigationCard;
