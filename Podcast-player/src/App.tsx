import "./styles/global.css";
import style from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Suspense, lazy } from "react";
import { SearchContextProvider } from "./components/Contexts/SearchContext.tsx";
const SearchView = lazy(() => import("./components/SearchView/SearchView.tsx"));
function App() {
  return (
    <div className={style.layout}>
      <NavBar containerClass={style.navigation}></NavBar>
      <div className={style.main}>
        <div className={style.scrollableContainer}>
          <Suspense>
            <SearchContextProvider>
              <SearchView></SearchView>
            </SearchContextProvider>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
