import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  name: string;
  number: string;
  code: string;
  expires: {
    month: number;
    year: number;
  };
}

interface PaymentState {
  card: Card;
  orderId: string | null;
}

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
  } as PaymentState,
  reducers: {
    updatePayment(state, action: PayloadAction<{ card: Card }>) {
      state.card = action.payload.card;
    },
    setOrderId(state, action: PayloadAction<string | null>) {
      state.orderId = action.payload;
    },
  },
});

export const { updatePayment, setOrderId } = paymentSlice.actions;
export default paymentSlice.reducer;
