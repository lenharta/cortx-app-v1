import InputLabel from "./InputLabel";

const InputTitle = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <InputLabel id={id} label={label} />
      <input
        id={id}
        name={id}
        required
        autoFocus
        type="text"
        value={value}
        maxLength={100}
        onChange={onChange}
        placeholder={placeholder} 
        className="TodoForm__input_title"
      />
    </>
  );
};
export default InputTitle;
