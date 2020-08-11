import React, {
  useState
} from "react";

export const useFormFiles = function ({accept=[], size}, name="", callback) {
  const [files, setFiles] = useState([]);

  const stopProp = function(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  const drop = function(callback, e) {
    stopProp(e);
    callback(e);
  }

  const handleChange = function (e) {
    const element = e.dataTransfer || e.target;
    let res = [];

    for (let i = 0; i < element.files.length; i++) {
      const file = element.files[i];
      /**
       * todo
       * добавить проверку типов и размера
       */
      res[i] = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          resolve({
            type: file.type,
            name: file.name,
            size: file.size,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            webkitRelativePath: file.webkitRelativePath,
            data: e.target.result,
          })
        };
        reader.readAsDataURL(file);
      });
    }

    Promise.all(res).then(i => {
      setFiles(i)
      try {
        callback && callback({value: i, name});
      } catch (err) {
        console.log(err);
      }
    });
  };

  return {
    data: files,
    id: name,
    name,
    accept,
    type: 'file',
    dragNdrop: {
      onDragEnter: stopProp,
      onDragOver: stopProp,
      onDrop: drop.bind(null, handleChange),
    },
    onChange: handleChange
  }
};