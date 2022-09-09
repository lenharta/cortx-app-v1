import InputLabel from "./InputLabel";

const InputDescription = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <InputLabel id={id} label={label} />
      <textarea
        id={id}
        name={id}
        value={value}
        maxLength={250}
        onChange={onChange}
        placeholder={placeholder}
        className="TodoForm__input_description"
      />
    </>
  );
};
export default InputDescription;
