import "../style.css";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "./themeContext";

const FunctionApp = () => {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {(theme) => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button />
    </div>
  );
};

export default FunctionApp;
