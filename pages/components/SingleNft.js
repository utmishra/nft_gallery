import Image from 'next/image';

import Description from './Description';

export default function SingleNft(props) {
  return (
    <>
      <Image height={320} width={320} src={props.data.image_url} />
      <Description data={props.data.description} />
    </>
  )
}