import React, { createContext } from "react";

const initialState = {
  isAuth: false,
};

export const context = createContext(initialState);