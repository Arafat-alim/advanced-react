import FavoriteRenderProps from "./Components/FavoriteRenderProps";
import MenuRenderProps from "./Components/MenuRenderProps";

const App = () => {
  return (
    <div className="app">
      <MenuRenderProps />
      <hr />
      <FavoriteRenderProps />
    </div>
  );
};

export default App;
