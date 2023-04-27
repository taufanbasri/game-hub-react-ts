import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import Game from "../entities/Game"
import ms from "ms"

const apiClient = new APIClient<Game>('/games')

const useGames = () => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h')
})

export default useGames