import styles from '../styles/Gallery.module.css';
import { Avatar, Grid, Box } from '@material-ui/core';
import classNames from 'classnames';

const typeText = {
  creator: 'Created By',
  owner: 'Owned By'
}

export default function PostMeta(props) {
  return (
    <Grid container direction="row" justify="flex-start" spacing={1} className={styles.meta}>
      <Grid className={styles['post-meta-grid-item']} item xs={3}>
        <Box>
          <div className={styles['avatar-pre-text']}>{typeText[props.type]}</div>
        </Box>
      </Grid>
      <Grid className={styles['post-meta-grid-item']} item xs={2}>
        <Avatar src={props.profile} />
      </Grid>
      <Grid className={classNames(styles['post-meta-grid-item'], styles['post-meta-username'])} item xs={3} >
        {
          props.username != null ?
            (`@${props.username}`)
            :
            'N.A.'
        }
      </Grid>
    </Grid>
  )
}