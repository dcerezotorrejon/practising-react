import "./styles/global.css";
import style from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchContextProvider } from "./components/Contexts/SearchContext.tsx";
import SearchView from "./components/SearchView/SearchView.tsx";

function App() {
  return (
    <div className={style.layout}>
      <NavBar containerClass={style.navigation}></NavBar>
      <div className={style.main}>
        <div className={style.scrollableContainer}>
          <SearchContextProvider>
            <SearchView></SearchView>
          </SearchContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
