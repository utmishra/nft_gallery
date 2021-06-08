import axios from 'axios'
import useSWR from 'swr'

const openSeaConfig = process.env.openSea;
const assetEndpoint = `${openSeaConfig.rootUri}${openSeaConfig.assetPath}`;

const fetcher = url => axios.get(url).then(res => res.data)
export function useNfts() {
  const { data, error } = useSWR(assetEndpoint, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useNfts;