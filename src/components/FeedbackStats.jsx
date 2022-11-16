import React from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {useContext} from 'react'


function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext);
  // let x = useContext(FeedbackContext)
  // console.log(x.feedback[0].id)

    // const [averageRating, setAverageRating] = useState()
    let average = feedback.reduce((acc, cur)=>{
            return acc + cur.rating
    }, 0) / feedback.length

    
    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} reviews...</h4>
        <h4>Average Rating {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
