import style from "./App.module.css";
import { SearchView } from "./components/SearchView/SearchView";

function App() {
  return (
    <div className={style.mainLayout}>
      <SearchView></SearchView>
    </div>
  );
}

export default App;
