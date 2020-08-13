export const formTemplate = (form) => {
  const {
    owner,
    documents,
    cadastralV,
    cadastralC,
    addressV,
    addressC,
    address1,
    address2,
    address3,
    addressX,
    addressY,
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
    house1,
    elevatorV,
    elevator1,
    apartment,
    cadastral1,
    fotoC,
    fotoV,
    videoC,
    videoV,
    flatC,
    flat1E,
    flatV,
    flat1,
    flat2,
    flat3,
    flat4,
    flat5,
    flat6,
  } = form;

  return {
    "json": {
      // ФИО
      "owner": owner, // str
      // оценочная стоимость
      "cadastral_value": {
        "value": +cadastralV, // nbr
        "comment": cadastralC // str
      },
      // адрес
      "address": {
        "comment": addressC, // str
        "city": addressV, // str
        "streetName": address1, // str
        "county": address2, // str
        "state": address3, // str
        "latitude": addressX, // str
        "longitude": addressY // str
      },
      // сделка
      "deal": {
        "comment": dealC, // str
        // тип сделки
        "type_deal": deal1, // str
        // вид недвижимости
        "property_type": deal2, // str
        // тип недвижимости
        "type_of_property": deal3, // str
        // лет в собственности
        "years_in_ownership": deal4, // str
        // собственник
        "number_of_owners": {
          "value": deal5V, // str
          "minor_child": deal51 // bool
        },
        // прописано
        "registered": {
          "value": deal6V, // str
          "minor_child": deal61 // bool
        }
      },
      // условия продажи
      "terms_of_sale": {
        "comment": termsC, // str
        "cost": {
          // цена
          "value": +terms1V, // nbr
          // торг
          "trade": terms11 // bool
        },
        // газ
        "gas": terms2, // bool
        // мусоропровод
        "refuse_chute": terms3 // bool
      },
      // дополтительно
      "additionally": {
        // безопасность
        "security": {
          "comment": securityC, // str
          "value": securityV // [str]
        },
        // парковка
        "parking": {
          "comment": parkingC, // str
          "value": parkingV // [str]
        },
        // двор
        "the_landscaping_of_the_yard": {
          "comment": yardC, // str
          "value": yardV // [str]
        },
        // инфраструктура
        "infrastructure": {
          "comment": infrastructureC, // str
          "value": infrastructureV // [str]
        },
        // санузел
        "bathroom": {
          "comment": bathroomC, // str
          "value": bathroomV // str
        },
        // балкон
        "balcony": {
          "comment": balconyC, // str
          "value": balconyV // str
        },
        // ремонт
        "repair": {
          "comment": repairC, // str
          "value": repairV, // str
          "redevelopment": repair1 // bool
        },
        // вид из окон
        "view_from_windows": {
          "comment": windowsC, // str
          "value": windowsV // [str]
        }
      },
      // дом
      "house": {
        "comment": houseC, // str
        // тип дома
        "type": houseV, // str
        // безопасность
        "security": house1, // str
        // лифт
        "elevator": {
          "value": elevatorV, // str
          "freight_elevator": elevator1 // bool
        },
        // номер квартиры
        "apartment_number": +apartment, // nbr
        // кадастровый номер
        "cadastral_number": +cadastral1, // nbr
        // фотографии
        "foto": {
          "comment": fotoC, // str
        },
        // видео
        "video": {
          "comment": videoC, // str
        }
      },
      // квартира
      "flat": {
        "comment": flatC, // str
        // комнат
        "rooms": flatV, // str
        // груз. лифт
        "freight_elevator": flat1E,
        // площадь
        "square": +flat1, // nbr
        // кухня
        "square_kitchen": +flat2, // nbr
        // жилая
        "square_residential": +flat3, // nbr
        // этаж
        "floor": +flat4, // nbr
        // этажей
        "floors_in_the_house": +flat5, // nbr
        // потолки
        "ceiling_height": +flat6 // nbr
      }
    },
    "files": {
      "documentsBinary": documents, // [obj]
      "fotoBinary": fotoV, // [obj]
      "videoBinary": videoV // [obj]
    }
  }
};