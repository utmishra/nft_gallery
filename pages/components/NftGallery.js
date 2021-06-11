import styles from '../../styles/Gallery.module.css';

import Image from 'next/image';
import { makeStyles, Grid, Box, Modal } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import SingleNft from './SingleNft';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  backdrop: {
    position: 'relative',
    background: 'none',
    filter: 'blur'
  },
});

export default function NftGallery(props) {
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ tokenId, setTokenId ] = useState(null);
  const contactAddress = useRef(props.contactAddress);
  const nft = useRef(null);

  useEffect(() => {
    if(tokenId != null) {
      nft.current = 
      setModalOpen(true);
    }
  }, [tokenId])

  const handleClose = () => {
    setModalOpen(false);
    setTokenId(null);
  }

  // const modalBody = (props) => (
  //   <SingleNft data={props.nft} contactAddress={contactAddress.current} tokenId={tokenId} />
  // )

  const classes = useStyles();
  
  return (    
    <Grid container direction="row" justify="space-between">
      {
        props.nfts.map((nft) => {
          return (
            <Grid key={nft.token_id} item xs={12} sm={6} lg={2}>
              <Box onClick={() => setTokenId(nft.token_id)} className={styles['single-image']}>
                <Image width={182.7} height={182.7} src={nft.image_thumbnail_url}/>
              </Box>
              <Modal
                open={isModalOpen}
                onClose={handleClose}
                disablePortal
              >
                <SingleNft data={nft} />
              </Modal>
            </Grid>     
          )
        })
      }
    </Grid>
  )
}