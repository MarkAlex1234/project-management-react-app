import React, { forwardRef, HTMLInputTypeAttribute } from 'react';
import { format } from 'date-fns';

interface Props {
  type: HTMLInputTypeAttribute;
  label: string;
  min?: string | number;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, min, label }, ref) => {
    let minValue = min;

    // If there is a Min sent and the type is of Date we need to format it here and pass to the input;
    if (min && type === 'date') {
      minValue = format(new Date(min), 'yyyy-MM-dd');
    }

    return (
      <>
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type={type}
          min={minValue}
          ref={ref}
        />
      </>
    );
  }
);

export default Input;
