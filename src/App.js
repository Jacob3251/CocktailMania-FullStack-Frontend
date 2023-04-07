import logo from "./logo.svg";
import "./App.css";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import CocktailContainer from "./components/CocktailContainer/CocktailContainer";
import { categoryContext } from "./components/contexts/catergoryContext";
import { useEffect, useState } from "react";
function App() {
  const [categoryName, setCategoryName] = useState("Ordinary Drink");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/pageCount?catname=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        // The code below will determine how many page button should we create
        const count = data.count;
        const pages = Math.ceil(count / 15);
        setPageCount(pages);
      });
  }, [categoryName, pageCount, page]);
  return (
    <div className="bg-gradient-to-br h-[100vh] overflow-scroll from-[#ff6b6b] to-[#ffd54f]">
      <div className="main">
        <categoryContext.Provider
          value={{
            categoryName,
            setCategoryName,
            pageCount,
            setPageCount,
            page,
            setPage,
          }}
        >
          <SideNavigation></SideNavigation>
          <CocktailContainer></CocktailContainer>
        </categoryContext.Provider>
      </div>
    </div>
  );
}

export default App;
