import "./styles/global.css";
import style from "./App.module.css";
import { SearchView } from "./components/SearchView/SearchView";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={style.layout}>
      <NavBar containerClass={style.navigation}></NavBar>
      <div className={style.main}>
        <div className={style.scrollableContainer}>
          <SearchView></SearchView>
        </div>
      </div>
    </div>
  );
}

export default App;
