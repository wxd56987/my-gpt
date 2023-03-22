import { FC } from 'react'

interface Props {

}

const Footer: FC<Props> = ({}) => {

  return (
    <>
      <div className='w-full flex justify-center items-center px-20 h-10 fixed left-0 bottom-0 right-0'>
        <div className='text-white text-sm'>© Copyright 2023 Name</div>
      </div>
    </>
  )
}

export default Footer
