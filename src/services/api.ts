import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../pages/Home';

type Purchase = {
  id: string;
  items: {
    id: number;
    nome: string;
    preco: number;
  }[];
  total: number;
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
    createPurchase: builder.mutation<Purchase, Omit<Purchase, 'id'>>({
      query: (newPurchase) => {
        const id = crypto.randomUUID();

        return {
          url: 'compras',
          method: 'POST',
          body: {
            ...newPurchase,
            id,
          },
        };
      },
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useCreatePurchaseMutation,
} = api;

export default api;
