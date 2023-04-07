import React, { useEffect, useState, useContext } from "react";
import SideNavigationCard from "./SideNavigationCard";
import axios from "axios";
import useCategories from "../hooks/useCategories";
import "./SideNavigation.css";
const SideNavigation = () => {
  const [cat, loading] = useCategories();
  const [op, setOp] = useState(true);

  return (
    <div
      onMouseLeave={() => setOp(false)}
      onMouseEnter={() => setOp(true)}
      className={`w-[100%] mx-auto z-50  sticky top-0 ${
        op ? "bg-white " : " bg-[#E37383] text-[#f5f5f5]"
      }`}
    >
      <h3 className=" font-bold text-4xl ml-8 pt-5 text-[#7B3F00]">
        Cocktail Mania !!
      </h3>
      <h3 className=" font-bold text-xl text-left  ml-8 pt-5">
        Sort By Categories:
      </h3>
      {loading ? (
        <>
          <h3>Loading</h3>
        </>
      ) : (
        <div className=" flex flex-row justify-evenly px-5 py-2 ">
          {cat.map((u) => (
            <SideNavigationCard
              key={u.strCategory}
              name={u.strCategory}
              h={op}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavigation;
