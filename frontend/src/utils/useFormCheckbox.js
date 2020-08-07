import {
  useState
} from "react";

export const useFormCheckbox = function (initialValue, name, callback) {
  const [value, setValue] = useState(!!initialValue);

  const handleChange = function (e) {
    setValue(!value);
    try {
      callback({value: e.target.checked, name});
    } catch (err) {
      console.log(err);
    }
  };

  return {
    checked: value,
    name,
    onChange: handleChange
  }
};