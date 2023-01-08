import { useLayoutEffect } from "react";
import BasicRenderProp from "./Components/BasicRenderProp";

const App = () => {
  return (
    <div className="app">
      {/* <BasicRenderProp
        render={function (name) {
          return <h1>Hey There! {name}</h1>;
        }}
      /> */}
      {/* <BasicRenderProp
        render={function (number) {
          return <h1>{number % 2 === 0 ? "Even" : "Odd"}</h1>;
        }} */}
      <BasicRenderProp
        render={function (arr) {
          return arr.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          });
        }}
      />
    </div>
  );
};

export default App;
