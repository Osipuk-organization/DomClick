import React, { PureComponent } from 'react'

import './styles.scss'
import DCInputField from '../../components/DCInputField'
import DCInput from '../../components/DCInput'
import DCAttachement from '../../components/DCAttachements'
import Ymap from '../../components/Ymaps'
import DCButtonGroup from '../../components/DCButtonGroup'
import DCCheckbox from '../../components/DCCheckbox'
import DCCheckboxGroup from '../../components/DCCheckboxGroup'
import DCButton from '../../components/DCButton'

export default class AddProduct extends PureComponent {
    address = {
        latitude: 55,
        longitude: 55,
    }

    setSelectionRange = (input, selectionStart, selectionEnd) => {
        if (input.setSelectionRange) {
            input.focus()
            input.setSelectionRange(selectionStart, selectionEnd)
        } else if (input.createTextRange) {
            const range = input.createTextRange()
            range.collapse(true)
            range.moveEnd('character', selectionEnd)
            range.moveStart('character', selectionStart)
            range.select()
        }
    }

    setCaretToPos = (input, pos) => {
        setSelectionRange(input, pos, pos)
    }

    clickPhone = (e) => {
        const element = e.currentTarget
        const mask = '+7(___)___-____'
        if (!element.value) {
            element.value = mask
        }
        setCaretToPos(element, element.value.search('_'))
    }

    blurPhone = (e) => {
        const element = e.currentTarget
        const numberPhone = element.value.match(/(\d)/g)
        if (numberPhone && numberPhone.length <= 1) {
            element.value = ''
        }
    }

