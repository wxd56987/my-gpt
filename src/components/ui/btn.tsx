import { FC } from 'react'

interface Props {
  label: string,
  handleClick: () => void
}

const Btn: FC<Props> = ({label, handleClick}) => {
  return (
    <div
      className='inline-flex h-10 bg-blue-500 px-8 rounded-full cursor-pointer items-center content-center hover:opacity-80'
      onClick={handleClick}
    >
      <div className='text-white text-base text-p-semi-bold'>{label}</div>
    </div>
  )
}

export default Btn
