import CTA from "./Children/CTA";

const App = () => {
  return (
    <div className="app">
      <h1>React Application</h1>
      <CTA>
        <h1>HI I am the children props</h1>
        <button>Click Me!</button>
      </CTA>
      <CTA>
        <h2>I am the second children Props</h2>
        <h3>You will love me! 💙</h3>
      </CTA>
    </div>
  );
};

export default App;
