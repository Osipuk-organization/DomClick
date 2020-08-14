import {
  useState
} from "react";

export const useFormCheckboxGroup = function (initialValue, name, callback) {
  const [value, setValue] = useState(initialValue); // []

  const handleChange = function (e) {
    let res;

    if (e.target.checked && !value.includes(e.target.dataset.value)) {
      res = value.concat(e.target.dataset.value);
    } else {
      res = value.filter(i => i !== e.target.dataset.value);
    }

    setValue(res);

    try {
      callback && callback({value: res, name});
    } catch (err) {
      console.log(err);
    }
  };

  return {
    value,
    name,
    type: 'checkbox',
    onChange: handleChange
  }
};