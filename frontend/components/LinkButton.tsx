import Link from 'next/link'

interface ILinkButton {
  text: string,
  href: string | undefined
}

const LinkButton = ({ text, href }: ILinkButton) => {
  return (
    <Link href={href || '/'} className="">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold border py-2 px-4 border-blue-700 rounded">
        {text}
      </button>
    </Link>
  )
}

export default LinkButton