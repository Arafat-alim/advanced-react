const BasicRenderProp = (props) => {
  return <div>{props.render(["Bob", "Jack", "Rahman"])}</div>;
};

export default BasicRenderProp;
