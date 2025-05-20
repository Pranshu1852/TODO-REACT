import { Link } from 'react-router-dom';

import type { PriorityType, StatusType } from '../types/Todotypes';
import {
  formatDate,
  getPriorityColor,
  getStatusColor,
} from '../utils/todoUtils';

interface TodoProps {
  title: string;
  description: string;
  priority: PriorityType;
  status: StatusType;
  date: Date;
  id: string;
}

function Todo({ title, description, priority, status, date, id }: TodoProps) {
  return (
    <Link
      to={id}
      className="flex flex-col gap-5 border-2 border-black p-5 rounded-lg bg-todo-100 text-black bg-cover"
    >
      <h3 className="text-2xl font-semibold font-[Tagesschrift] truncate">
        {title}
      </h3>
      <p className="truncate">{description}</p>
      <div className="flex flex-row gap-2 justify-between text-sm md:text-base font-medium">
        <p>
          Priority:{' '}
          <span className={`${getPriorityColor(priority)}`}>{priority}</span>
        </p>
        <p>
          Status: <span className={`${getStatusColor(status)}`}>{status}</span>
        </p>
        <p>
          Created at: <span>{formatDate(date)}</span>
        </p>
      </div>
    </Link>
  );
}

export default Todo;
