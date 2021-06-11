import styles from '../styles/Home.module.css'

import Image from 'next/image';
import classNames from 'classnames';

export default function Home(props) {
  return (
    <div className={classNames(styles.container, styles.background)}>
      <main className={styles.main}>
        <Image src='/assets/images/logo.png' width="100" height="100" className={styles.logo} alt="Everbloom logo" />
        <h1 className={styles.title}>NFT Gallery</h1>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  return {
    redirect: {
      destination: '/nfts/0x334022D77BFc9e8Aa5B34907873457c545d9faF2',
      permanent: false
    }
  }
}