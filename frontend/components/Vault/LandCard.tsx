import Image from "next/image"

interface ILandCard {
  landAsset: string
  listingPrice: number
  priceEstimate: number
}

const LandCard = ({landAsset, listingPrice, priceEstimate}: ILandCard) => {
  return (
    <div className="">
      <Image
        src="https://lh3.googleusercontent.com/gkRYcgVYE-vQqMkcncPRg4xNRNCpHmrDUA9MQ82GwWSxYwrw7nY3FFuKPe8lLhR8kb85bcTX93o7rPhM-01Ra7hJJejv2sN0YMAjHQw"
        width={200}
        height={200}
      />
      <p>{landAsset}</p>
      <p>Listing Price: {listingPrice}ETH</p>
      <p>Price Estimate: {priceEstimate}ETH</p>
    </div>
  )
}

export default LandCard