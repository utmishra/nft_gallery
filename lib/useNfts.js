import axios from 'axios'
import useSWR from 'swr'

const openSeaConfig = process.env.openSea;
const assetEndpoint = `${openSeaConfig.rootUri}${openSeaConfig.assetPath}`;

const fetcher = function(url, authorId) {
  if(authorId != undefined) {    
    return axios.get(url.replace('OWNER_ID', authorId))
    .then((res) => {
      return res.data;
    })
  }
}
export default function useNfts(authorId) {
  const { data, error } = useSWR([assetEndpoint, authorId], fetcher) 
  console.log(`Author ID: ${authorId}`);
  console.log(`Data`, data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}