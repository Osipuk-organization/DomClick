import 'normalize.css';
import './swiper.min.css';
import './sass/index.scss';

const Swiper = require('./swiper.min');
for (let i of document.querySelectorAll('.swiper-container')) {
  let s = new Swiper(`#${i.id}`, {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1439: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: `#${i.id}-prev`,
      nextEl: `#${i.id}-next`,
    },
  });
}

function setSelectionRange(input, selectionStart, selectionEnd) {
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

function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}

function clickPhone(e) {
  let element = e.currentTarget;
  let mask = '+7(___)___-____';
  if (!element.value) {
    element.value = mask;
  }
  setCaretToPos(element, element.value.search("_"));
}

function blurPhone(e) {
  let element = e.currentTarget;
  let numberPhone = element.value.match(/(\d)/g);
  if (numberPhone && numberPhone.length <= 1) {
    element.value = '';
  }
}

function inputPhone(e) {
  let element = e.currentTarget;
  let mask = '+7(___)___-____',
    numberPhone = element.value.match(/(\d)/g);
  if (numberPhone && element.value.length != mask.length) {
    let reg1 = /\)/g,
      reg2 = /\-/g;
    numberPhone.splice(0, 1);
    if (numberPhone[0] === '8') {
      numberPhone.splice(0, 1);
    }
    if (!reg1.test(element.value)) {
      numberPhone.splice(2, 1);
    }
    if (!reg2.test(element.value)) {
      numberPhone.splice(5, 1);
    }
    while (numberPhone.length < 10) {
      numberPhone.push('_');
    }
    numberPhone.splice(12, numberPhone.length);
    numberPhone.splice(6, 0, '-');
    numberPhone.splice(3, 0, ')');
    numberPhone.splice(0, 0, '+7(');
    element.value = numberPhone.join('');
    setCaretToPos(element, element.value.search("_"));
  }
}

for (let i of document.querySelectorAll('input[type="tel"]')) {
  i.addEventListener("click", clickPhone);
  i.addEventListener("focus", clickPhone);
  i.addEventListener("blur", blurPhone);
  i.addEventListener('input', inputPhone);
}