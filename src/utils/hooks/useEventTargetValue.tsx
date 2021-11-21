import React from 'react';

export default function useEventTargetValue(defaultValue = ''): {
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleReset(): void;
  setValue: (value: React.SetStateAction<string>) => void;
  handleTextChange(e: string): void;
} {
  const [value, setValue] = React.useState(defaultValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleTextChange(e: string): void {
    setValue(e);
  }

  function handleReset(): void {
    setValue(defaultValue);
  }

  return {
    value,
    handleChange,
    handleReset,
    setValue,
    handleTextChange,
  };
}
