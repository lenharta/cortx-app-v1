const TodoForm = ({ onSubmit, children }) => {
  return(
    <form
      className="TodoForm"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}
export default TodoForm;