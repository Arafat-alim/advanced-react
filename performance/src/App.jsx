import { withPointlessHOC } from "./HOC/withPointlessHOC";
import { withExtraPropsAdded } from "./HOC/withExtraPropsAdded";

const App = (props) => {
  console.log(props);
  return (
    <div className="app">
      <h1>React Application</h1>
      <h2>{props.anotherProps}</h2>
    </div>
  );
};

export default withExtraPropsAdded(App);
