import Image from "next/image"

import Description from "./Description"
import Form from "./Form"

interface IFounding {
  image: string
}

const Founding = ({ image }: IFounding) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center">
        <Image src={image} width={200} height={200} layout="fixed" className="justify-self-center self-center" />
      </div>
      <Description
        deadline="tomorrow"
        lokingPeriod="x mounts"
        price={0.05}
        actualNfts={1}
        totalNfts={100}
      />
      <Form />
    </div>
  )
}

export default Founding