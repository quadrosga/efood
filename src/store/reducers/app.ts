import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  currentStep: 'cart' | 'delivery' | 'payment' | 'confirmation';
  orderId?: string;
};

const initialState: AppState = {
  currentStep: 'cart',
  orderId: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    goToCart: (state) => {
      state.currentStep = 'cart';
    },
    goToDelivery: (state) => {
      state.currentStep = 'delivery';
    },
    goToPayment: (state) => {
      state.currentStep = 'payment';
    },
    goToConfirmation: (state, action: PayloadAction<string>) => {
      state.currentStep = 'confirmation';
      state.orderId = action.payload;
    },
  },
});

export const { goToCart, goToDelivery, goToPayment, goToConfirmation } =
  appSlice.actions;
export default appSlice.reducer;
