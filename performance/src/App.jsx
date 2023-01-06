import { withPointlessHOC } from "./HOC/withPointlessHOC";

const App = () => {
  return (
    <div className="app">
      <h1>React Application</h1>
    </div>
  );
};

export default withPointlessHOC(App);