    inputPhone = (e) => {
        const element = e.currentTarget
        const mask = '+7(___)___-____',
            numberPhone = element.value.match(/(\d)/g)
        if (numberPhone && element.value.length != mask.length) {
            const reg1 = /\)/g,
                reg2 = /\-/g
            numberPhone.splice(0, 1)
            if (numberPhone[0] === '8') {
                numberPhone.splice(0, 1)
            }
            if (!reg1.test(element.value)) {
                numberPhone.splice(2, 1)
            }
            if (!reg2.test(element.value)) {
                numberPhone.splice(5, 1)
            }
            while (numberPhone.length < 10) {
                numberPhone.push('_')
            }
            numberPhone.splice(12, numberPhone.length)
            numberPhone.splice(6, 0, '-')
            numberPhone.splice(3, 0, ')')
            numberPhone.splice(0, 0, '+7(')
            element.value = numberPhone.join('')
            setCaretToPos(element, element.value.search('_'))
        }
    }

    render() {
        for (const i of document.querySelectorAll('input[type="tel"]')) {
            i.addEventListener('click', clickPhone)
            i.addEventListener('focus', clickPhone)
            i.addEventListener('blur', blurPhone)
            i.addEventListener('input', inputPhone)
        }
        return (
            <>
                <from
                    className="_container _row _col-10"
                    action="/new-card/"
                    method="POST"
                >
                    <h1 className="_col-12">Новый объект</h1>
                    {/*<h3 className="add-card__caption _col-12">ФИО</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input className="input" type="text" name="name" placeholder="ФИО" />*/}
                    {/*</div>*/}

                    <DCInputField label="ФИО" fullWith>
                        <DCInput size={6} />
                    </DCInputField>

                    {/*<h3 className="add-card__caption _col-12">Документы</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input type="file" name="files" multiple*/}
                    {/*        accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .xls, .xlsx, .xlsm" />*/}
                    {/*</div>*/}

                    <DCInputField
                        // size={12}
                        label="Документы"
                        fullWith
                    >
                        <DCAttachement />
                    </DCInputField>

                    {/*<h3 className="add-card__caption _col-12">Оценочная стоимость объекта</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input className="input" type="number" />*/}
                    {/*</div>*/}

                    <DCInputField
                        label="Оценочная стоимость объекта"
                        withComment
                        fullWith
                    >
                        <DCInput size={6} />
                    </DCInputField>

                    {/*<h3 className="add-card__caption _col-12">Адрес</h3>*/}
                    {/*<div className="_col-12">*/}
                    {/*    <input className="input" type="text" name="name" placeholder="Адрес" />*/}
                    {/*</div>*/}

                    <DCInputField label="Адрес" withComment fullWith>
                        <DCInput size={6} />
                    </DCInputField>

                    <Ymap address={this.address} />

                    {/*<h3 className="add-card__caption _col-12">Сделка</h3>*/}
                    {/*<div className="_col-12 _col-md-6">*/}
                    {/*    <div className="add-card__title">Тип сделки</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="tt1" type="radio" name="type-transaction" checked />*/}
                    {/*        <label className="button _s" for="tt1">Продажа</label>*/}
                    {/*        <input className="_hidden" id="tt2" type="radio" name="type-transaction" />*/}
                    {/*        <label className="button _s" for="tt2">Аренда</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <DCInputField label="Сделка" withComment fullWith>
                        <div className="add-card_flex add-card-fieldsBlock">
                            <DCInputField
                                label="Тип сделки"
                                labelSize="subheader"
                            >
                                <DCButtonGroup
                                    buttons={[
                                        {
                                            label: 'Продажа',
                                        },
                                        {
                                            label: 'Аренда',
                                        },
                                    ]}
                                />
                            </DCInputField>
                            <DCInputField
                                label="Вид недвижимости"
                                labelSize="subheader"
                            >
                                <DCButtonGroup
                                    buttons={[
                                        {
                                            label: 'Жилая',
                                        },
                                        {
                                            label: 'Коммерческая',
                                        },
                                        {
                                            label: 'Гараж',
                                        },
                                    ]}
                                />
                            </DCInputField>
                        </div>
                    </DCInputField>

                    {/*<div className="_col-12 _col-md-6">*/}
                    {/*    <div className="add-card__title">Вид недвижимости</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="pt1" type="radio" name="property-type" checked />*/}
                    {/*        <label className="button _s" for="pt1">Жилая</label>*/}
                    {/*        <input className="_hidden" id="pt2" type="radio" name="property-type" />*/}
                    {/*        <label className="button _s" for="pt2">Коммерческая</label>*/}
                    {/*        <input className="_hidden" id="pt3" type="radio" name="property-type" /><label className="button _s" for="pt3">Гараж</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <DCInputField
                        label="Тип недвижимсоти"
                        labelSize="subheader"
                        fullWith
                    >
                        <DCButtonGroup
                            buttons={[
                                {
                                    label: 'Квартира',
                                },
                                {
                                    label: 'Комната',
                                },
                                {
                                    label: 'Дом',
                                },
                                {
                                    label: 'Таунхаус',
                                },
                                {
                                    label: 'Часть дома',
                                },
                                {
                                    label: 'Участок',
                                },
                            ]}
                        />
                    </DCInputField>

                    {/*<div className="_col-12">*/}
                    {/*    <div className="add-card__title">Тип недвижимости</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="tp1" type="radio" name="type-of-property" checked />*/}
                    {/*        <label className="button _s" for="tp1">Квартира</label>*/}
                    {/*        <input className="_hidden" id="tp2" type="radio" name="type-of-property" />*/}
                    {/*        <label className="button _s" for="tp2">Комната</label>*/}
                    {/*        <input className="_hidden" id="tp3" type="radio" name="type-of-property" />*/}
                    {/*        <label className="button _s" for="tp3">Дом</label>*/}
                    {/*        <input className="_hidden" id="tp4" type="radio" name="type-of-property" />*/}
                    {/*        <label className="button _s" for="tp4">Таунхаус</label>*/}
                    {/*        <input className="_hidden" id="tp5" type="radio" name="type-of-property" />*/}
                    {/*        <label className="button _s" for="tp5">Часть дома</label>*/}
                    {/*        <input className="_hidden" id="tp6" type="radio" name="type-of-property" />*/}
                    {/*        <label className="button _s" for="tp6">Участок</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <DCInputField
                        label="Лет в собственности"
                        labelSize="subheader"
                        fullWith
                    >
                        <DCButtonGroup
                            buttons={[
                                {
                                    label: 'Меньше 3-х',
                                },
                                {
                                    label: 'От 3-х до 5-ти',
                                },
                                {
                                    label: 'Больше 5-ти',
                                },
                            ]}
                        />
                    </DCInputField>

                    <div className="add-card_flex add-card-fieldsBlock _col-12">
                        <DCInputField
                            label="Собственники"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: '1',
                                    },
                                    {
                                        label: '2',
                                    },
                                    {
                                        label: '3+',
                                    },
                                ]}
                            />
                            <DCCheckbox
                                name="sobst18"
                                label="Есть несовершеннолетние"
                                value={true}
                                size="small"
                                bold
                            />
                        </DCInputField>
                        <DCInputField label="Прописано" labelSize="subheader">
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: '1',
                                    },
                                    {
                                        label: '2',
                                    },
                                    {
                                        label: '3+',
                                    },
                                ]}
                            />
                            <DCCheckbox
                                name="proj18"
                                label="Есть несовершеннолетние"
                                value={true}
                                size="small"
                                bold
                            />
                        </DCInputField>
                    </div>

                    <DCInputField label="Условия продажи" withComment fullWith>
                        <div className="add-card_flex add-card-fieldsBlock">
                            <DCInputField label="Цена" labelSize="subheader">
                                <DCInput />
                                <DCCheckbox
                                    name="price"
                                    label="Торг уместен"
                                    value={true}
                                    size="small"
                                    bold
                                />
                            </DCInputField>

                            <DCInputField label="Газ" labelSize="subheader">
                                <DCButtonGroup
                                    buttons={[
                                        {
                                            label: 'Да',
                                        },
                                        {
                                            label: 'Нет',
                                        },
                                    ]}
                                />
                            </DCInputField>

                            <DCInputField
                                label="Мусоропровод"
                                labelSize="subheader"
                            >
                                <DCButtonGroup
                                    buttons={[
                                        {
                                            label: 'Да',
                                        },
                                        {
                                            label: 'Нет',
                                        },
                                    ]}
                                />
                            </DCInputField>
                        </div>
                    </DCInputField>

                    <DCInputField label="Дополнительно" fullWith>
                        <DCInputField
                            withComment
                            labelSize="subheader"
                            label="Безопасность"
                        >
                            <DCCheckboxGroup
                                group={[
                                    {
                                        name: 'domofon',
                                        label: 'Домофон',
                                        value: 'domofon',
                                    },
                                    {
                                        name: 'secret',
                                        label: 'Кодовая дверь',
                                        value: 'secret',
                                    },
                                    {
                                        name: 'vahta',
                                        label: 'Консьерж',
                                        value: 'vahta',
                                    },
                                    {
                                        name: 'closest_territory',
                                        label: 'Закрытая территория',
                                        value: 'territory',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            labelSize="subheader"
                            label="Парковка"
                        >
                            <DCCheckboxGroup
                                group={[
                                    {
                                        name: 'inArea',
                                        label: 'Во дворе',
                                        value: 'inArea',
                                    },
                                    {
                                        name: 'underground',
                                        label: 'Подземная',
                                        value: 'underground',
                                    },
                                    {
                                        name: 'withBranch',
                                        label: 'Со шлагбаумом',
                                        value: 'withBranch',
                                    },
                                    {
                                        name: 'garage',
                                        label: 'Есть гараж',
                                        value: 'garage',
                                    },
                                    {
                                        name: 'security',
                                        label: 'Охраняемая',
                                        value: 'security',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            labelSize="subheader"
                            label="Благоустройство двора"
                        >
                            <DCCheckboxGroup
                                group={[
                                    {
                                        name: 'childrenArea',
                                        label: 'Детская площадка',
                                        value: 'childrenArea',
                                    },
                                    {
                                        name: 'sportArea',
                                        label: 'Спортивная площадка',
                                        value: 'sportArea',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            labelSize="subheader"
                            label="Инфраструктура"
                        >
                            <DCCheckboxGroup
                                group={[
                                    {
                                        name: 'school',
                                        label: 'Школа',
                                        value: 'school',
                                    },
                                    {
                                        name: 'fitness',
                                        label: 'Фитнес',
                                        value: 'fitness',
                                    },
                                    {
                                        name: 'Park',
                                        label: 'Парк',
                                        value: 'Park',
                                    },
                                    {
                                        name: 'detSad',
                                        label: 'Детский сад',
                                        value: 'detSad',
                                    },
                                    {
                                        name: 'shop',
                                        label: 'Торговый центр',
                                        value: 'shop',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            label="Санузел"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: 'Совмещенный',
                                    },
                                    {
                                        label: 'Раздельный',
                                    },
                                    {
                                        label: 'Более одного',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            label="Балкон/лоджия"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: '1',
                                    },
                                    {
                                        label: '2',
                                    },
                                    {
                                        label: '3+',
                                    },
                                    {
                                        label: 'Нет',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            label="Ремонт"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: 'Косметический',
                                    },
                                    {
                                        label: 'Евро',
                                    },
                                    {
                                        label: 'Дизайнерский',
                                    },
                                    {
                                        label: 'Без ремонта',
                                    },
                                ]}
                            />
                            <DCCheckbox
                                bold
                                size="small"
                                name="pereplan"
                                label="Перепланировка"
                                value="pereplan"
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            labelSize="subheader"
                            label="Вид из окон"
                        >
                            <DCCheckboxGroup
                                group={[
                                    {
                                        name: 'dvor',
                                        label: 'Двор',
                                        value: 'dvor',
                                    },
                                    {
                                        name: 'windowPark',
                                        label: 'Парк',
                                        value: 'windowPark',
                                    },
                                    {
                                        name: 'water',
                                        label: 'Водоем',
                                        value: 'water',
                                    },
                                    {
                                        name: 'forest',
                                        label: 'Лес',
                                        value: 'forest',
                                    },
                                    {
                                        name: 'street',
                                        label: 'Улица',
                                        value: 'street',
                                    },
                                ]}
                            />
                        </DCInputField>
                    </DCInputField>

                    <DCInputField withComment label="Дом" fullWith>
                        <DCInputField label="Безопасность">
                            <DCInput size={3} />
                        </DCInputField>

                        <DCInputField
                            withComment
                            label="Тип дома"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: 'Кирпичный',
                                    },
                                    {
                                        label: 'Панельный',
                                    },
                                    {
                                        label: 'Монолитный',
                                    },
                                    {
                                        label: 'Деревянный',
                                    },
                                    {
                                        label: 'Блочный',
                                    },
                                ]}
                            />
                        </DCInputField>

                        <DCInputField
                            withComment
                            label="Лифт"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: '1',
                                    },
                                    {
                                        label: '2',
                                    },
                                    {
                                        label: '3+',
                                    },
                                ]}
                            />
                            <DCCheckbox
                                bold
                                size="small"
                                name="gruz"
                                label="Грузовой лифт"
                                value={true}
                            />
                        </DCInputField>

                        <div className="add-card_flex add-card_wrapReverse add-card-fieldsBlock">
                            <DCInputField
                                label="Номер квартиры"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>

                            <DCInputField
                                label="или"
                                labelSize="small"
                                labelColor="blue"
                            />

                            <DCInputField
                                label="Кадастровый номер"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>
                        </div>
                    </DCInputField>

                    <DCInputField
                        // size={12}
                        label="Фотографии"
                        withComment
                        fullWith
                    >
                        <DCAttachement />
                    </DCInputField>

                    <DCInputField
                        // size={12}
                        label="Видеопросмотр"
                        withComment
                        fullWith
                    >
                        <DCAttachement />
                    </DCInputField>

                    <DCInputField
                        // size={12}
                        label="Квартира"
                        withComment
                        fullWith
                    >
                        <DCInputField
                            label="Количество комнат"
                            labelSize="subheader"
                        >
                            <DCButtonGroup
                                buttons={[
                                    {
                                        label: '1',
                                    },
                                    {
                                        label: '2',
                                    },
                                    {
                                        label: '3',
                                    },
                                    {
                                        label: '4',
                                    },
                                    {
                                        label: '5+',
                                    },
                                    {
                                        label: 'Студия',
                                    },
                                ]}
                            />
                            <DCCheckbox
                                bold
                                size="small"
                                name="gruz"
                                label="Грузовой лифт"
                                value={true}
                            />
                        </DCInputField>

                        <div className="add-card_flex add-card-fieldsBlock">
                            <DCInputField label="Площадь" labelSize="subheader">
                                <DCInput />
                            </DCInputField>

                            <DCInputField
                                label="Площадь кухни"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>

                            <DCInputField
                                label="Жилая площадь"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>

                            <DCInputField label="Этаж" labelSize="subheader">
                                <DCInput />
                            </DCInputField>

                            <DCInputField
                                label="Этажей в доме"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>

                            <DCInputField
                                label="Высота потолков"
                                labelSize="subheader"
                            >
                                <DCInput />
                            </DCInputField>
                        </div>
                    </DCInputField>

                    <DCButton rounded active label="Сохранить" />

                    {/*<div className="_col-12">*/}
                    {/*    <div className="add-card__title">Лет в собственности</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="yo1" type="radio" name="years-owned" checked />*/}
                    {/*        <label className="button _s" for="yo1">Меньше 3-х</label>*/}
                    {/*        <input className="_hidden" id="yo2" type="radio" name="years-owned" />*/}
                    {/*        <label className="button _s" for="yo2">От 3-х до 5-ти</label>*/}
                    {/*        <input className="_hidden" id="yo3" type="radio" name="years-owned" />*/}
                    {/*        <label className="button _s" for="yo3">Больше 5-ти</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="_col-12 _col-md-6">*/}
                    {/*    <div className="add-card__title">Собственники</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="ow1" type="radio" name="owners" checked />*/}
                    {/*        <label className="button _s" for="ow1">1</label>*/}
                    {/*        <input className="_hidden" id="ow2" type="radio" name="owners" />*/}
                    {/*        <label className="button _s" for="ow2">2</label>*/}
                    {/*        <input className="_hidden" id="ow3" type="radio" name="owners" />*/}
                    {/*        <label className="button _s" for="ow3">3+</label>*/}
                    {/*    </div>*/}
                    {/*    <label>*/}
                    {/*        <input type="checkbox" />Есть несовершеннолетние*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    {/*<div className="_col-12 _col-md-6">*/}
                    {/*    <div className="add-card__title">Прописано</div>*/}
                    {/*    <div className="add-card__button-box _row">*/}
                    {/*        <input className="_hidden" id="pr1" type="radio" name="prescribed" checked />*/}
                    {/*        <label className="button _s" for="pr1">1</label>*/}
                    {/*        <input className="_hidden" id="pr2" type="radio" name="prescribed" />*/}
                    {/*        <label className="button _s" for="pr2">2</label>*/}
                    {/*        <input className="_hidden" id="pr3" type="radio" name="prescribed" />*/}
                    {/*        <label className="button _s" for="pr3">3+</label>*/}
                    {/*    </div>*/}
                    {/*    <label>*/}
                    {/*        <input type="checkbox" />Есть несовершеннолетние*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </from>
            </>
        )
    }
}
