import styles from '../styles/Gallery.module.css'

import Image from 'next/image';
import classNames from 'classnames';

import useNfts from '../../lib/useNfts';
import NftGallery from '../components/NftGallery';

export default function Gallery(props) {
  const { nfts, isLoading, isError } = useNfts(props.id);
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

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}