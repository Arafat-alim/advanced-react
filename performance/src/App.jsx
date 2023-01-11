import ClassApp from "./ContextAPI/ClassApp";
import UserContext from "./ContextAPI/userContext";

const App = () => {
  return (
    <UserContext.Provider value={"Arafat"}>
      <div className="app">
        <ClassApp />
      </div>
    </UserContext.Provider>
  );
};

export default App;
