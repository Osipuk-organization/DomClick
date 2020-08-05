import {
  useState
} from "react";

export const useInput = function (initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value)
  };

  return {
    value,
    onChange: handleChange
  }
};
