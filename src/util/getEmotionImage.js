import emotion1 from '../assets/newEmotion1.png'
import emotion2 from '../assets/newEmotion2.png'
import emotion3 from '../assets/newEmotion3.png'
import emotion4 from '../assets/newEmotion4.png'
import emotion5 from '../assets/newEmotion5.png'
export const getEmotionImage = (emotionId) => {
    switch(emotionId){
        case 1: return emotion1
        case 2: return emotion2
        case 3: return emotion3
        case 4: return emotion4
        case 5: return emotion5
        default:return null
    }

}
