import styles from '../styles/Gallery.module.css';
import Image from 'next/image';

import { Box, Grid, Container, Card, CardHeader, CardMedia, CardContent, IconButton, Typography, CardActions } from '@material-ui/core/';
import CancelIcon from '@material-ui/icons/Cancel';

export default function SingleNft(props) {
  return (
    <Grid container direction="row" justify="center" alignItems="center" className={styles.modal}>
      <Grid item xs={10} lg={3}>
        <Box>
          <Card>
            <CardHeader
              className={styles['card-header']}
              action={
                <IconButton fontSize="small" aria-label="close">
                  <CancelIcon style={{ color: 'rgba(244, 107, 93, 1)' }} />
                </IconButton>
              }
            >
              {props.data.name}
            </CardHeader>
            <Grid container direction="row" justify="center">
              <Grid item xs="10">
                <Image className={styles['card-image']} height={320} width={320} src={props.data.image_url} />
              </Grid>
            </Grid>
            <CardContent>
              <Typography>
                {props.data.description}
              </Typography>
            </CardContent>
          </Card>          
        </Box>
      </Grid>
    </Grid>
  )
}