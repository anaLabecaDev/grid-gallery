// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Photo } from './types';

const UNSPLASH_API_URL = 'https://api.unsplash.com/';

// Define a service using a base URL and expected endpoints
export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: UNSPLASH_API_URL,
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_UNSPLASH_API_KEY;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Client-ID ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo, number>({
      query: (page) => `photos/?page=${page}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPhotosQuery } = unsplashApi;
