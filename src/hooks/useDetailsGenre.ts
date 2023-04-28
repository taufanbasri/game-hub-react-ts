import useGenres from './useGenres'

const useDetailsGenre = (id?: number) => {
  const { data } = useGenres()

  return data.results.find(genre => genre.id === id)
}

export default useDetailsGenre