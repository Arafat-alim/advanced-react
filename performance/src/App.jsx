import BasicRenderProp from "./Components/BasicRenderProp";

const App = () => {
  return (
    <div className="app">
      {/* <BasicRenderProp
        render={function (name) {
          return <h1>Hey There! {name}</h1>;
        }}
      /> */}
      <BasicRenderProp
        render={function (number) {
          return <h1>{number % 2 === 0 ? "Even" : "Odd"}</h1>;
        }}
      />
    </div>
  );
};

export default App;
