const Button = ({ onClick, btnText, style }) => {
  return (
    <button className="button-div" style={style} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
