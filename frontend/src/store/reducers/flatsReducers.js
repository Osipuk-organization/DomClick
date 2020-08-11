import { handleActions } from 'redux-actions';

import {
  getFlatsAction,
  createFlatsAction,
  updateFlatsAction,
  deleteFlatsAction,
  updateFormAction,
} from 'actions/flatsActions';

const initialState = {
  flats: [],
  form: {
    owner: "Кукуруз Сергей Сергеевич",
    documents: [],
    cadastralV: "5000000",
    cadastralC: "",
    addressV: "Город",
    addressC: "",
    address1: "Улица",
    address2: "Страна",
    address3: "Область",
    addressX: "55.751574",
    addressY: "37.573856",
    dealC: "",
    deal1: "Продажа",
    deal2: "Жилая",
    deal3: "Квартира",
    deal4: "Меньше 3-х",
    deal5V: "1",
    deal51: false,
    deal6V: "1",
    deal61: false,
    termsC: "",
    terms1V: "6000000",
    terms11: false,
    terms2: false,
    terms3: false,
    securityC: "",
    securityV: [],
    parkingC: "",
    parkingV: [],
    yardC: "",
    yardV: [],
    infrastructureC: "",
    infrastructureV: [],
    bathroomC: "",
    bathroomV: "Совмещенный",
    balconyC: "",
    balconyV: "1",
    repairC: "",
    repairV: "Косметический",
    repair1: false,
    windowsC: "",
    windowsV: [],
    houseC: "",
    houseV: "Кирпичный",
    house1: "Безопасный",
    elevatorV: "1",
    elevator1: false,
    apartment: "10",
    cadastral1: "10",
    fotoC: "",
    videoC: "",
    fotoV: [],
    videoV: [],
    flatC: "",
    flatV: "1",
    flatE: false,
    flat1: "10",
    flat2: "10",
    flat3: "10",
    flat4: "10",
    flat5: "10",
    flat6: "10",
  },
  error: null,
};

export default handleActions({

  [getFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * need add filter
       */
      res = {
        ...state,
        flats: state.flats.concat(action.payload.flats),
        error: null,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [createFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        flats: state.flats.concat(action.payload),
        error: null,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [updateFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * todo
       * add filter and concat action.payload
       */
      res = {
        ...state,
        flats: action.payload,
        error: null,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [deleteFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        flats: state.flats.filter(i => i.id != action.payload && i._id != action.payload),
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [updateFormAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value
        }
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

}, initialState);