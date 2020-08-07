import {
  useState
} from "react";

export const useFormCheckboxGroup = function (initialValue, name, callback) {
  const [value, setValue] = useState(initialValue); // []

  const handleChange = function (e) {
    if (e.target.checked && !value.includes(e.target.dataset.value)) {
      setValue(value.concat(e.target.dataset.value));
    } else {
      setValue(value.filter(i => i !== e.target.dataset.value));
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