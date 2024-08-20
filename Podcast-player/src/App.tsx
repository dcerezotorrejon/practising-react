import "./styles/global.css";
import style from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import SearchView from "./components/SearchView/SearchView.tsx";

function App() {
  return (
    <div className={style.layout}>
      <NavBar containerClass={style.navigation} />
      <div className={style.main}>
        <div className={style.scrollableContainer}>
          <SearchView />
        </div>
      </div>
    </div>
  );
}

export default App;
