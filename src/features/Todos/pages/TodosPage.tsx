import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link } from "react-router-dom";
import Todo from "../../../components/Todo";

function TodosPage() {
  return (
    <div>
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
