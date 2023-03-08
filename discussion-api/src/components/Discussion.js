import React from 'react';
import '../styles/discussion.css';



function Discussion({id,text,comment}){
  return(
        <div className='container-discussion'>
          <div className='user'>
            User 
          </div>
          <div 
            className='text-discussion'>
            {text}
          </div>
          <button className='comment-button'>
            Comment
          </button>
          <div>New div
            <p>Hello</p>
          </div>
        </div>
        
    );
}

export default Discussion;