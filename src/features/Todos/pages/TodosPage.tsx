import AddTaskIcon from '@mui/icons-material/AddTask';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Todo from '../../../components/Todo';
import SearchBar from '../components/SearchBar';
import { TodoContext } from '../context/TodoContext';

function TodosPage() {
  const { t } = useTranslation();
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return;
  }

  const { state } = todoContext;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row border-2 border-black p-5 rounded-lg">
        <SearchBar />
      </div>

      <div className="grid grid-cols-autofill-250 sm:grid-cols-autofill-500 gap-5">
        {state.todoArray.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              title={t(`${item.title}`)}
              description={t(`${item.description}`)}
              priority={item.priority}
              status={item.status}
              date={item.created_at}
            />
          );
        })}
      </div>
      <Link
        to="/addtodo"
        className="flex fixed bottom-7 right-7 bg-black p-5 rounded-full"
      >
        <AddTaskIcon
          sx={{
            color: 'white',
          }}
        />
      </Link>
    </div>
  );
}

export default TodosPage;
