import Image from 'next/image';
import Link from 'next/link';

export default function NftGallery(props) {
  return (
    props.nfts.map((nft) => {
      console.log(props.authorId);
      console.log(nft.token_id);
      console.log(`/nfts/${props.authorId}/${nft.token_id}`);
      return (
        <Link key={nft.token_id} href={`/nfts/${props.authorId}/${nft.token_id}`}>
          <a>
            <div>Name: {nft.name}</div>
            <Image width={128} height={128} src={nft.image_thumbnail_url}/>
          </a>
        </Link>        
      )
    })
  )
}