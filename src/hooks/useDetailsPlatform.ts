import usePlatforms from './usePlatforms'

const useDetailsPlatform = (id?: number) => {
  const { data } = usePlatforms()

  return data.results.find(platform => platform.id === id)
}

export default useDetailsPlatform