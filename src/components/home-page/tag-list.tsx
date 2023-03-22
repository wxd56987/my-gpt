import { FC } from 'react'

interface Props {

}

const TagList: FC<Props> = ({}) => {

  return (
    <div
      className='flex sm:hidden justify-start px-4 mt-4 mb-4 overflow-x-auto'
    >
      <div className='flex justify-center items-center w-32 h-16 rounded bg-gray-700 mr-2 flex-shrink-0'>
        <div className='text-white font-semibold'>全部</div>
      </div>
      <div className='flex justify-center items-center w-32 h-16 rounded bg-gray-700 mr-2 flex-shrink-0'>
        <div className='text-white font-semibold'>Tag 1</div>
      </div>
      <div className='flex justify-center items-center w-32 h-16 rounded bg-gray-700 mr-2 flex-shrink-0'>
        <div className='text-white font-semibold'>Tag 1</div>
      </div>
      <div className='flex justify-center items-center w-32 h-16 rounded bg-gray-700 mr-2 flex-shrink-0'>
        <div className='text-white font-semibold'>Tag 1</div>
      </div>
      <div className='flex justify-center items-center w-32 h-16 rounded bg-gray-700 mr-2 flex-shrink-0'>
        <div className='text-white font-semibold'>Tag 1</div>
      </div>

    </div>
  )
}

export default TagList
