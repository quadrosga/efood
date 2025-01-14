import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../pages/Home';

type Product = {
  id: number;
  price: number;
};

type Delivery = {
  receiver: string;
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: string;
    complement: string;
  };
};

type Payment = {
  card: {
    name: string;
    number: string;
    code: number;
    expires: {
      month: number;
      year: number;
    };
  };
};

type PurchasePayload = {
  products: Product[];
  delivery: Delivery;
  payment: Payment;
};

type PurchaseResponse = {
  orderId: string;
  status: string;
  message?: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
      transformResponse: (response: unknown): PurchaseResponse => {
        if (response && typeof response === 'object' && 'orderId' in response) {
          return response as PurchaseResponse;
        } else {
          throw new Error('Resposta inesperada da API');
        }
      },
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation,
} = api;

export default api;
