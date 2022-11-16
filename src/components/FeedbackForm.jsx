import React, {useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)  


  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  

  const handleTextChange = (e) =>{      
      const {value} = e.target;

      if(text === '' || value === ''){
        setBtnDisabled(true)
        setMessage(null)
      }else if(text.trim().length <= 10 && text !== ''){
        setBtnDisabled(true)
        setMessage("Min 10 Chars")
      }else{
        setBtnDisabled(false)
        setMessage(null)
      }
      setText(e.target.value)
  }

 

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating 
      }

      // handleAdd(newFeedback)
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
      addFeedback(newFeedback) 
      }
      setText('')
    }
  }

  // A quick object method
  // {
  //   text: text === text, A short hand method 
  // }
  

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate us for our service</h2>
        <RatingSelect select={(rating)=>setRating(rating)} />

        <div className="input-group">
          <input onChange={handleTextChange} value = {text}  type="text" placeholder='Your feed....' />
          <Button type = "submit" onClick={handleSubmit}  isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div> }
      </form>
    </Card>
  )
}

export default FeedbackForm