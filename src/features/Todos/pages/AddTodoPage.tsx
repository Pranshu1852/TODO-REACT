import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TextAreaField from '../../Formvalidation/TextAreaField';
import InputField from '../../Formvalidation/InputField';
import RadioGroupField from '../../Formvalidation/RadioGroupField';
import type { InputRef } from '../../../types/Reftype';
import { useParams } from 'react-router-dom';

function AddTodoPage() {
  const { t } = useTranslation();
  const { id } = useParams();

  const formRefs = useRef<Record<string, InputRef | null>>({});

  const registerRef = (name: string) => (element: InputRef | null) => {
    formRefs.current[name] = element;
  };

  return (
    <div className="flex w-full mt-10 p-10">
      <form className="flex flex-col gap-10 p-7 border-2 border-black rounded-lg m-auto w-full max-w-2xl">
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
                value: 5,
                message: t('Minimum length should be 5.'),
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
                value: 'High',
              },
              {
                label: 'Medium',
                value: 'Medium',
              },
              {
                label: 'Low',
                value: 'Low',
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
                  value: 'Not Started',
                },
                {
                  label: 'In Progress',
                  value: 'In Progress',
                },
                {
                  label: 'Completed',
                  value: 'Completed',
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
