import styles from '../../styles/Gallery.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export default function NftGallery(props) {  
  
  return (
    <Grid container direction="row" justify="space-evenly">
      {
        props.nfts.map((nft) => {
          return (
            <Grid key={nft.token_id} item xs={6}>
              <Box className={styles['single-image']}>
                <Link href={`/nfts/${nft.asset_contract.address}/${nft.token_id}`}>
                <a>
                  <Image width={182.7} height={182.7} src={nft.image_thumbnail_url}/>
                </a>
              </Link>
              </Box>
            </Grid>        
          )
        })
      }
    </Grid>
  )
}