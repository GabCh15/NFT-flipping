interface IButton {
  text: string,
  handleClick: Function
}

const Button = ({ text, handleClick }: IButton) => {
  return (
    <button
      className="h-full w-full flex items-center bg-gradient-to-br transition-all ease-in-out duration-300 from-pink-600 to-blue-500 rounded-xl bg-opacity-60 group-hover:opacity-80 text-white px-3 font-bold"
      onClick={handleClick()}
    >
      <span className="m-auto pt-4 pb-2">        
        {text}
      </span>
    </button>
  )
}

export default Button