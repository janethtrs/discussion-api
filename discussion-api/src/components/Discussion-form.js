import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/discussion-form.css';


function DiscussionForm(props){

    const[input, setInput] = useState('');

    const manageChange = e =>{
      setInput(e.target.value);
    }
  
    const sendDiscussion = e => {
      e.preventDefault(); 
      console.log("Sending");
  
      const newDiscussion = {
        id: uuidv4(), 
        text: input
      }
      props.onSubmit(newDiscussion);
    }

    return(
      <form
        className='discussion-form'
        onSubmit={sendDiscussion}>
        <input
          className='discussion-input'
          type='text'
          placeholder='Enter text'
          name='texto'
          onChange={manageChange}
        />
        <button className='discussion-button'>
          Start Discussion
        </button>
      </form>
    )
}

export default DiscussionForm;

