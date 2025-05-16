import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext, type Todo } from '../context/TodoContext';
import {
  formatDate,
  getPriorityColor,
  getStatusColor,
} from '../../../utils/todoUtils';

function TodoDetailPage() {
  const { id } = useParams();
  const todoContext = useContext(TodoContext);
  const [todoData, setTodoData] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    function findTodo(todoArray: Array<Todo>, id: string) {
      const todo = todoArray.find((element) => {
        return element.id === id;
      });

      return todo;
    }

    if (!todoContext || !id) {
      return;
    }

    const todo = findTodo(todoContext.state.todoArray, id);
    setTodoData(todo);
  }, []);

  if (!id) {
    return <h2>Please Provide valid id.</h2>;
  }

  if (!todoContext) {
    return;
  }

  if (!todoData) {
    return <h2>Something wrong.</h2>;
  }

  return (
    <div className="flex flex-col gap-10 border-2 border-black rounded-lg p-10 bg-todo-60 bg-cover text-black">
      <h2 className="text-3xl font-bold font-[Tagesschrift]">
        {todoData.title}
      </h2>
      <div className="flex flex-row gap-2 justify-between text-sm md:text-base font-medium">
        <p>
          Priority:{' '}
          <span className={`${getPriorityColor(todoData.priority)}`}>
            {todoData.priority}
          </span>
        </p>
        <p>
          Status:{' '}
          <span className={`${getStatusColor(todoData.status)}`}>
            {todoData.status}
          </span>
        </p>
        <p>
          Created at: <span>{formatDate(new Date(todoData.created_at))}</span>
        </p>
      </div>
      <p className="text-xl">{todoData.description}</p>
      <div className="flex flex-row gap-5 justify-between">
        <button className="text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all">
          Edit
        </button>
        <button className="text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg bg-black text-white hover:bg-transparent hover:text-black transition-all">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPage;
