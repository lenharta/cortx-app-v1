import {
  BsCheckCircle,
  BsCircle, // Empty Check Circle
  BsListCheck, // All
  BsUiChecksGrid, // Categories
  BsSearch, // Search
  BsArrowUpRight, // Link
  BsTrash, // Delete Todo
  BsFillPencilFill, // Edit Todo
  BsPlusCircle, // Add Todo
  BsArrowUpLeftCircle, // back link
  BsCalendar3, // calendar
} from "react-icons/bs";

const Icons = ({ name }) => {
  switch (name) {
    case "All":
      return <BsListCheck />;
    case "Categories":
      return <BsUiChecksGrid />;
    case "Search":
      return <BsSearch />;
    case "Delete":
      return <BsTrash />;
    case "Edit":
      return <BsFillPencilFill />;
    case "Add":
      return <BsPlusCircle />;
    case "Link":
      return <BsArrowUpRight />;
    case "Completed":
      return <BsCheckCircle />;
    case "Incomplete":
      return <BsCircle />;
    case "Back":
      return <BsArrowUpLeftCircle />;
    case "Calendar":
      return <BsCalendar3 />;
    default:
      return <BsCheckCircle />;
  }
};

export default Icons;