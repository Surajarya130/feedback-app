import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {

    if(!feedback || feedback.length === 0){
        return (
            <h2>No Feedback found</h2>
        )
    }
  return (
    <div className='feedback-list'> 
    {
        feedback.map((item)=>{
            return(

                <FeedbackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete={(id)=> console.log(id)} 
                
                />
            )
        })
    }
    </div>
  )
}

export default FeedbackList