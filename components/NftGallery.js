import styles from '../styles/Gallery.module.css';

import Image from 'next/image';
import { Grid, Box, Modal } from '@material-ui/core';
import { forwardRef, useState } from 'react';
import SingleNft from './SingleNft';

const loader = () => {
  return "/assets/images/loading.jpg"
}

export default function NftGallery(props) {
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [currentNft, setCurrentNft ]  = useState(null);

  const handleClick = (nft) => {
    setCurrentNft(nft);
    setModalOpen(true);
  }

  const handleClose = () => {
    setCurrentNft(null);
    setModalOpen(false);
  }

  const ModalBody = forwardRef((props, ref) => (
    <SingleNft ref={ref} {...props} />
  ))
  
  return ( 
    <>
      <Grid container direction="row" justify="space-between">
        {
          props.nfts.map((nft) => {
            return (
              <Grid key={nft.token_id} item xs={6} sm={6} lg={2}>
                <Box onClick={() => handleClick(nft)} className={styles['single-image']}>
                  {
                    nft.image_thumbnail_url != null
                    ?
                      (
                        <Image className={styles['nft-image']} width={182.7} height={182.7} src={nft.image_thumbnail_url}/>
                      )
                    :
                        <Image src="/assets/images/notfound.jpg" width={182.7} height={182.7} />
                  }
                </Box>              
              </Grid>     
            )
          })
        }
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <ModalBody data={currentNft} handleClose={handleClose} />
      </Modal>
    </>
  )
}