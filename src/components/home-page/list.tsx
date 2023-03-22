import { FC } from 'react'
import Card from "@/components/ui/card";
import MCard from "@/components/ui/m-card";
import { useRouter } from 'next/router'

interface Props {
  label: string
}

const List: FC<Props> = ({label}) => {
  const router = useRouter()

  return (
    <>
      <div className='flex sm:hidden flex-col px-4 mt-4 mb-4'>
        <MCard
          title={'指甲刀'}
          dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
          handleClick={() => {
            router.push({
              pathname: '/ai/[aid]',
              query: {aid: encodeURIComponent('指甲刀')}
            })
          }}
        />
        <MCard
          title={'小米手机'}
          dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
          handleClick={() => {
            router.push({
              pathname: '/ai/[aid]',
              query: {aid: encodeURIComponent('小米手机')}
            })
          }}
        />
      </div>
      <div
        className='hidden sm:flex flex-col px-20 mt-20 mb-10'
      >
        <div className='text-white text-xl font-bold mb-4 text-overflow-2'>{label}</div>
        <div className='flex justify-items-start items-center flex-wrap w-full'>
          <Card
            title={'指甲刀'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
              router.push({
                pathname: '/ai/[aid]',
                query: {aid: encodeURIComponent('指甲刀')}
              })
            }}
          />
          <Card
            title={'小米手机'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
              router.push({
                pathname: '/ai/[aid]',
                query: {aid: encodeURIComponent('小米手机')}
              })
            }}
          />
          <Card
            title={'Generate Blob Post Topic'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
            }}
          />
          <Card
            title={'Generate Blob Post Topic'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
            }}
          />
          <Card
            title={'Generate Blob Post Topic'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
            }}
          />
          <Card
            title={'Generate Blob Post Topic'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
            }}
          />
          <Card
            title={'Generate Blob Post Topic'}
            dec={'Generate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post TopicGenerate Blob Post Topic'}
            handleClick={() => {
            }}
          />
        </div>

      </div>
    </>
  )
}

export default List
