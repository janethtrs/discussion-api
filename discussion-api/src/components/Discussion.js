import React from 'react';
import '../styles/discussion.css';



function Discussion({id,texto,comment}){

  
  return(
        <div className='container-discussion'>
          <div className='user'>
            User 
          </div>
          <div 
            className='text-discussion'>
            {texto}
          </div>
          <button className='comment-button'>
            Comentar
          </button>
        </div>
    );
}

export default Discussion;