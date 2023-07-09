// global state, Reducer -- Step 2 : Create Provider(as parent container), and Reducer(as global function)
import React, { useReducer, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { Context } from "../scripts/context";
import reducer from "./reducer";

import Data from "@/scripts/data"

export const Provider = ({children}) => {

  const router = useRouter()

  const initialState = {
    workDetails: {
      info: {},
      isShowing: false,
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>  
        {children}
    </Context.Provider>
  );
};