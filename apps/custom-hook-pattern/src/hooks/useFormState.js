import { useCallback, useState } from "react";

function useFormState(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    reset,
    setValues,
  };
}

export default useFormState;
