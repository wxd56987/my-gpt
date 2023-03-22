import { FC } from 'react'
import Btn from '@/components/ui/btn'

interface Props {

}

const Header: FC<Props> = ({}) => {

  return (
    <>
      <div className='hidden sm:flex w-full justify-between items-center px-20 h-20 bg-black'>
        <div className='text-white text-2xl font-bold'>LOGO</div>
        <Btn
          label={'Login'}
          handleClick={() => {}}
        />
      </div>
      <div className='sm:hidden block p-4 h-20'>
        <div className='text-white text-base font-bold'>轻松生成文案</div>
        <div className='text-gray-100 text-xs'>一键生成想要的文案</div>
      </div>
    </>
  )
}

export default Header
