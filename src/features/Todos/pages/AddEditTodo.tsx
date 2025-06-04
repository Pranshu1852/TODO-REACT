import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { StateType } from '../../../store/store';
import { todoAction } from '../../../store/todoSlice';
import type { InputRef } from '../../../types/Reftype';
import { type Todo } from '../../../types/TodoContextType';
import { PriorityType, StatusType } from '../../../types/Todotypes';
import InputField from '../../Formvalidation/InputField';
import RadioGroupField from '../../Formvalidation/RadioGroupField';
import TextAreaField from '../../Formvalidation/TextAreaField';

function AddEditTodo() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState<Todo | undefined>(undefined);

  const { todoArray } = useSelector((state: StateType) => {
    return {
      todoArray: state.todo.todoArray,
    };
  });

  const dispatch = useDispatch();

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
    setTodoData(todo);
  }, [todoArray, id]);

  const formRefs = useRef<Record<string, InputRef | null>>({});

  const registerRef = (name: string) => (element: InputRef | null) => {
    formRefs.current[name] = element;
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    let isValid = true;
    const data: Record<string, string> = {};
    for (const key of Object.keys(formRefs.current)) {
      if (formRefs.current[key] && formRefs.current[key].validation().isError) {
        isValid = false;
      }

      if (formRefs.current[key]) {
        data[key] = formRefs.current[key].value;
      }
    }

    if (!isValid) {
      return;
    }

    const todo: Todo = {
      id: id ?? crypto.randomUUID(),
      title: data.title,
      description: data.description,
      priority: data.priority as PriorityType,
      status: (data.status as StatusType) ?? StatusType.NOTSELECTED,
      created_at: todoData ? todoData.created_at : new Date(),
    };

    const todoStringify = JSON.stringify(todo);

    if (id) {
      dispatch(todoAction.updateTodo(todoStringify));
    } else {
      dispatch(todoAction.addTodo(todoStringify));
    }

    navigate('/todos');
  }

  return (
    <div className='flex w-full mt-10 p-10'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-10 p-7 border-2 border-black rounded-lg m-auto w-full max-w-2xl'
      >
        <h2 className='text-2xl font-[Tagesschrift] text-center'>
          {id ? 'Edit' : 'Add'} ToDo
        </h2>
        <div className='flex flex-col gap-7'>
          <InputField
            ref={registerRef('title')}
            label='Title'
            id='title'
            name='title'
            placeholder='Enter todo title...'
            value={todoData ? todoData.title : ''}
            rules={{
              required: {
                value: true,
                message: t('This is require field.'),
              },
              minLength: {
                value: 3,
                message: t('Minimum length should be 3.'),
              },
            }}
            validationMode='all'
          />
          <TextAreaField
            ref={registerRef('description')}
            label='Description'
            id='description'
            name='description'
            placeholder='Enter todo description...'
            value={todoData ? todoData.description : ''}
            rules={{
              required: {
                value: true,
                message: t('This is require field.'),
              },
              minLength: {
                value: 10,
                message: t('Minimum length should be 10.'),
              },
            }}
            validationMode='all'
            rows={5}
          />
          <RadioGroupField
            ref={registerRef('priority')}
            label='Priority'
            id='priority'
            name='priority'
            value={todoData ? todoData.priority : ''}
            options={[
              {
                label: 'High',
                value: PriorityType.HIGH,
              },
              {
                label: 'Medium',
                value: PriorityType.MEDIUM,
              },
              {
                label: 'Low',
                value: PriorityType.LOW,
              },
            ]}
            rules={{
              required: {
                value: true,
                message: t('This is require field.'),
              },
            }}
            validationMode='all'
          />
          {id && (
            <RadioGroupField
              ref={registerRef('status')}
              label='Status'
              id='status'
              name='status'
              value={todoData ? todoData.status : ''}
              options={[
                {
                  label: 'Not Started',
                  value: StatusType.NOTSELECTED,
                },
                {
                  label: 'In Progress',
                  value: StatusType.INPROGRESS,
                },
                {
                  label: 'Completed',
                  value: StatusType.COMPLETED,
                },
              ]}
              rules={{
                required: {
                  value: true,
                  message: t('This is require field.'),
                },
              }}
              validationMode='all'
            />
          )}
        </div>

        <button className='bg-black text-white py-2 px-4 rounded-md m-auto'>
          {id ? 'Change' : 'Create'} Todo
        </button>
      </form>
    </div>
  );
}

export default AddEditTodo;
