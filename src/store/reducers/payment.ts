import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    card: {
      name: '',
      number: '',
      code: '',
      expires: {
        month: 0,
        year: 0,
      },
    },
    orderId: null,
  },
  reducers: {
    updatePayment(state, action) {
      state.card = action.payload.card;
    },
    setOrderId(state, action) {
      state.orderId = action.payload;
    },
  },
});

export const { updatePayment, setOrderId } = paymentSlice.actions;
export default paymentSlice.reducer;
