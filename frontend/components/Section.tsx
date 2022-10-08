import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs'

import InfoHoverModal from './InfoHoverModal';

interface ISection {
  title: string,
  description: {
    details: string
    strategy?: string
    fees?: {
      management: string
      success: string
    }
  },
  content: React.ReactNode
}

const Section = ({ title, description, content }: ISection) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="w-full flex flex-col items-center h-screen justify-center pt-20 ">
      <div className=" flex px-10 py-5 bg-black bg-opacity-90 w-[700px] rounded-t-md justify-between items-center relative">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        ><BsInfoCircle className='peer' />
        </span>
        {hover ? <InfoHoverModal description={description}/> : ''}
        <p className='hidden peer-hover:block'>Holiwis</p>
      </div>
      <div className="w-max-md bg-black bg-opacity-80 py-5 px-10 rounded-b-md w-[700px]">
        {content}
      </div>
    </div>
  )
}

export default Section