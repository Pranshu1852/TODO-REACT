import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link } from "react-router-dom";
import Todo from "../../../components/Todo";
import SearchBar from "../components/SearchBar";

function TodosPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row border-2 border-black p-5 rounded-lg">
        <SearchBar />
      </div>
      <div className="grid grid-cols-autofill-250 sm:grid-cols-autofill-500 gap-5">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Link
        to="/addtodo"
        className="flex fixed bottom-7 right-7 bg-black p-5 rounded-full"
      >
        <AddTaskIcon
          sx={{
            color: "white",
          }}
        />
      </Link>
    </div>
  );
}

export default TodosPage;
