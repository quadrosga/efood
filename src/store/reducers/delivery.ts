import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'delivery',
  initialState: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: '',
    },
  },
  reducers: {
    updateDelivery(state, action) {
      state.receiver = action.payload.receiver;
      state.address = action.payload.address;
    },
  },
});

export const { updateDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;
