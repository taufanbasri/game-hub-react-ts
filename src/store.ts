import { create } from "zustand"

interface GameQuery {
  searchText?: string
  genreId?: number
  platformId?: number
}

interface GameQueryStore {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setPlatformId: (platformId: number) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({
    gameQuery: { searchText }
  })),
  setGenreId: (genreId) => set(store => ({
    gameQuery: { ...store.gameQuery, genreId }
  })),
  setPlatformId: (platformId) => set(store => ({
    gameQuery: { ...store.gameQuery, platformId }
  })),
}))

export default useGameQueryStore