interface IButton {
  text: string,
  handleClick: Function
}

const Button = ({text, handleClick} : IButton) => {
  return (
    <button
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={handleClick()}
    >
      {text}
    </button>
  )
}

export default Button