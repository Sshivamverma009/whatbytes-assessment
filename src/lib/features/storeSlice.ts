import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ItemPayload {
  [id: string]: number;
}

const loadCart = (): ItemPayload => {
  try {
    let storedCart;
    if (typeof window !== "undefined") {
      storedCart = localStorage.getItem("cart");
    }
    return storedCart ? JSON.parse(storedCart) : {};
  } catch (error) {
    console.log("Failed to load cart from localStorage:", error);
    return {};
  }
};

export interface Store {
  cart: ItemPayload;
  category: string;
  price: number;
}

const initialState: Store = {
  cart: loadCart()!,
  category: "All",
  price: 1000,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id] == undefined) {
        state.cart[id] = 1;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id]) {
        delete state.cart[id];
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id] !== undefined) {
        state.cart[id] += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id]) {
        if (state.cart[id] > 1) {
          state.cart[id] -= 1;
        } else {
          delete state.cart[id];
        }
      }
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      console.log("set category is called");
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
      console.log("price is set");
    },
  },
});

export const {
  addItem,
  removeItem,
  increment,
  decrement,
  setCategory,
  setPrice,
} = storeSlice.actions;
export default storeSlice.reducer;
