import Button from "./Button"
import Image from 'next/image'
import LinkButton from "./LinkButton"
import Link from "next/link"

interface IHeader {
  textAuxButton?: string
  href?: string
}

const Header = ({ textAuxButton, href }: IHeader) => {
  return (
    <nav className="shadow w-100 px-8 md:px-auto w-full py-2 absolute bg-opacity-70 bg-black">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1 w-full">
          <Link href={'/'} className='cursor-pointer'>
            <Image
              //width={20} height={20}
              src={"https://www.metagamehub.io/images/Logos/MGH/webp/mgh_logo.webp"}
              alt="metagamehub logo"
              width={52}
              height={52}
              className='cursor-pointer rounded-full'
            />
          </Link>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {textAuxButton && <li className="w-full whitespace-nowrap md:px-4 md:py-2 hover:text-indigo-400"><LinkButton text={textAuxButton} href={href} /></li>}
            <li className="w-full whitespace-nowrap md:px-4 md:py-2 hover:text-indigo-400">< Button text="Connect Wallet" handleClick={() => { console.log('connecting...') }} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header