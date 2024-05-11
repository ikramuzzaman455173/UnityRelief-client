import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["relief-good"],
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  baseQuery: fetchBaseQuery({ baseUrl: "https://unity-relief-server.vercel.app/api" }),
  endpoints: (builder) => ({
    getReliefGoods: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/relief-goods`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["relief-good"],
    }),

    addReliefGood: builder.mutation({
      query: (data) => ({
        url: "/relief-good",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["relief-good"],
    }),

    updateReliefGood: builder.mutation({
      query: (options) => ({
        url: `/relief-good/${options.id}`,
        method: "PUT",
        body: options.reliefGood, // corrected
      }),
      invalidatesTags: ["relief-good"],
    }),

    deleteReliefGood: builder.mutation({
      query: ({ id }) => ({
        url: `/relief-good/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["relief-good"],
    }),
    getReliefGoodById: builder.query({
      query: (id) => `/relief-goods/${id}`,
      providesTags: ["relief-good"],
    }),
  }),
});

export const {
  useGetReliefGoodsQuery,
  useAddReliefGoodMutation,
  useUpdateReliefGoodMutation,
  useDeleteReliefGoodMutation,
  useGetReliefGoodByIdQuery,
} = baseApi;
