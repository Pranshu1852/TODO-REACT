import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from 'react-router-dom';
import Todo, { PriorityType, StatusType } from '../../../components/Todo';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';

function TodosPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row border-2 border-black p-5 rounded-lg">
        <SearchBar />
      </div>

      <div className="grid grid-cols-autofill-250 sm:grid-cols-autofill-500 gap-5">
        <Todo
          title={t('Todo Title')}
          description={t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis rerum assumenda illum libero eum eveniet, quaerat doloribus nostrum totam possimus fuga in blanditiis dolor adipisci aliquam odio veniam natus.'
          )}
          priority={PriorityType.HIGH}
          status={StatusType.COMPLETED}
          date={new Date()}
        />
        <Todo
          title={t('Todo Title')}
          description={t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis rerum assumenda illum libero eum eveniet, quaerat doloribus nostrum totam possimus fuga in blanditiis dolor adipisci aliquam odio veniam natus.'
          )}
          priority={PriorityType.MEDIUM}
          status={StatusType.INPROGRESS}
          date={new Date()}
        />
        <Todo
          title={t('Todo Title')}
          description={t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis rerum assumenda illum libero eum eveniet, quaerat doloribus nostrum totam possimus fuga in blanditiis dolor adipisci aliquam odio veniam natus.'
          )}
          priority={PriorityType.LOW}
          status={StatusType.NOTSELECTED}
          date={new Date()}
        />
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
