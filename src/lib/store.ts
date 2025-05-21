import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./features/storeSlice";

const loadCart = () => {
  if (typeof window === "undefined") return undefined;

  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : undefined;
  } catch (err) {
    console.error("Failed to load cart from localStorage", err);
    return undefined;
  }
};

export const makeStore = () => {
  const cartState = {
    store : {
      cart : loadCart() || {},
      category : "All",
      price : 1000
    }
  }
  return configureStore({
    reducer: {
      store: StoreReducer,
    },
    preloadedState: cartState
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
