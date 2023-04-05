import logo from "./logo.svg";
import "./App.css";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import CocktailContainer from "./components/CocktailContainer/CocktailContainer";

function App() {
  return (
    <div className="bg-gradient-to-br h-[100vh] overflow-scroll from-[#E4FF1A] to-[#FF5714]">
      <h3 className="text-center font-bold text-4xl py-8 text-[#7B3F00]">
        Cocktail Mania !!
      </h3>
      <div className="main">
        <SideNavigation></SideNavigation>
        <CocktailContainer></CocktailContainer>
      </div>
    </div>
  );
}

export default App;
