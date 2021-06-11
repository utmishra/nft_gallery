import styles from '../styles/Home.module.css';
import { Grid } from '@material-ui/core';

export default function Empty(props) {
  return (
    <Grid container className={styles.container} justify="center" contentAlign="center">
      <Grid item style={{fontSize: '48px', color: 'white', fontWeight: 'bold'}}>
        {props.message}
      </Grid>
    </Grid>
  )
}