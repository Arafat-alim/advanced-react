import "./App.css";
import CardClassProps from "./classbased/CardClassProps";

const App = () => {
  return (
    <div>
      <h1>React Application</h1>
      <CardClassProps cardsColor="red" />
      <CardClassProps width={200} height={200} />
      <CardClassProps cardsColor="blue" />
    </div>
  );
};

export default App;
