const setSelectionRange = (input, selectionStart, selectionEnd) => {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

const setCaretToPos = (input, pos) => {
  setSelectionRange(input, pos, pos);
};

const clickPhone = (e) => {
  const element = e.currentTarget;
  const mask = "+7(___)___-____";
  if (!element.value) {
    element.value = mask;
  }
  setCaretToPos(element, element.value.search("_"));
};

const blurPhone = (e) => {
  const element = e.currentTarget;
  const numberPhone = element.value.match(/(\d)/g);
  if (numberPhone && numberPhone.length <= 1) {
    element.value = "";
  }
};

const inputPhone = (e) => {
  const element = e.currentTarget;
  const mask = "+7(___)___-____",
    numberPhone = element.value.match(/(\d)/g);
  if (numberPhone && element.value.length != mask.length) {
    const reg1 = /\)/g,
      reg2 = /\-/g;
    numberPhone.splice(0, 1);
    if (numberPhone[0] === "8") {
      numberPhone.splice(0, 1);
    }
    if (!reg1.test(element.value)) {
      numberPhone.splice(2, 1);
    }
    if (!reg2.test(element.value)) {
      numberPhone.splice(5, 1);
    }
    while (numberPhone.length < 10) {
      numberPhone.push("_");
    }
    numberPhone.splice(12, numberPhone.length);
    numberPhone.splice(6, 0, "-");
    numberPhone.splice(3, 0, ")");
    numberPhone.splice(0, 0, "+7(");
    element.value = numberPhone.join("");
    setCaretToPos(element, element.value.search("_"));
  }
};

export const phoneMask = function () {
  return {
    onClick: clickPhone,
    onFocus: clickPhone,
    onBlur: blurPhone,
    onInput: inputPhone,
  }
}