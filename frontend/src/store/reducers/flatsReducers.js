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
    owner: "",
    documents: "",
    cadastralV: "",
    cadastralC: "",
    addressV: "",
    addressC: "",
    dealC: "",
    deal1: "Продажа",
    deal2: "",
    deal3: "",
    deal4: "",
    deal5V: "",
    deal51: false,
    deal6V: "",
    deal61: false,
    termsC: "",
    terms1V: "",
    terms11: false,
    terms2: "",
    terms3: "",
    securityC: "",
    securityV: [],
    parkingC: "",
    parkingV: [],
    yardC: "",
    yardV: [],
    infrastructureC: "",
    infrastructureV: [],
    bathroomC: "",
    bathroomV: "",
    balconyC: "",
    balconyV: "",
    repairC: "",
    repairV: "",
    repair1: false,
    windowsC: "",
    windowsV: [],
    houseC: "",
    houseV: "",
    elevatorV: "",
    elevator1: false,
    apartment: "",
    cadastral1: "",
    fotoC: "",
    videoC: "",
    fotoV: [],
    videoV: [],
    flatC: "",
    flatV: "",
    flat1: "",
    flat2: "",
    flat3: "",
    flat4: "",
    flat5: "",
    flat6: "",
  },
  error: null,
};

export default handleActions({

  [getFlatsAction]: (state, action) => {
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
      /**
       * todo
       * add filter
       */
      res = {
        flats: [],
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