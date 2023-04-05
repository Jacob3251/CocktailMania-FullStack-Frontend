import React, { useEffect, useState } from "react";
import SideNavigationCard from "./SideNavigationCard";
import axios from "axios";
import useCategories from "../hooks/useCategories";
const SideNavigation = () => {
  const [cat, loading] = useCategories();
  return (
    <div className="w-[18%] bg-orange-400 bg-opacity-30 rounded-l-md ">
      <h3 className=" font-bold text-xl text-center my-8 text-orange-600">
        Categories
      </h3>
      {loading ? (
        <>
          <h3>Loading</h3>
        </>
      ) : (
        <div className=" flex flex-col space-y-5">
          {cat.map((u) => (
            <SideNavigationCard name={u.strCategory} />
          ))}
          <SideNavigationCard></SideNavigationCard>
          <SideNavigationCard></SideNavigationCard>
          <SideNavigationCard></SideNavigationCard>
        </div>
      )}
    </div>
  );
};

export default SideNavigation;
