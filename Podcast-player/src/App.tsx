import "./styles/global.css";
import style from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Suspense, lazy } from "react";
const SearchView = lazy(() => import("./components/SearchView/SearchView.tsx"));
function App() {
  return (
    <div className={style.layout}>
      <NavBar containerClass={style.navigation}></NavBar>
      <div className={style.main}>
        <div className={style.scrollableContainer}>
          <Suspense>
            <SearchView></SearchView>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
