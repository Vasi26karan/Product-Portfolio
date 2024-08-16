import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductState {
  isLoading: boolean;
  data: {
    [key: string]: any; 
  };
  isError: boolean;
}

export const fetchProductDetails = createAsyncThunk(
  "product/fetchDetails",
  async (productId: string) => {
    const response = await fetch(`https://github.com/Vasi26karan/Product-Portfolio/blob/main/server/data.json`);
    const data = await response.json();
    return { productId, data };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
  } as ProductState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const productId = action.payload.productId;
        state.data[productId] = action.payload.data;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
