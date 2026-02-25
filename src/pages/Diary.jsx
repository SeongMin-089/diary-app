import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { getStringedDate } from '../util/getStringedDate'
import useDiary from '../hooks/useDiary'

const Diary = () => {

  const {id} = useParams()
  const nav = useNavigate()

  const curDiaryItem = useDiary(id)

  const {createdDate, emotionId, content} = curDiaryItem
  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header
        leftChild={<Button 
          text={'뒤로가기'}
          onClick={()=>(nav(-1))}
        />}
        title={'yyy-mm-dd의 기록'}
        rightChild={<Button 
          text={'수정하기'} 
          type={'POSITIVE'}
          onClick={()=>(nav(`/edit/${id}`))}
        />}
      />
      <Viewer/>
    </div>
  )
}

export default Diary