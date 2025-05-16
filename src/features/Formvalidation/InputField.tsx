import {
  useImperativeHandle,
  useState,
  type ChangeEvent,
  type FocusEvent,
} from 'react';
import { ErrorCheck } from '../../utils/validation';
import type { InputRef } from '../../types/Reftype';

interface Rules {
  value: boolean | number | string | RegExp;
  message: string;
}

type InputFieldProps = {
  label?: string;
  id: string;
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: FocusEvent<HTMLInputElement>) => void;
  rules?: Record<string, Rules>;
  validationMode: 'onChange' | 'onBlur' | 'all';
  ref: (element: InputRef | null) => void;
} & Omit<React.HTMLProps<HTMLInputElement>,'ref'>;

function InputField({
  label,
  id,
  placeholder,
  onChange,
  onBlur,
  rules,
  validationMode,
  ref,
  ...props
}: InputFieldProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useImperativeHandle(ref, () => {
    return {
      validation: () => {
        const errormessage = CheckError(value);
        return {
          error: errormessage,
          isError: errormessage !== '',
        };
      },
      value,
    };
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (
      validationMode &&
      (validationMode === 'all' || validationMode === 'onChange')
    ) {
      CheckError(inputValue);
    }

    if (onChange) {
      onChange(event);
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (
      validationMode &&
      (validationMode === 'all' || validationMode === 'onBlur')
    ) {
      CheckError(event.target.value);
    }

    if (onBlur) {
      onBlur(event);
    }
  }

  function CheckError(inputVal: string) {
    if (rules) {
      const errorMessage = (function isError(): string {
        for (const rule of Object.keys(rules)) {
          if (ErrorCheck(rule, rules[rule].value, inputVal)) {
            return rules[rule].message;
          }
        }
        return '';
      })();
      setError(errorMessage);
      return errorMessage;
    }
    return '';
  }

  return (
    <div className="flex flex-col gap-2 self-start w-full">
      {label && (
        <label className="text-lg font-medium" htmlFor={id}>
          {label}
          {rules && rules.required && rules.required.value && (
            <span className="text-red-600"> *</span>
          )}
        </label>
      )}
      <input
        className="border-[1.5px] border-black rounded-md p-2"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {error !== '' && (
        <p className="text-red-600 font-medium text-sm">{error}</p>
      )}
    </div>
  );
}

export default InputField;
