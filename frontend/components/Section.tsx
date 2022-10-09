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
  centered: boolean
}

const Section = ({ title, description, content, centered }: ISection) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className={"w-full flex flex-col items-center h-screen pt-20 mb-32 md:mb-0" + (centered && ' justify-center')}>
      <div className="flex px-10 py-5 bg-[#262D36] bg-opacity-90 w-[400px] md:w-[700px] rounded-t-md justify-between items-center relative mt-32 md:mt-0">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        ><BsInfoCircle className='cursor-pointer' />
        </span>
        {hover ? <InfoHoverModal description={description}/> : ''}
      </div>
      <div className="w-max-md bg-[#1C2025] bg-opacity-80 py-5 px-10 rounded-b-md w-[400px] md:w-[700px]">
        {content}
      </div>
    </div>
  )
}

export default Section