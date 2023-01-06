import "./App.css";
import DefaultPropCard from "./classbased/DefaultPropCard";

const App = () => {
  return (
    <div>
      <h1>React Application</h1>
      <DefaultPropCard cardColor="red" />
      <DefaultPropCard height={200} width={200} />
      <DefaultPropCard cardColor="green" />
    </div>
  );
};

export default App;
