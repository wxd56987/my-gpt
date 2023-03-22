import { FC } from 'react'

interface Props {
  title: string,
  dec: string,
  handleClick: () => void
}

const MCard: FC<Props> = ({title, dec, handleClick}) => {

  return (
    <div
      className='inline-flex p-4 rounded cursor-pointer justify-start items-start bg-gray-700 mr-2 mb-2 w-full'
      onClick={handleClick}
    >
      <div className='w-10 h-10 bg-orange-400 mr-4 flex-shrink-0'></div>
      <div>
        <div className='text-base text-white font-bold mb-2'>{title}</div>
        <div className='text-sm text-gray-400 text-overflow-2'>{dec}</div>
      </div>
    </div>
  )
}

export default MCard
