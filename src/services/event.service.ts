import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pagination } from "../models/pagination.model";
import { Event } from "../models/event.model";
import { EventCreation } from "../models/event-creation.model";
import { EventDetail } from "../models/event-detail.model";
import { RootState } from "../state/store";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/v1/",
    prepareHeaders: async (headers, { getState }) => {
      const getToken = (getState() as RootState).auth.getToken;
      const token = await getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listEvents: builder.query<
      Pagination<Event>,
      { limit: number; page: number }
    >({
      query: ({ limit = 10, page = 1 }) => `events?limit=${limit}&page=${page}`,
    }),
    createEvent: builder.mutation<Event, EventCreation>({
      query: (body) => ({
        url: `events`,
        method: "POST",
        body,
      }),
    }),
    getEventById: builder.query<EventDetail, string>({
      query: (id) => `events/${id}`,
    }),
    updateEventStatus: builder.mutation<Event, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `events/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
    deleteEvent: builder.mutation<void, string>({
      query: (id) => ({
        url: `events/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useListEventsQuery,
  useCreateEventMutation,
  useGetEventByIdQuery,
  useUpdateEventStatusMutation,
  useDeleteEventMutation,
} = eventApi;
