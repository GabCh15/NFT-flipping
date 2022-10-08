interface IDescription {
  deadline: string
  price: number
  actualNfts: number
  totalNfts: number
  lokingPeriod: string
}

const Description = ({deadline, price, totalNfts, actualNfts, lokingPeriod} : IDescription) => {
  return (
    <>
      <h1>Minimum Threshold</h1>
      <p>Deadline: {deadline}</p>
      <p>Price: {price}</p>
      <p>NFTs: {actualNfts}/{totalNfts}</p>
      <p>Locking Period: {lokingPeriod}</p>
    </>
  )
}

export default Description