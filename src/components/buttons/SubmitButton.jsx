const SubmitButton = ({ disabled, title, ariaLabel }) => {
  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        aria-label={ariaLabel}
        className="TodoForm__btn_submit"
      >
        {title}
      </button>
    </>
  );
};
export default SubmitButton;
