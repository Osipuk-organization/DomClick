import {
  useState
} from "react";

export const useFormInput = function (initialValue, name="", callback) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value);
    try {
      callback({value: e.target.value, name});
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
