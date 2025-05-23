import AddTaskIcon from '@mui/icons-material/AddTask';
import { useContext, useEffect, useState, type ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';

import TodoComponent from '../../../components/Todo';
import type { Todo } from '../../../types/TodoContextType';
import { PriorityType, StatusType } from '../../../types/Todotypes';
import { filterArray, searchArray } from '../../../utils/FilterUtils';
import MultipleSelectChip from '../components/MultiSelect';
import SearchBar from '../components/SearchBar';
import TodoContext from '../context/TodoContext';

function TodosPage() {
  const { t } = useTranslation();
  const todoContext = useContext(TodoContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (todoContext) {
      setTodos(todoContext.state.todoArray);
    }
  }, [todoContext]);

  useEffect(() => {
    if(!todoContext){
      return;
    }

    let filterTodos = todoContext.state.todoArray;
    if (
      todoContext &&
      (searchParams.has('search') ||
        searchParams.has('priority') ||
        searchParams.has('status'))
    ) {

      if (searchParams.has('search')) {
        filterTodos = searchArray(
          todoContext.state.todoArray,
          searchParams.get('search')
        );
      }

      if (searchParams.has('priority')) {  
        filterTodos = filterArray(
          filterTodos,
          searchParams.get('priority')!.split(','),
          'priority'
        );
      }

      if (searchParams.has('status')) {
        filterTodos = filterArray(
          filterTodos,
          searchParams.get('status')!.split(','),
          'status'
        );
      }

    }
    setTodos(filterTodos);
  }, [todoContext, searchParams]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!todoContext) {
      return;
    }

    const searchQuery = event.target.value;
    
    searchParams.set('search', searchQuery);
    setSearchParams(searchParams);
    if (searchQuery === '') {
      if (searchParams.has('search')) {
        searchParams.delete('search');
        setSearchParams(searchParams);
      }
    }
  }

  function handleFilter(value: string | string[], label: string) {
    searchParams.set(label,value.toString());
    setSearchParams(searchParams);

    if (value.length === 0) {
      if (searchParams.has(label)) {
        searchParams.delete(label);
        setSearchParams(searchParams);
      }
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-4 flex-wrap lg:flex-nowrap border-2 border-black p-5 rounded-lg">
        <SearchBar value={searchParams.get('search') ?? ''} handleChange={handleChange} />
        <MultipleSelectChip
          label="Priority"
          value={searchParams.get('priority')?.split(',') ?? []}
          options={[PriorityType.HIGH, PriorityType.MEDIUM, PriorityType.LOW]}
          onChange={handleFilter}
        />
        <MultipleSelectChip
          label="Status"
          value={searchParams.get('status')?.split(',') ?? []}
          options={[
            StatusType.NOTSELECTED,
            StatusType.INPROGRESS,
            StatusType.COMPLETED,
          ]}
          onChange={handleFilter}
        />
      </div>

      <div className="grid grid-cols-autofill-250 sm:grid-cols-autofill-500 gap-5">
        {todos.map((item) => {
          return (
            <TodoComponent
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
