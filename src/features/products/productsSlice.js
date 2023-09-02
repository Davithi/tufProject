import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productsSlices = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtred: [],
    related: [],
    isLoading: false,
  },

  reducers: {
    //reducers partadir petqa grvi teche chi ashxatum  productsSlices.aciotn grenq miayn tenum enq ayn ameny inch ka reducers key i mech
    filterByPrice: (state, { payload }) => {
      state.filtred = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts : (state, { payload }) => {
      const list = state.list.filter(({ category:{id} }) => id === payload);
      state.related = shuffle(list)
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByPrice ,getRelatedProducts } = productsSlices.actions;

export default productsSlices.reducer;
