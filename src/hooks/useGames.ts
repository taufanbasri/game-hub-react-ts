import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import Game from "../entities/Game"
import APIClient, { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Game>('/games')

const useGames = () => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games'],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: {
      page: pageParam
    }
  }),
  getNextPageParam: (_lastPage, allPages) => {
    return allPages.length ? allPages.length + 1 : undefined
  },
  staleTime: ms('24h')
})

export default useGames