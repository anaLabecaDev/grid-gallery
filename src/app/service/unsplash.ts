// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Photo, PhotoDetail } from './types';

const UNSPLASH_API_URL = 'https://api.unsplash.com/';

// Define a service using a base URL and expected endpoints
export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  tagTypes: ['Photos'],
  baseQuery: fetchBaseQuery({
    baseUrl: UNSPLASH_API_URL,
    prepareHeaders: (headers) => {
      // TODO: Find a better way to store and use the access token
      const token = 'blsw_p6OMFVbcmv60_m2uAgMv5akzKCRGEDNjVOrGrI';
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Client-ID ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], { page?: number }>({
      query: ({ page = 1 }) => `photos?page=${page}&per_page=20`,
      providesTags: (photos, error, arg) => {
        return photos
          ? [...photos.map(({ id }) => ({ type: 'Photos', id } as const)), { type: 'Photos', id: 'LIST' }]
          : [{ type: 'Photos', id: 'LIST' }];
      },
    }),
    getPhotoDetail: builder.query<PhotoDetail, { photoId: string }>({
      query: ({ photoId }) => `photos/${photoId}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPhotosQuery, useGetPhotoDetailQuery } = unsplashApi;
