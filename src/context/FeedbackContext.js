import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback() 
  }, [])

  // Fetch Feed from JSON server
  const fetchFeedback = async ()=>{
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    // console.log(data)
    setFeedback(data)
    setIsLoading(false)
  }
  

  // Add feedback
  const addFeedback = async (newFeedback)=>{
    const response = await fetch(`/feedback`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback), 
    })
    const data = await response.json()
    setFeedback([data, ...feedback])
  }  

  // To Edit the feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},  
    edit:false
  })

  // Update Feedback 
  const updateFeedback = async (id, updItem)=>{

    const response = await fetch(`/feedback/${id}`, {
      method:"PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(updItem) 
    })

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...data} : item))
    )
  }


  // Delete Feedback
    const deleteFeedback = async (id) =>{
        await fetch(`/feedback/${id}`, {method: "DELETE"})
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
        isLoading,
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
