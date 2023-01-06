import "./App.css";

import PropsTypesCheck from "./classbased/PropsTypesCheck";

const App = () => {
  return (
    <div>
      <h1>React Application</h1>

      <PropsTypesCheck cardColor={"red"} width={121} />
      <PropsTypesCheck cardColor={"blue"} />
      <PropsTypesCheck cardColor={"pink"} height={212} />
    </div>
  );
};

export default App;
