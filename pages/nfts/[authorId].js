import styles from '../../styles/Home.module.css';

import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
      <Container className={styles.container} maxWidth="xs">
        <Grid container>
          <Grid item xs={12}>
            <Owner className={styles['owner-name']} owner={data.assets[0].owner} />
          </Grid>
        </Grid>
        <NftGallery authorId={authorId} nfts={data.assets} />
      </Container>
    )
}