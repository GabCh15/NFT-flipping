interface IDescription {
  deadline: string
  price: number
  actualNfts: number
  totalNfts: number
  lokingPeriod: string
}

const Description = ({ deadline, price, totalNfts, actualNfts, lokingPeriod }: IDescription) => {
  return (
    <div className="grid grid-cols-2 justify-items-center py-4 mb-3">
      <h1 className="col-span-2 text-center font-bold">Minimum Threshold</h1>
      <div className="w-[80%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 col-span-2">
        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[40%]"></div>
      </div>
      <p className="font-bold">Deadline: <span className="font-normal">{deadline}</span></p>
      <p className="font-bold">Price: <span className="font-normal">{price}</span></p>
      <p className="font-bold">NFTs: <span className="font-normal">{actualNfts}/{totalNfts}</span></p>
      <p className="font-bold">Locking Period: <span className="font-normal">{lokingPeriod}</span></p>
    </div>
  )
}

export default Description