import { useState, useEffect} from "react"
export default function CommentsList({id,newInputComment,setNewInputComment,addComment,comments}){
    return(
        <>
        <input type="text" placeholder="Add a comment" value={newInputComment} 
            onKeyDown={(e)=>{
                if(e.key==="Enter"){ 
                    if (newInputComment==='') return;
                    addComment(id,newInputComment);
                    setNewInputComment('');
                }
            }} 
            onChange={(e) => setNewInputComment(e.target.value)}
        />
        
        {comments.map((comment,index) => (<li key={index} >{comment}</li>))}
        </>
    )
}