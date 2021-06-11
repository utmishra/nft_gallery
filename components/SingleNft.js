import styles from '../styles/Gallery.module.css';
import Image from 'next/image';

import { Box, Grid, Container, Card, CardHeader, CardContent, IconButton, Typography, CardActions, Button, CardMedia } from '@material-ui/core/';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';

import PostMeta from './PostMeta';
import Description from './Description';

export default function SingleNft(props) {
  const [ descriptionExpanded, setDescriptionExpanded ] = useState(false);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={styles.modal}>
      <Grid item xs={12} className={styles['card-item']} >
        <Box>
          <Card className={styles['card-root']}>
            <CardHeader
              title={props.data.name}
              className={styles['card-header']}
              action={
                <IconButton fontSize="small" aria-label="close" onClick={props.handleClose}>
                  <CancelIcon style={{ color: 'rgba(244, 107, 93, 1)' }} />
                </IconButton>
              }
            />
            <Container fluid className={styles['card-image-container']}>
              {
                props.data.animation_url != null
                  ?
                    (
                      <CardMedia
                        component="video"
                        image={props.data.animation_url}
                        title='title'
                        controls
                        autoPlay
                      />
                    )
                  :
                    (
                      <Image className={styles['card-image']} layout="fixed" height={385} width={385} src={props.data.image_url} />
                    )
              }                              
            </Container>
            <CardContent>
              <Typography>
                <Box className={styles['card-description']}>
                  <Description className={ descriptionExpanded ? styles['card-description-expanded'] : styles['card-description-collapsed'] } content={props.data.description} expanded={descriptionExpanded} handleExpand={() => setDescriptionExpanded(true)} handleCollapse={() => setDescriptionExpanded(false)} />
                </Box>                
              </Typography>
              <PostMeta type="creator" profile={props.data.creator.profile_img_url} username={props.data.creator.user.username} />
              <PostMeta type="owner" profile={props.data.owner.profile_img_url} username={props.data.owner.user.username} />
            </CardContent>
            <CardActions>
              <Button className={styles['card-button']}>
                Bid on Foundation
              </Button>
            </CardActions>
          </Card>          
        </Box>
      </Grid>
    </Grid>
  )
}