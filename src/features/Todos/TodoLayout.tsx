import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { StatusType } from '../../types/Todotypes';

import TodoContext from './context/TodoContext';

function TodoLayout() {
  const { t } = useTranslation();
  const { state } = useContext(TodoContext);
  const [todoStatusNo, setTodoStatusNo] = useState({
    [StatusType.NOTSELECTED]: 0,
    [StatusType.INPROGRESS]: 0,
    [StatusType.COMPLETED]: 0,
  });

  useEffect(() => {
    setTodoStatusNo({
      [StatusType.NOTSELECTED]: 0,
      [StatusType.INPROGRESS]: 0,
      [StatusType.COMPLETED]: 0,
    });
    state.todoArray.forEach((item) => {
      setTodoStatusNo((prevStatus) => {
        return {
          ...prevStatus,
          [item.status]: prevStatus[item.status] + 1,
        };
      });
    });
  }, [state]);

  return (
    <div className='flex flex-col gap-10 m-10'>
      <div className='flex flex-col gap-10 border-2 border-black rounded-md font-[Tagesschrift] p-5'>
        <div className='flex flex-row gap-2 items-center'>
          <AssignmentTurnedInIcon />
          <h2 className='text-xl font-medium'>{t('Todo Status')}</h2>
        </div>
        <div className='flex flex-row justify-around'>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl'>{todoStatusNo[StatusType.NOTSELECTED]}</h3>
            <h3>Not Started</h3>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl'>{todoStatusNo[StatusType.INPROGRESS]}</h3>
            <h3>In Progress</h3>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl'>{todoStatusNo[StatusType.COMPLETED]}</h3>
            <h3>Completed</h3>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default TodoLayout;
