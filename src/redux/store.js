import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";
import { filtersReducer } from "./filterSlice";

  
  
  
  export const store = configureStore({
    reducer: {
      contactsData: phoneReducer,
      filter: filtersReducer,
    },
  });
  
 