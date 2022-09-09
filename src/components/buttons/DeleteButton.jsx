import Icons from "../assets/Icons"

const DeleteButton = ({ onClick }) => {
  return(
    <button onClick={onClick} className="DeleteButton">
      <Icons name="Delete" />
      <p>Delete</p>
    </button>
  )
}
export default DeleteButton;