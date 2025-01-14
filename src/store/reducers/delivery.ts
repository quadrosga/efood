import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Address = {
  description: string;
  city: string;
  zipCode: string;
  number: number;
  complement: string;
};

type DeliveryState = {
  receiver: string;
  address: Address;
};

const initialState: DeliveryState = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: '',
  },
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    updateDelivery(
      state,
      action: PayloadAction<{ receiver: string; address: Address }>
    ) {
      state.receiver = action.payload.receiver;
      state.address = action.payload.address;
    },
  },
});

export const { updateDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;
