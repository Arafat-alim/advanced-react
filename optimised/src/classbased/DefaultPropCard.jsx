const DefaultPropCard = (props) => {
  const style = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };
  return <div style={style}></div>;
};

//! Default Props
DefaultPropCard.defaultProps = {
  cardColor: "pink",
  height: 100,
  width: 100,
};

export default DefaultPropCard;
