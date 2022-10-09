import Image from "next/image"

interface ILandCard {
  landAsset: string
  listingPrice: number
  priceEstimate: number
}

const LandCard = ({ landAsset, listingPrice, priceEstimate }: ILandCard) => {
  return (
    <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center">
      <div className="mb-8">
        <Image
          className="relative w-40 rounded-full"
          src="https://lh3.googleusercontent.com/gkRYcgVYE-vQqMkcncPRg4xNRNCpHmrDUA9MQ82GwWSxYwrw7nY3FFuKPe8lLhR8kb85bcTX93o7rPhM-01Ra7hJJejv2sN0YMAjHQw"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center whitespace-nowrap">
        <p className="text-xl text-white font-bold mb-2">{landAsset}</p>
        <p className="text-base text-gray-400 font-normal">Listing Price: {listingPrice} ETH</p>
        <p className="text-base text-gray-400 font-normal">Price Estimated: {priceEstimate} ETH</p>
      </div>
    </div>
  )
}

export default LandCard