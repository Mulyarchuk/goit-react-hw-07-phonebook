import { configureStore } from "@reduxjs/toolkit";
import { phonesReducer } from "./phoneSlice";
import { filtersReducer } from "./filterSlice";

  
  
  
  export const store = configureStore({
    reducer: {
      contactsData: phonesReducer,
      filter: filtersReducer,
    },
  });
  
 