import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import type { StateType } from '../../../store/store';
import { todoAction } from '../../../store/todoSlice';
import { type Todo } from '../../../types/TodoContextType';
import {
  formatDate,
  getPriorityColor,
  getStatusColor,
} from '../../../utils/todoUtils';

function TodoDetailPage() {
  const { id } = useParams();
  const [todoData, setTodoData] = useState<Todo | undefined>(undefined);
  const { todoArray } = useSelector((state: StateType) => {
    return {
      todoArray: state.todo.todoArray,
    };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    function findTodo(todoArray: Array<Todo>, id: string) {
      const todo = todoArray.find((element) => {
        return element.id === id;
      });

      return todo;
    }

    if (!id) {
      return;
    }

    const todo = findTodo(todoArray, id);

    if (!todo) {
      showBoundary('Please Enter Valid ID');
      return;
    }

    setTodoData(todo);
  }, [todoArray, id, showBoundary]);

  if (!id || !todoData) {
    return;
  }

  function handleDelete() {
    if (id) {
      dispatch(todoAction.removeTodo(id));
      navigate('/todos');
    }
  }

  return (
    <div className='flex flex-col gap-10 border-2 border-black rounded-lg p-10 bg-todo-60 bg-cover text-black'>
      <h2 className='text-3xl font-bold font-[Tagesschrift]'>
        {todoData.title}
      </h2>
      <div className='flex flex-row gap-2 justify-between text-sm md:text-base font-medium'>
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
          Created at: <span>{formatDate(todoData.created_at)}</span>
        </p>
      </div>
      <p className='text-xl'>{todoData.description}</p>
      <div className='flex flex-row gap-5 justify-between'>
        <Link
          to={`/edittodo/${todoData.id}`}
          className='text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all'
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className='text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg bg-black text-white hover:bg-transparent hover:text-black transition-all'
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPage;
