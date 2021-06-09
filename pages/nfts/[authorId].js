import { useRouter } from 'next/router';

import useNfts from '../../lib/useNfts';
import NftGallery from '../components/NftGallery';
import Owner from '../components/Owner';

export default function Gallery() {
  const router = useRouter()
  const { authorId } = router.query
  const { data, isLoading, isError } = useNfts(authorId);

  if(authorId == undefined) {
    return (
      <>
        Invalid Author ID
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
        <Owner owner={data.assets[0].owner} />
        <NftGallery authorId={authorId} nfts={data.assets} />
      </>
    )
}