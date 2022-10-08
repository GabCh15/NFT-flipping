interface IInfoHoverModal {
  description: {
    details: string
    strategy?: string
    fees?: {
      management: string
      success: string
    }
  }
}

const InfoHoverModal = ({ description }: IInfoHoverModal) => {
  return (
    <div className="absolute bg-black bg-opacity-95 p-5 rounded-md -right-32 top-16 z-10 max-w-xs bg-blur-sm">
      <p>{description.details}</p>
      {
        description.strategy
          ? (
            <>
              <h1 className="font-bold text-lg">Strategy</h1>
              <p>{description.strategy}</p>
            </>
          ) : ''
      }

      <div>{
        description.fees
          ? (
            <>
              <h1 className="font-bold text-lg">Fees</h1>
              <p>Management fee: {description.fees.management}%</p>
              <p>Success fee: {description.fees.success}</p>
            </>
          )
          : ''
      }</div>
    </div>
  )
}

export default InfoHoverModal