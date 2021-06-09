import axios from 'axios'
import useSWR from 'swr'

const openSeaConfig = process.env.openSea;
const assetEndpoint = `${openSeaConfig.rootUri}${openSeaConfig.assetPath}`;

const fetcher = (url) => {
  console.log(`Calling: ${url}`);
  return axios.get(url)
  .then((res) => {
    console.log(res.data);    
  })
  .catch((error) => {
    console.error(error);
  })
}
export function useNfts(authorId) {
  const { data, error } = useSWR(`${assetEndpoint.replace('OWNER_ID', authorId)}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useNfts;