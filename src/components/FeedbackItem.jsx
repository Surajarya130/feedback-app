import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'


function FeedbackItem({item, handleDelete}) {

    function handleClk(id){
        console.log(id)
    }


    return (
    <>
        <Card> 
            <div className="num-display">{item.rating}</div>
            {/* <button onClick={()=> handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button> */}

            <button onClick={handleClk(item.id)} className="close">
                <FaTimes color="purple" />
            </button>


            
            <div className="text-display">{item.text}</div>     
        </Card>
    </>
  )

}

export default FeedbackItem;