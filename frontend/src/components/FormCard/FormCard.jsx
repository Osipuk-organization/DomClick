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
              buttons={[
                {
                  label: 'Продажа'
                },
                {
                  label: 'Аренда'
                }
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
                  label: 'Жилая'
                },
                {
                  label: 'Коммерческая'
                },
                {
                  label: 'Гараж'
                }
              ]}
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
          buttons={[
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
        />
      </DCInputField>

      <DCInputField
        label="Лет в собственности"
        labelSize="subheader"
        fullWith
      >
        <DCButtonGroup
          buttons={[
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
        />
      </DCInputField>

      <div className='add-card_flex add-card-fieldsBlock _col-12'>
        <DCInputField
          label="Собственники"
          labelSize="subheader"
        >
          <DCButtonGroup
            buttons={[
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
            buttons={[
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
              buttons={[
                {
                  label: 'Да'
                },
                {
                  label: 'Нет'
                }
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
                  label: 'Да'
                },
                {
                  label: 'Нет'
                }
              ]}
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
                name: "domofon",
                label: "Домофон",
                value: "domofon"
              },
              {
                name: "secret",
                label: "Кодовая дверь",
                value: "secret"
              },
              {
                name: "vahta",
                label: "Консьерж",
                value: "vahta"
              },
              {
                name: "closest_territory",
                label: "Закрытая территория",
                value: "territory"
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
                name: "inArea",
                label: "Во дворе",
                value: "inArea"
              },
              {
                name: "underground",
                label: "Подземная",
                value: "underground"
              },
              {
                name: "withBranch",
                label: "Со шлагбаумом",
                value: "withBranch"
              },
              {
                name: "garage",
                label: "Есть гараж",
                value: "garage"
              },
              {
                name: "security",
                label: "Охраняемая",
                value: "security"
              }
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
                name: "childrenArea",
                label: "Детская площадка",
                value: "childrenArea"
              },
              {
                name: "sportArea",
                label: "Спортивная площадка",
                value: "sportArea"
              }
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
                name: "school",
                label: "Школа",
                value: "school"
              },
              {
                name: "fitness",
                label: "Фитнес",
                value: "fitness"
              },
              {
                name: "Park",
                label: "Парк",
                value: "Park"
              },
              {
                name: "detSad",
                label: "Детский сад",
                value: "detSad"
              },
              {
                name: "shop",
                label: "Торговый центр",
                value: "shop"
              }
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
                label: 'Совмещенный'
              },
              {
                label: 'Раздельный'
              },
              {
                label: 'Более одного'
              }
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
                name: "dvor",
                label: "Двор",
                value: "dvor"
              },
              {
                name: "windowPark",
                label: "Парк",
                value: "windowPark"
              },
              {
                name: "water",
                label: "Водоем",
                value: "water"
              },
              {
                name: "forest",
                label: "Лес",
                value: "forest"
              },
              {
                name: "street",
                label: "Улица",
                value: "street"
              }
            ]}
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
            buttons={[
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
                label: '1'
              },
              {
                label: '2'
              },
              {
                label: '3+'
              }
            ]}
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
            buttons={[
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