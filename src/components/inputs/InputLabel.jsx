const InputLabel = ({ id, label }) => {
  return (
    <label htmlFor={id} className="TodoForm__input_label">
      {label}
    </label>
  );
};
export default InputLabel;
