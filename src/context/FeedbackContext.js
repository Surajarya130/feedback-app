import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "It was great",
      rating: 10, 
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);

  // Add feedback
  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }  

  // To Edit the feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},  
    edit:false
  })

  // Update Feedback

  const updateFeedback = (id, updItem)=>{
    // console.log(id, updItem )
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
  }


  // Delete Feedback
    const deleteFeedback = (id) =>{
        setFeedback(feedback.filter( feed => feed.id !== id))
    }   

  // To edit the feedback (function)
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }


  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback 
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext 
