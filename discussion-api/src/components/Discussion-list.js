import React,{useState} from "react";
import DiscussionForm from "./Discussion-form";
import Discussion from "./Discussion";
import '../styles/discussion-list.css';

function DiscussionList(){

const[discussions, setDiscussion] = useState([]); 

  const newDiscussion = discussion => {
    if(discussion.text.trim()){ 
      discussion.text = discussion.text.trim(); 

      const discussionUpdate = [discussion,...discussions]; 
      setDiscussion(discussionUpdate);
    }
  }

 
    return(
    <>
      <DiscussionForm onSubmit={newDiscussion}/>
      <div className='discussion-list'>
        {
          discussions.map((discussion) => 
          <Discussion       
            key = {discussion.id}        
            id={discussion.id}
            text={discussion.text}
          />
          )
        }
      </div>
    </>
    )
}

export default DiscussionList;