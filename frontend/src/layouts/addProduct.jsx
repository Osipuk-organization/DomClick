import React, { PureComponent } from 'react';

import './add-card.scss';
import './map-info.scss';
import '../'
import DCInputField from '../components/DCInputField/DCInputField';
import DCInput from '../components/DCInput/DCInput';

export class AddProduct extends PureComponent {

    setSelectionRange = (input, selectionStart, selectionEnd) => {
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

    setCaretToPos = (input, pos) => {
        setSelectionRange(input, pos, pos);
    }

    clickPhone = (e) => {
        let element = e.currentTarget;
        let mask = '+7(___)___-____';
        if (!element.value) {
            element.value = mask;
        }
        setCaretToPos(element, element.value.search("_"));
    }

    blurPhone = (e) => {
        let element = e.currentTarget;
        let numberPhone = element.value.match(/(\d)/g);
        if (numberPhone && numberPhone.length <= 1) {
            element.value = '';
        }
    }

    inputPhone = (e) => {
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


    render() {
        for (let i of document.querySelectorAll('input[type="tel"]')) {
            i.addEventListener("click", clickPhone);
            i.addEventListener("focus", clickPhone);
            i.addEventListener("blur", blurPhone);
            i.addEventListener('input', inputPhone);
        };
        return (
            <>
                <from className="_container _row _col-10" action="/new-card/" method="POST">
                    <h1 className="_col-12">Новый объект</h1>
                    {/*<h3 className="add-card__caption _col-12">ФИО</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input className="input" type="text" name="name" placeholder="ФИО" />*/}
                    {/*</div>*/}
                    
                    <DCInputField
                      size={6}
                      label="ФИО"
                    >
                        <DCInput/>
                    </DCInputField>
                    
                    {/*<h3 className="add-card__caption _col-12">Документы</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input type="file" name="files" multiple*/}
                    {/*        accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .xlsm" />*/}
                    {/*</div>*/}
    
                    <DCInputField
                      size={6}
                      label="ФИО"
                    >
                        <DC/>
                    </DCInputField>
                    
                    <h3 className="add-card__caption _col-12">Оценочная стоимость объекта</h3>
                    <div className="_col-12">
                        <input className="input" type="number" />
                    </div>
                    <h3 className="add-card__caption _col-12">Адрес</h3>
                    <div className="_col-12">
                        <input className="input" type="text" name="name" placeholder="Адрес" />
                    </div>
                    <div className="_col-12">
                        <iframe className="map-info__frame"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2243.0407002126926!2d49.14050991977406!3d55.792531171705015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1594554153460!5m2!1sru!2sua"
                            allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                    <h3 className="add-card__caption _col-12">Сделка</h3>
                    <div className="_col-12 _col-md-6">
                        <div className="add-card__title">Тип сделки</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="tt1" type="radio" name="type-transaction" checked />
                            <label className="button _s" for="tt1">Продажа</label>
                            <input className="_hidden" id="tt2" type="radio" name="type-transaction" />
                            <label className="button _s" for="tt2">Аренда</label>
                        </div>
                    </div>
                    <div className="_col-12 _col-md-6">
                        <div className="add-card__title">Вид недвижимости</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="pt1" type="radio" name="property-type" checked />
                            <label className="button _s" for="pt1">Жилая</label>
                            <input className="_hidden" id="pt2" type="radio" name="property-type" />
                            <label className="button _s" for="pt2">Коммерческая</label>
                            <input className="_hidden" id="pt3" type="radio" name="property-type" /><label className="button _s" for="pt3">Гараж</label>
                        </div>
                    </div>
                    <div className="_col-12">
                        <div className="add-card__title">Тип недвижимости</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="tp1" type="radio" name="type-of-property" checked />
                            <label className="button _s" for="tp1">Квартира</label>
                            <input className="_hidden" id="tp2" type="radio" name="type-of-property" />
                            <label className="button _s" for="tp2">Комната</label>
                            <input className="_hidden" id="tp3" type="radio" name="type-of-property" />
                            <label className="button _s" for="tp3">Дом</label>
                            <input className="_hidden" id="tp4" type="radio" name="type-of-property" />
                            <label className="button _s" for="tp4">Таунхаус</label>
                            <input className="_hidden" id="tp5" type="radio" name="type-of-property" />
                            <label className="button _s" for="tp5">Часть дома</label>
                            <input className="_hidden" id="tp6" type="radio" name="type-of-property" />
                            <label className="button _s" for="tp6">Участок</label>
                        </div>
                    </div>
                    <div className="_col-12">
                        <div className="add-card__title">Лет в собственности</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="yo1" type="radio" name="years-owned" checked />
                            <label className="button _s" for="yo1">Меньше 3-х</label>
                            <input className="_hidden" id="yo2" type="radio" name="years-owned" />
                            <label className="button _s" for="yo2">От 3-х до 5-ти</label>
                            <input className="_hidden" id="yo3" type="radio" name="years-owned" />
                            <label className="button _s" for="yo3">Больше 5-ти</label>
                        </div>
                    </div>
                    <div className="_col-12 _col-md-6">
                        <div className="add-card__title">Собственники</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="ow1" type="radio" name="owners" checked />
                            <label className="button _s" for="ow1">1</label>
                            <input className="_hidden" id="ow2" type="radio" name="owners" />
                            <label className="button _s" for="ow2">2</label>
                            <input className="_hidden" id="ow3" type="radio" name="owners" />
                            <label className="button _s" for="ow3">3+</label>
                        </div>
                        <label>
                            <input type="checkbox" />Есть несовершеннолетние
                        </label>
                    </div>
                    <div className="_col-12 _col-md-6">
                        <div className="add-card__title">Прописано</div>
                        <div className="add-card__button-box _row">
                            <input className="_hidden" id="pr1" type="radio" name="prescribed" checked />
                            <label className="button _s" for="pr1">1</label>
                            <input className="_hidden" id="pr2" type="radio" name="prescribed" />
                            <label className="button _s" for="pr2">2</label>
                            <input className="_hidden" id="pr3" type="radio" name="prescribed" />
                            <label className="button _s" for="pr3">3+</label>
                        </div>
                        <label>
                            <input type="checkbox" />Есть несовершеннолетние
                        </label>
                    </div>
                </from>
            </>
        );
    }
}