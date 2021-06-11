import { useRouter } from 'next/router';

import useSingleNft from '../../../lib/useSingleNft';
import SingleNft from '../../../components/SingleNft';

export default function Asset() {
  const router = useRouter()
  const { authorId, tokenId } = router.query
  const { data, isLoading, isError } = useSingleNft(authorId, tokenId);
  console.log('Single asset data', data);
  if(tokenId == undefined || authorId == undefined) {
    return (
      <>
        Invalid request data
      </>
    )
  }

  if(isLoading) {
    return (
      <div>Loading..</div>
    )
  }

  if(isError) {
    return (
      <div>Oops.. Something went wrong! Please try again!</div>
    )
  }

    return (
      <>
        <SingleNft data={data} />
      </>
    )
}