import { Link } from "react-router-dom";

export enum PriorityType {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

export enum StatusType {
  NOTSELECTED = "Not Started",
  INPROGRESS = "In Progress",
  COMPLETED = "Completed",
}

interface TodoProps {
  title: string;
  description: string;
  priority: PriorityType;
  status: StatusType;
  date: Date;
}

function Todo({ title, description, priority, status, date }: TodoProps) {

  const formattedDate = (function formatDate(date: Date) {
    const yyyy = date.getFullYear();
    let mm: string | number = date.getMonth() + 1;
    let dd: string | number = date.getDate();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    return dd + "/" + mm + "/" + yyyy;
  })(date);

  const priorityColor = (function getPriorityColor(priority: PriorityType) {
    switch (priority) {
      case PriorityType.HIGH: {
        return "text-red-600";
       
      }
      case PriorityType.MEDIUM: {
        return "text-orange-600";
        
      }
      case PriorityType.LOW: {
        return "text-yellow-600";
    
      }
      default: {
        return "";
  
      }
    }

  })(priority);

  const statusColor = (function getPriorityColor(status: StatusType) {
    switch (status) {
      case StatusType.NOTSELECTED: {
        return "text-purple-600";
       
      }
      case StatusType.INPROGRESS: {
        return "text-blue-600";
        break;
      }
      case StatusType.COMPLETED: {
        return "text-green-600";
        break;
      }
      default: {
        return "";
        break;
      }
    }

    return "";
  })(status);

  return (
    <Link to={`123`} className="flex flex-col gap-5 border-2 border-black p-5 rounded-lg bg-todo-100 text-black bg-cover">
      <h3 className="text-2xl font-semibold font-[Tagesschrift] truncate">
        {title}
      </h3>
      <p className="truncate">{description}</p>
      <div className="flex flex-row gap-2 justify-between text-sm md:text-base font-medium">
        <p>
          Priority: <span className={`${priorityColor}`}>{priority}</span>
        </p>
        <p>
          Status: <span className={`${statusColor}`}>{status}</span>
        </p>
        <p>
          Created at: <span>{formattedDate}</span>
        </p>
      </div>
    </Link>
  );
}

export default Todo;
