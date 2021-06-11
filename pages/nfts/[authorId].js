import styles from '../../styles/Home.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Box } from '@material-ui/core';

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

  const mediaData = [
    {
      icon: 'instagram.png',
      url: 'https://www.instagram.com/elliepritts/'
    },
    {
      icon: 'tiktok.svg',
      url: 'https://www.tiktok.com/@elliepritts'
    },
    {
      icon: 'twitter.png',
      url: 'https://twitter.com/elliepritts'
    },
    {
      icon: 'snapchat.svg',
      url: 'https://www.snapchat.com/add/elliepritts'
    },
    {
      icon: 'vimeo.png',
      url: 'https://vimeo.com/elliepritts'
    },
    {
      icon: 'youtube.svg',
      url: 'https://www.youtube.com/channel/UC5AGFmvVder22_TRLrQorCg'
    },
    {
      icon: 'linkedin.svg',
      url: 'https://www.linkedin.com/in/elliepritts/'
    }
  ]


  return (
    <Container className={styles.container} maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Owner className={styles['owner-name']} owner={data.assets[0].owner} />
        </Grid>
      </Grid>
      <Box className={styles.icons}>
        <Grid classes={{ label: 'icon-box' }} container direction="row" justify="center">          
          {
            mediaData.map((media) => {
              console.log(media.url)
              return (
                <Grid key={media.icon} className={styles['single-icon']} item>
                  <Link href={media.url}>
                    <a target="_blank">
                      <Image src={`/assets/images/${media.icon}`} height={34.65} width={34.65} />
                    </a>
                  </Link>
                </Grid>
              )                
            })
          }
        </Grid>
      </Box>      
      <NftGallery authorId={authorId} nfts={data.assets} contactAddress={data.assets[0].asset_contract.address} />
    </Container>
  )
}