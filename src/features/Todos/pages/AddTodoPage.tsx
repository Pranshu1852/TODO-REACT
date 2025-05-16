import { useContext, useRef, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import TextAreaField from '../../Formvalidation/TextAreaField';
import InputField from '../../Formvalidation/InputField';
import RadioGroupField from '../../Formvalidation/RadioGroupField';
import type { InputRef } from '../../../types/Reftype';
import { useNavigate, useParams } from 'react-router-dom';
import {
  TodoContext,
  TodoContextActions,
  type Todo,
} from '../context/TodoContext';
import { PriorityType, StatusType } from '../../../components/Todo';

function AddTodoPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const formRefs = useRef<Record<string, InputRef | null>>({});

  const registerRef = (name: string) => (element: InputRef | null) => {
    formRefs.current[name] = element;
  };

  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return;
  }

  const { dispatch } = todoContext;

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
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      priority: data.priority as PriorityType,
      status: StatusType.NOTSELECTED,
      created_at: new Date(),
    };

    dispatch({ type: TodoContextActions.ADDTODO, payload: todo });
    navigate('/todos');
  }

  return (
    <div className="flex w-full mt-10 p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 p-7 border-2 border-black rounded-lg m-auto w-full max-w-2xl"
      >
        <h2 className="text-2xl font-[Tagesschrift] text-center">Add ToDo</h2>
        <div className="flex flex-col gap-7">
          <InputField
            ref={registerRef('title')}
            label="Title"
            id="title"
            name="title"
            placeholder="Enter todo title..."
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
            validationMode="all"
          />
          <TextAreaField
            ref={registerRef('description')}
            label="Description"
            id="description"
            name="description"
            placeholder="Enter todo description..."
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
            validationMode="all"
            rows={5}
          />
          <RadioGroupField
            ref={registerRef('priority')}
            label="Priority"
            id="priority"
            name="priority"
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
            validationMode="all"
          />
          {id && (
            <RadioGroupField
              ref={registerRef('status')}
              label="Status"
              id="status"
              name="status"
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
              validationMode="all"
            />
          )}
        </div>

        <button className="bg-black text-white py-2 px-4 rounded-md m-auto">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;
