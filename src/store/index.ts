import { configureStore } from '@reduxjs/toolkit';

import api from '../services/api';
import cartReducer from './reducers/cart';
import appReducer from './reducers/app';
import deliveryReducer from './reducers/delivery';
import paymentReducer from './reducers/payment';
import purchaseReducer from './reducers/purchase';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    purchase: purchaseReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
