import PropTypes from "prop-types";

const PropsTypesCheck = (props) => {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };
  return <div style={styles}></div>;
};

PropsTypesCheck.propTypes = {
  cardColor: PropTypes.oneOf(["red", "green", "purple", "pink", "blue"])
    .isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};
PropsTypesCheck.defaultProps = {
  cardColor: "purple",
  height: 100,
  width: 100,
};
export default PropsTypesCheck;
