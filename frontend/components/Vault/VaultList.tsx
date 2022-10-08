import LandCard from "./LandCard"

const VaultList = () => {
  return (
    <div className="grid grid-cols-3 overflow-y-auto">
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
      <LandCard landAsset="LAND (-166, 7)" listingPrice={1.7} priceEstimate={2.2} />
    </div>
  )
}

export default VaultList