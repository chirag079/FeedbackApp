import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText]=useState('')
    const[rating, setRating]=useState(10)
    const [btnDisabled, setBtnDisabled]=useState(true)
    const [message, setMessage]=useState('')

    const {addFeedback, feedbackEdit, updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
            setText(feedbackEdit.item.text)
        }
    }, [feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Text should be at least 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback={
                text, 
                rating,
            }

            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
                feedbackEdit.edit=false

            }else{
                addFeedback(newFeedback);
            }

        
        }

    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>setRating(rating)} selected={rating} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a Review' value={text}/>
                <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
