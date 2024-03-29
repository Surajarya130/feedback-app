import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import FeedbackContext  from '../context/FeedbackContext'


function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)


    if(!isLoading && (!feedback || feedback.length === 0)){
        return (
            <h2>No Feedback found</h2>
        )
    }
 
    return isLoading ? <Spinner />  : (
        <div className='feedback-list'> 
        <AnimatePresence>
        {
            feedback.map((item)=>{
                return(
                    <motion.div 
                        key={item.id}
                        initial={{opacity:0}}
                        animate = {{opacity:1}}
                        exit={{opacity:0}}
                    >
                    <FeedbackItem 
                        key={item.id} 
                        item={item} 
                        // handleDelete = {(id) => console.log(id)}
                    />
                    </motion.div>
                )
            })
        }
        </AnimatePresence>
        </div>        
    )
    
    

//   return (
//     <div className='feedback-list'> 
//     {
//         feedback.map((item)=>{
//             return(

//                 <FeedbackItem 
//                     key={item.id} 
//                     item={item} 
//                     // handleDelete = {(id) => console.log(id)}
//                     handleDelete={handleDelete}
//                 />
//             )
//         })
//     }
//     </div>
//   )
}

export default FeedbackList