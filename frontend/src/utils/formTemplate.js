export const formTemplate = (form) => {
  const {
    owner,
    documents,
    cadastralV,
    cadastralC,
    addressV,
    addressC,
    dealC,
    deal1,
    deal2,
    deal3,
    deal4,
    deal5V,
    deal51,
    deal6V,
    deal61,
    termsC,
    terms1V,
    terms11,
    terms2,
    terms3,
    securityC,
    securityV,
    parkingC,
    parkingV,
    yardC,
    yardV,
    infrastructureC,
    infrastructureV,
    bathroomC,
    bathroomV,
    balconyC,
    balconyV,
    repairC,
    repairV,
    repair1,
    windowsC,
    windowsV,
    houseC,
    houseV,
    elevatorV,
    elevator1,
    apartment,
    cadastral1,
    fotoC,
    fotoV,
    videoC,
    videoV,
    flatC,
    flatV,
    flat1,
    flat2,
    flat3,
    flat4,
    flat5,
    flat6,
  } = form;


  return {
    // ФИО
    "owner": owner,
    // документы
    "documents": documents,
    // оценочная стоимость
    "cadastral_value": {
      "value": cadastralV,
      "comment": cadastralC
    },
    // адрес
    "address": {
      "value": addressV,
      "comment": addressC
    },
    // сделка
    "deal": {
      "comment": dealC,
      // тип сделки
      "type_deal": deal1,
      // вид недвижимости
      "property_type": deal2,
      // тип недвижимости
      "type_of_property": deal3,
      // лет в собственности
      "years_in_ownership": deal4,
      // собственник
      "number_of_owners": {
        "value": deal5V,
        "minor_child": deal51
      },
      // прописано
      "registered": {
        "value": deal6V,
        "minor_child": deal61
      }
    },
    // условия продажи
    "terms_of_sale": {
      "comment": termsC,
      "cost": {
        // цена
        "value": terms1V,
        // торг
        "trade": terms11
      },
      // газ
      "gas": terms2,
      // мусоропровод
      "refuse_chute": terms3
    },
    // дополтительно
    "additionally": {
      // безопасность
      "security": {
        "comment": securityC,
        "value": securityV // []
      },
      // парковка
      "parking": {
        "comment": parkingC,
        "value": parkingV
      },
      // двор
      "the_landscaping_of_the_yard": {
        "comment": yardC,
        "value": yardV
      },
      // инфраструктура
      "infrastructure": {
        "comment": infrastructureC,
        "value": infrastructureV // []
      },
      // санузел
      "bathroom": {
        "comment": bathroomC,
        "value": bathroomV
      },
      // балкон
      "balcony": {
        "comment": balconyC,
        "value": balconyV
      },
      // ремонт
      "repair": {
        "comment": repairC,
        "value": repairV,
        "redevelopment": repair1
      },
      // вид из окон
      "view_from_windows": {
        "comment": windowsC,
        "value": windowsV // []
      }
    },
    // дом
    "house": {
      "comment": houseC,
      // тип дома
      "type": houseV,
      // лифт
      "elevator": {
        "value": elevatorV,
        "freight_elevator": elevator1
      },
      // номер квартиры
      "apartment_number": apartment,
      // кадастровый номер
      "cadastral_number": cadastral1,
      // фотографии
      "foto": {
        "comment": fotoC,
        "value": fotoV // []
      },
      // видео
      "video": {
        "comment": videoC,
        "value": videoV // []
      }
    },
    // квартира
    "flat": {
      "comment": flatC,
      // комнат
      "rooms": flatV,
      // площадь
      "square": flat1,
      // кухня
      "square_kitchen": flat2,
      // жилая
      "square_residential": flat3,
      // этаж
      "floor": flat4,
      // этажей
      "floors_in_the_house": flat5,
      // потолки
      "ceiling_height": flat6
    }
  };
};