import Movie from "./Components/Movie";
import Favorite from "./Components/Favorite";

const App = () => {
  return (
    <div className="app">
      <Movie />
      <hr />
      <Favorite />
    </div>
  );
};

export default App;
