import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import Game from "../entities/Game"
import APIClient, { FetchResponse } from "../services/api-client"
import useGameQueryStore from "../store"

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        page: pageParam,
        search: gameQuery.searchText
      }
    }),
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h')
  })
}

export default useGames