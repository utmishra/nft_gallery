import axios from 'axios'
import useSWR from 'swr'

const openSeaConfig = process.env.openSea;
const assetEndpoint = `${openSeaConfig.rootUri}${openSeaConfig.singleAssetPath}`;

const fetcher = function(url, authorId, tokenId) {
  console.log(url.replace('OWNER_ID', authorId).replace('TOKEN_ID', tokenId));
  if(authorId != undefined) {    
    return axios.get(url.replace('OWNER_ID', authorId).replace('TOKEN_ID', tokenId))
    .then((res) => {
      return res.data;
    })
  }
}
export default function useSingleNft(authorId, tokenId) {
  const { data, error } = useSWR([assetEndpoint, authorId, tokenId], fetcher)   
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}