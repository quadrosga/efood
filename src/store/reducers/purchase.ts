import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PurchaseState {
  orderId: string | null;
}

const initialState: PurchaseState = {
  orderId: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload;
    },
    clearPurchase(state) {
      state.orderId = null;
    },
  },
});

export const { setOrderId, clearPurchase } = purchaseSlice.actions;
export default purchaseSlice.reducer;
