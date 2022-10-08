import { BsInfoCircle } from 'react-icons/bs'

interface ISection {
  title: string,
  description: string,
  content: React.ReactNode
}

const Section = ({ title, description, content }: ISection) => {
  return (
    <div className="w-full flex flex-col items-center h-screen justify-center pt-20">
      <div className=" flex px-10 py-5 bg-black bg-opacity-90 w-[500px] rounded-t-md justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span><BsInfoCircle /></span>
      </div>
      <div className="w-max-md bg-black bg-opacity-80 py-5 px-10 rounded-b-md w-[500px]">
        {content}
      </div>
    </div>
  )
}

export default Section