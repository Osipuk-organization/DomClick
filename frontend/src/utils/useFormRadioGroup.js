import {
  useState
} from "react";

export const useFormRadioGroup = function (initialValue, name, callback) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    if (e.target.checked) {
      setValue(e.target.dataset.value);
    }
    try {
      callback({value: e.target.dataset.value, name});
    } catch (err) {
      console.log(err);
    }
  };

  return {
    value,
    name,
    onChange: handleChange
  }
};