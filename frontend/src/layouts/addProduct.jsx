import React from 'react';

export class addProduct extends Component {
    render() {
        return (
            <>
                <from class="_container _row" action="/new-card/" method="POST">
                    <h1 class="_col-12">Новый объект</h1>
                    <h3 class="add-card__caption _col-12">ФИО</h3>
                    <div class="_col-12">
                        <input class="input" type="text" name="name" placeholder="ФИО" />
                    </div>
                    <h3 class="add-card__caption _col-12">Документы</h3>
                    <div class="_col-12">
                        <input type="file" name="files" multiple
                            accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .xlsm" />
                    </div>
                    <h3 class="add-card__caption _col-12">Оценочная стоимость объекта</h3>
                    <div class="_col-12">
                        <input class="input" type="number" />
                    </div>
                    <h3 class="add-card__caption _col-12">Адрес</h3>
                    <div class="_col-12">
                        <input class="input" type="text" name="name" placeholder="Адрес" />
                    </div>
                    <div class="_col-12">
                        <iframe class="map-info__frame"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2243.0407002126926!2d49.14050991977406!3d55.792531171705015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1594554153460!5m2!1sru!2sua"
                            allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                    <h3 class="add-card__caption _col-12">Сделка</h3>
                    <div class="_col-12 _col-md-6">
                        <div class="add-card__title">Тип сделки</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="tt1" type="radio" name="type-transaction" checked />
                            <label class="button _s" for="tt1">Продажа</label>
                            <input class="_hidden" id="tt2" type="radio" name="type-transaction" />
                            <label class="button _s" for="tt2">Аренда</label>
                        </div>
                    </div>
                    <div class="_col-12 _col-md-6">
                        <div class="add-card__title">Вид недвижимости</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="pt1" type="radio" name="property-type" checked />
                            <label class="button _s" for="pt1">Жилая</label>
                            <input class="_hidden" id="pt2" type="radio" name="property-type" />
                            <label class="button _s" for="pt2">Коммерческая</label>
                            <input class="_hidden" id="pt3" type="radio" name="property-type" /><label class="button _s" for="pt3">Гараж</label>
                        </div>
                    </div>
                    <div class="_col-12">
                        <div class="add-card__title">Тип недвижимости</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="tp1" type="radio" name="type-of-property" checked />
                            <label class="button _s" for="tp1">Квартира</label>
                            <input class="_hidden" id="tp2" type="radio" name="type-of-property" />
                            <label class="button _s" for="tp2">Комната</label>
                            <input class="_hidden" id="tp3" type="radio" name="type-of-property" />
                            <label class="button _s" for="tp3">Дом</label>
                            <input class="_hidden" id="tp4" type="radio" name="type-of-property" />
                            <label class="button _s" for="tp4">Таунхаус</label>
                            <input class="_hidden" id="tp5" type="radio" name="type-of-property" />
                            <label class="button _s" for="tp5">Часть дома</label>
                            <input class="_hidden" id="tp6" type="radio" name="type-of-property" />
                            <label class="button _s" for="tp6">Участок</label>
                        </div>
                    </div>
                    <div class="_col-12">
                        <div class="add-card__title">Лет в собственности</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="yo1" type="radio" name="years-owned" checked />
                            <label class="button _s" for="yo1">Меньше 3-х</label>
                            <input class="_hidden" id="yo2" type="radio" name="years-owned" />
                            <label class="button _s" for="yo2">От 3-х до 5-ти</label>
                            <input class="_hidden" id="yo3" type="radio" name="years-owned" />
                            <label class="button _s" for="yo3">Больше 5-ти</label>
                        </div>
                    </div>
                    <div class="_col-12 _col-md-6">
                        <div class="add-card__title">Собственники</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="ow1" type="radio" name="owners" checked />
                            <label class="button _s" for="ow1">1</label>
                            <input class="_hidden" id="ow2" type="radio" name="owners" />
                            <label class="button _s" for="ow2">2</label>
                            <input class="_hidden" id="ow3" type="radio" name="owners" />
                            <label class="button _s" for="ow3">3+</label>
                        </div>
                        <label>
                            <input type="checkbox" />Есть несовершеннолетние
                        </label>
                    </div>
                    <div class="_col-12 _col-md-6">
                        <div class="add-card__title">Прописано</div>
                        <div class="add-card__button-box _row">
                            <input class="_hidden" id="pr1" type="radio" name="prescribed" checked />
                            <label class="button _s" for="pr1">1</label>
                            <input class="_hidden" id="pr2" type="radio" name="prescribed" />
                            <label class="button _s" for="pr2">2</label>
                            <input class="_hidden" id="pr3" type="radio" name="prescribed" />
                            <label class="button _s" for="pr3">3+</label>
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