import { FC, useState } from 'react'
import Btn from "@/components/ui/btn";
import { useRouter } from "next/router";
import { EventSourcePolyfill } from 'event-source-polyfill';
import InsertBar from "@/components/ui/insert-bar";


interface Props {
}

const Generate: FC<Props> = ({}) => {

  const {query} = useRouter()

  const [answer, setAnswer] = useState('')
  const [question, setQuestion] = useState(decodeURIComponent(query.aid as string))
  const [flashing, setFlashing] = useState(false)

  const getFlow = (question: string) => {
    let t = answer

    const eventSource = new EventSourcePolyfill(`https://www.ludaodao.com/chat/chat?message=${question}&str=bingqilin`, {
      headers: {
        'uid': '111'
      }
    })

    eventSource.onopen = (event) => {
      console.log("onopen", event.target);
      setFlashing(true)
    }

    eventSource.onmessage = (event) => {
      if (event.data == "[DONE]") {
        t = '';
        event.target.close()
        setFlashing(false)
        return;
      }

      let json_data = JSON.parse(event.data)
      if (json_data.content == null || json_data.content == 'null') {
        t = ''
        return;
      }
      t = t + json_data.content;
      setAnswer(t)

    }
    eventSource.onerror = (event) => {
      console.log("onerror", event);
      event.target.close();
    };
  }

  return (
    <div
      className='px-4 sm:px-20'
    >
      <div className='flex justify-start items-start my-10'>
        <div className='w-12 h-12 bg-orange-400 mr-6 flex-shrink-0'></div>
        <div className='flex flex-col'>
          <div className='text-base text-white font-bold mb-2'>Write an Engaging Article on ....</div>
          <div className='text-sm text-gray-400'>Write an engaging article that will capture your
            readers&apos; attention and keep them coming back for more. This guide helps you create a compelling article
            that will be sure to stand out.
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
        <div className='flex-1 w-full'>
          <textarea
            className='w-full border border-white bg-gray-400 rounded p-4'
            style={{
              height: 300
            }}
            value={question}
            onChange={(v) => {
              setQuestion(v.target.value)
            }}
          ></textarea>
        </div>
        <div className='w-40 flex justify-center my-4 sm:my-0'>
          <Btn
            label={'<->'}
            handleClick={() => {
              setAnswer('')
              getFlow(question)
            }}
          />
        </div>
        <div className='flex-1 w-full'>
          <div
            className='w-full border border-white bg-gray-400 rounded p-4'
            style={{
              height: 300
            }}
          >
            {answer}{' '}{flashing && <InsertBar />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generate
