import Button from "../Button"

const Form = () => {
  return (
    <form className="w-full grid grid-cols-8">
      <div className="md:flex md:items-center col-span-4 py-2">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue={0.0} />
      </div>
      <div className="md:flex md:items-center py-2">
        <p className="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name text-right">
          MAX:1000
        </p>
      </div>
      <div className="md:flex md:items-center py-2">
        <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-r w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-right" id="inline-full-name">
          ETH
        </p>
      </div>
      <div className="md:flex md:items-center col-span-2 ml-3">
        <Button text="Lock" handleClick={() => { }} />
      </div>

      <div className="md:flex md:items-center col-span-7 py-2">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue={0.0} />
      </div>
      <div className="md:flex md:items-center py-2">
        <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-r w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-right" id="inline-full-name">
          ETH
        </p>
      </div>

      <div className="md:flex md:items-center col-span-6 py-2">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue={0.0} />
      </div>
      <div className="md:flex md:items-center col-span-2 ml-3">
        <Button text="Unlock" handleClick={() => { }} />
      </div>
    </form>
  )
}

export default Form