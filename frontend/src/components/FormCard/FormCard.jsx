import React from 'react';
import './FormCard.scss';
import { DCInputField } from "components/DCInputField";
import { DCInput } from "components/DCInput";
import { DCAttachement } from "components/DCAttachement";
import { Ymaps } from "components/Ymaps";
import { DCButtonGroup } from "components/DCButtonGroup";
import { DCCheckbox } from "components/DCCheckbox";
import { DCCheckboxGroup } from "components/DCCheckboxGroup";
import { DCButton } from "components/DCButton";

export const FormCard = function(props) {
  const {
    inputs,
    sendForm,
  } = props;

  const mapData = {
    center: [55.751574, 37.573856],
    zoom: 12,
  }

  const coordinates = [
    [55.751574, 37.573856],
  ]

  return (
    <div className="_container _row _col-10">
      <h1 className="_col-12">Новый объект</h1>
      <DCInputField
        label="ФИО"
        fullWith
      >
        <DCInput size={6} {...inputs.owner} />
      </DCInputField>

      <DCInputField
        // size={12}
        label="Документы"
        fullWith
      >
        <DCAttachement />
      </DCInputField>

      <DCInputField
        label="Оценочная стоимость объекта"
        withComment
        fullWith
      >
        <DCInput size={6} {...inputs.cadastralV} />
      </DCInputField>

      <DCInputField
        label="Адрес"
        withComment
        fullWith
      >
        <DCInput size={6} {...inputs.addressV} />
      </DCInputField>

      <Ymaps mapData={mapData} coordinates={coordinates} />

      <DCInputField
        label="Сделка"
        withComment
        fullWith
      >
        <div className='add-card_flex add-card-fieldsBlock'>
          <DCInputField
            label="Тип сделки"
            labelSize="subheader"
          >
            <DCButtonGroup
              group={[
                {
                  label: 'Продажа'
                },
                {
                  label: 'Аренда'
                }
              ]}
              {...inputs.deal1}
            />
          </DCInputField>
          <DCInputField
            label="Вид недвижимости"
            labelSize="subheader"
          >
            <DCButtonGroup
              group={[
                {
                  label: 'Жилая'
                },
                {
                  label: 'Коммерческая'
                },
                {
                  label: 'Гараж'
                }
              ]}
              {...inputs.deal2}
            />
          </DCInputField>
        </div>
      </DCInputField>

      <DCInputField
        label="Тип недвижимсоти"
        labelSize="subheader"
        fullWith
      >
        <DCButtonGroup
          group={[
            {
              label: 'Квартира'
            },
            {
              label: 'Комната'
            },
            {
              label: 'Дом'
            },
            {
              label: 'Таунхаус'
            },
            {
              label: 'Часть дома'
            },
            {
              label: 'Участок'
            }
          ]}
          {...inputs.deal3}
        />
      </DCInputField>

      <DCInputField
        label="Лет в собственности"
        labelSize="subheader"
        fullWith
      >
        <DCButtonGroup
          group={[
            {
              label: 'Меньше 3-х'
            },
            {
              label: 'От 3-х до 5-ти'
            },
            {
              label: 'Больше 5-ти'
            }
          ]}
          {...inputs.deal4}
        />
      </DCInputField>

      <div className='add-card_flex add-card-fieldsBlock _col-12'>
        <DCInputField
          label="Собственники"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3+'
              }
            ]}
            {...inputs.deal5V}
          />
          <DCCheckbox
            label="Есть несовершеннолетние"
            size="small"
            bold
            {...inputs.deal51}
          />
        </DCInputField>
        <DCInputField
          label="Прописано"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3+'
              }
            ]}
            {...inputs.deal6V}
          />
          <DCCheckbox
            label="Есть несовершеннолетние"
            size="small"
            bold
            {...inputs.deal61}
          />
        </DCInputField>
      </div>

      <DCInputField
        label="Условия продажи"
        withComment
        fullWith
      >
        <div className='add-card_flex add-card-fieldsBlock'>
          <DCInputField
            label="Цена"
            labelSize="subheader"
          >
            <DCInput {...inputs.terms1V} />
            <DCCheckbox
              label="Торг уместен"
              size="small"
              bold
              {...inputs.terms11}
            />
          </DCInputField>

          <DCInputField
            label="Газ"
            labelSize="subheader"
          >
            <DCButtonGroup
              group={[
                {
                  label: 'Да'
                },
                {
                  label: 'Нет'
                }
              ]}
              {...inputs.terms2}
            />
          </DCInputField>

          <DCInputField
            label="Мусоропровод"
            labelSize="subheader"
          >
            <DCButtonGroup
              group={[
                {
                  label: 'Да'
                },
                {
                  label: 'Нет'
                }
              ]}
              {...inputs.terms3}
            />
          </DCInputField>
        </div>
      </DCInputField>

      <DCInputField
        label="Дополнительно"
        fullWith
      >
        <DCInputField
          withComment
          labelSize="subheader"
          label="Безопасность"
        >
          <DCCheckboxGroup
            group={[
              {
                label: "Домофон",
              },
              {
                label: "Кодовая дверь",
              },
              {
                label: "Консьерж",
              },
              {
                label: "Закрытая территория",
              },
            ]}
            {...inputs.securityV}
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
                label: "Во дворе",
              },
              {
                label: "Подземная",
              },
              {
                label: "Со шлагбаумом",
              },
              {
                label: "Есть гараж",
              },
              {
                label: "Охраняемая",
              }
            ]}
            {...inputs.parkingV}
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
                label: "Детская площадка",
              },
              {
                label: "Спортивная площадка",
              }
            ]}
            {...inputs.yardV}
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
                label: "Школа",
              },
              {
                label: "Фитнес",
              },
              {
                label: "Парк",
              },
              {
                label: "Детский сад",
              },
              {
                label: "Торговый центр",
              }
            ]}
            {...inputs.infrastructureV}
          />
        </DCInputField>

        <DCInputField
          withComment
          label="Санузел"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: 'Совмещенный'
              },
              {
                label: 'Раздельный'
              },
              {
                label: 'Более одного'
              }
            ]}
            {...inputs.bathroomV}
          />
        </DCInputField>

        <DCInputField
          withComment
          label="Балкон/лоджия"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3+'
              },
              {
                label: 'Нет'
              }
            ]}
            {...inputs.balconyV}
          />
        </DCInputField>

        <DCInputField
          withComment
          label="Ремонт"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: 'Косметический'
              },
              {
                label: 'Евро'
              },
              {
                label: 'Дизайнерский'
              },
              {
                label: 'Без ремонта'
              }
            ]}
            {...inputs.repairV}
          />
          <DCCheckbox
            bold
            size="small"
            label="Перепланировка"
            {...inputs.repair1}
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
                label: "Двор",
              },
              {
                label: "Парк",
              },
              {
                label: "Водоем",
              },
              {
                label: "Лес",
              },
              {
                label: "Улица",
              }
            ]}
            {...inputs.windowsV}
          />
        </DCInputField>
      </DCInputField>

      <DCInputField
        withComment
        label="Дом"
        fullWith
      >

        <DCInputField
          withComment
          label="Тип дома"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: 'Кирпичный'
              },
              {
                label: 'Панельный'
              },
              {
                label: 'Монолитный'
              },
              {
                label: 'Деревянный'
              },
              {
                label: 'Блочный'
              }
            ]}
            {...inputs.houseV}
          />
        </DCInputField>

        <DCInputField
          withComment
          label="Лифт"
          labelSize="subheader"
        >
          <DCButtonGroup
            group={[
              {
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3+'
              }
            ]}
            {...inputs.elevatorV}
          />
          <DCCheckbox
            bold
            size="small"
            label="Грузовой лифт"
            {...inputs.elevator1}
          />
        </DCInputField>

        <div className='add-card_flex add-card_wrapReverse add-card-fieldsBlock'>
          <DCInputField
            label="Номер квартиры"
            labelSize="subheader"
          >
            <DCInput {...inputs.apartment} />
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
            <DCInput {...inputs.cadastral1} />
          </DCInputField>
        </div>

      </DCInputField>

      <DCInputField
        // size={12}
        label="Фотографии"
        withComment
        fullWith
      >
        <DCAttachement/>
      </DCInputField>

      <DCInputField
        // size={12}
        label="Видеопросмотр"
        withComment
        fullWith
      >
        <DCAttachement/>
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
            group={[
              {
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3'
              },
              {
                label: '4'
              },
              {
                label: '5+'
              },
              {
                label: 'Студия'
              }
            ]}
            {...inputs.flatV}
          />
        </DCInputField>

        <div className='add-card_flex add-card-fieldsBlock'>
          <DCInputField
            label="Площадь"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat1} />
          </DCInputField>

          <DCInputField
            label="Площадь кухни"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat2} />
          </DCInputField>

          <DCInputField
            label="Жилая площадь"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat3} />
          </DCInputField>

          <DCInputField
            label="Этаж"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat4} />
          </DCInputField>

          <DCInputField
            label="Этажей в доме"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat5} />
          </DCInputField>

          <DCInputField
            label="Высота потолков"
            labelSize="subheader"
          >
            <DCInput {...inputs.flat6} />
          </DCInputField>
        </div>

      </DCInputField>

      <DCButton
        rounded
        active
        label="Сохранить"
        onClick={sendForm}
      />
    </div>
  );
}