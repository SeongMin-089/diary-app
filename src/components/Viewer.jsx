import React from 'react'
import './Viewer.css'
import { emotionList } from '../util/constants'
import { getEmotionImage } from '../util/getEmotionImage'

const Viewer = () => {

    const emotionId=3
    const emotionItem = emotionList.find(
        (item)=>String(item.emotionId)==String(emotionId)
    )

  return (
    <div className='Viewer'>
        <section className={"viewer-img-section"}>
            <h4>오늘의 감정</h4>
            <div className={`emotion-img-wrapper img-${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt="icon" />
            </div>
            <div>
                {emotionItem.emotionName}
            </div>
        </section>
        <section className='content-section'>
            <h4>오늘의 일기</h4>
            <div className="content-wrapper">
                콘텐츠
            </div>
        </section>
        
    </div>
  )
}

export default Viewer