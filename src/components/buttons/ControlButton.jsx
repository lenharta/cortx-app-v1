const ControlButton = ({ onClick, value, title }) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`TodoList__controls_btn-${value}`}
    >
      {title}
    </button>
  );
};
export default ControlButton;
