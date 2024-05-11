import React, { ReactElement, ReactNode } from 'react';

interface Props {
  variant: VariantTypes;
  children?: ReactNode;
}

type VariantTypes =
  | 'alert'
  | 'secondary'
  | 'dark'
  | 'primary'
  | 'textStone600'
  | 'textStone700'
  | 'textStone800';

export default function Button({ variant, children }: Props): ReactElement {
  let buttonToRender: ReactNode;

  switch (variant) {
    case 'alert':
      buttonToRender = (
        <button className="text-stone-700 hover:text-red-500">
          {children}
        </button>
      );
      break;
    case 'dark':
      buttonToRender = (
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          {children}
        </button>
      );
      break;
    case 'secondary':
      buttonToRender = (
        <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
          {children}
        </button>
      );
      break;
    case 'primary':
      buttonToRender = (
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          {children}
        </button>
      );
      break;
    case 'textStone600':
      buttonToRender = (
        <button className="text-stone-600 hover:text-stone-950">6</button>
      );
      break;
    case 'textStone700':
      buttonToRender = (
        <button className="text-stone-700 hover:text-stone-950">4</button>
      );
      break;
    case 'textStone800':
      buttonToRender = (
        <button className="text-stone-800 hover:text-stone-950">2</button>
      );
      break;
  }

  return buttonToRender;
}
