import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: () => ({}),
});
