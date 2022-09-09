import Icons from "../assets/Icons";

const Checkbox = ({ onChange, checked, value, id, icon }) => {
  return (
    <div className="Checkbox">
      <input
        id={id}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`Checkbox__input`}
      />

      {value === true ? (
        <div className={`Checkbox__complete`}>
          <Icons name={icon} />
        </div>
      ) : (
        <div className={`Checkbox__incomplete`}>
          <Icons name={icon} />
        </div>
      )}
    </div>
  );
};
export default Checkbox;
