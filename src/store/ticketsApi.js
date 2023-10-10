import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ticketsApi = createApi({
  reducerPath: 'tickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (builder) => ({
    getSearchId: builder.query({
      query: () => '/search',
    }),
    getTickets: builder.query({
      queryFn: async (_arg, { getState }, _extraOptions, fetchWithBQ) => {
        try {
          const { data } = getState().tickets.queries['getTickets(undefined)']
          let searchId = data?.searchId

          if (!searchId) {
            const response = await fetchWithBQ('/search')
            if (response.error) return { error: response.error }
            searchId = response.data.searchId
          }

          const response1 = await fetchWithBQ(`./tickets?searchId=${searchId}&limit=5`)
          if (response1.error) return { error: response1.error }

          const previousTickets = data?.tickets
          const { stop, tickets: newTickets } = response1.data
          return {
            data: {
              searchId: stop ? null : searchId,
              stop,
              tickets: previousTickets ? [...previousTickets, ...newTickets] : newTickets,
            },
          }
        } catch (error) {
          return { error }
        }
      },
    }),
  }),
})

export const { useGetTicketsQuery } = ticketsApi

export default ticketsApi
