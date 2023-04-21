import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://644035a0792fe886a88a2c08.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "Contacts/fetchAll",
    async (_, thunkAPI) => {
        try{
            const response = await axios.get ("/Contacts")
return response.data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
          }
    }
);
export const addContacts = createAsyncThunk(
    "Contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/Contacts",contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
  }
  );
  export const deleteContacts = createAsyncThunk(
    "Contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        await axios.delete(`/Contacts/${contactId}`);
        return contactId;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
  }
  );