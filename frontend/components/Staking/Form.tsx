import Image from "next/image"
import { useState } from "react";
import Button from "../Button"

const Form = () => {
  const max = 1000
  const [value, setValue] = useState(1);

  const handleChange = (event: any) => {
    const value = Math.min(max, Number(event.target.value));
    setValue(value);
  };

  return (
    <form className="w-full grid grid-cols-2 md:grid-cols-8 gap-y-3">
      <div className="md:flex md:items-center md:col-span-4 py-2 bg-[#202429] rounded-l-xl">
        <input
          className="bg-[#000] bg-opacity-10 rounded-r-xl appearance-none w-full h-16 py-2 px-4 text-[#949BB0] leading-tight focus:outline-none text-3xl"
          id="eth-to-lock"
          type="number"
          placeholder="0.0"
          max={1000}
          min={0}
          //value={value}
          //onChange={handleChange}
        />
      </div>
      <div className="md:flex md:flex-col md:items-center py-2 md:col-span-2 bg-[#202429] rounded-r-xl">
        <div className="flex flex-row items-center text-center ml-8 md:ml-0">
          <Image
            src={'/images/ethereum-logo-EC6CDBA45B-seeklogo.com.png'}
            width={30}
            height={30}
            layout="intrinsic"
          />
          <p className="appearance-none md:w-full h-full ml-3 md:ml-0 pt-3 text-[#949BB0] font-bold focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name">
            ETH
          </p>
        </div>
        <p className="appearance-none w-full py-2 text-[#949BB0] leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-center text-xs" id="inline-full-name">
          MAX: 1000
        </p>
      </div>
      <div className="md:flex md:items-center col-span-2 md:ml-3 my-1">
        <Button text="Lock" handleClick={() => { }} />
      </div>

      <div className="md:flex md:items-center  md:col-span-4 py-2 bg-[#202429] rounded-l-xl overflow-hidden">
        <input
          className="bg-[#000] bg-opacity-10 rounded-r-xl appearance-none w-full h-16 py-2 px-4 text-[#949BB0] leading-tight focus:outline-none text-3xl"
          id="eth-to-lock"
          type="number"
          placeholder="0.0"
        />
      </div>
      <div className="md:flex md:flex-col md:items-center py-2 md:col-span-2 bg-[#202429] rounded-r-xl">
        <div className="flex flex-row items-center text-center ml-8 md:ml-0">
          <Image
            src={'/images/ethereum-logo-EC6CDBA45B-seeklogo.com.png'}
            width={30}
            height={30}
            layout="intrinsic"
          />
          <p className="appearance-none md:w-full h-full ml-3 md:ml-0 pt-3 text-[#949BB0] font-bold focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name">
            ETH
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center col-span-2 md:ml-3 my-1">
        <Button text="Unlock" handleClick={() => { }} />
      </div>
    </form>
  )
}

export default Form