import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link } from "react-router-dom";

function TodosPage() {
  return (
    <div>
      <h2>Todo Page</h2>
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
