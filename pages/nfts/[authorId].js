import styles from '../../styles/Gallery.module.css';

import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import useNfts from '../../lib/useNfts';
import NftGallery from '../components/NftGallery';

export default function Gallery() {
  const router = useRouter()
  const { authorId } = router.query
  const { nfts, isLoading, isError } = useNfts(authorId);

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
    <NftGallery data={nfts} />
  )
}