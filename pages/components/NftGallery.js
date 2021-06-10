import Image from 'next/image';
import Link from 'next/link';

export default function NftGallery(props) {
  return (
    props.nfts.map((nft) => {
      return (
        <Link key={nft.token_id} href={`/nfts/${nft.asset_contract.address}/${nft.token_id}`}>
          <a>
            <div>Name: {nft.name}</div>
            <Image width={128} height={128} src={nft.image_thumbnail_url}/>
          </a>
        </Link>        
      )
    })
  )
}