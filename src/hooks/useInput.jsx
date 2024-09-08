import { useState } from 'react';

export default function useInput(defaultState, validationFunction) {
  const [enteredValue, setEnteredValue] = useState(defaultState);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFunction(enteredValue);

  const handleInputChange = e => {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => setDidEdit(true);

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  };
}