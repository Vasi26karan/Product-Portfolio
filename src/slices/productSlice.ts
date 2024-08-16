import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the state interface
interface ProductState {
  isLoading: boolean;
  data: {
    [key: string]: any;
  };
  isError: boolean;
}

// Async thunk to fetch product details
export const fetchProductDetails = createAsyncThunk(
  "product/fetchDetails",
  async (productId: string) => {
    // Fetch the JSON data from the raw GitHub URL
    const response = await fetch(
      `https://raw.githubusercontent.com/Vasi26karan/Product-Portfolio/main/server/data.json`
    );
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the response data
    const data = await response.json();
    
    // Find the product by its ID in the fetched data
    const product = data.find((item: any) => item.id === productId);
    
    // If the product is not found, throw an error
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    // Return the product details
    return { productId, data: product };
  }
);

// Create the product slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
  } as ProductState,
  reducers: {}, // No synchronous reducers needed
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

// Export the reducer to be used in the store
export default productSlice.reducer;
