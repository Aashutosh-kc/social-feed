import { useState } from "react"

export default function Post({id,author,text,likes,likePost,addComment,comments,deletePost}){

    const [newInputComment,setNewInputComment] = useState('');


    return(
        <>
            <h2>{author}</h2>
            <p>{text}</p>
            <div>Likes: {likes}</div>
            <button onClick={()=>likePost(id)}>Like</button>
            <input type="text" placeholder="Add a comment" value={newInputComment} 
            onKeyDown={(e)=>{
                if(e.key==="Enter"){ 
                    if (newInputComment==='') return;
                    addComment(id,newInputComment);
                    setNewInputComment('');
                }
            }} 
            onChange={(e) => setNewInputComment(e.target.value)}/>
            {comments.map((comment,index) => (<li key={index} >{comment}</li>))}
            <button onClick={()=>{deletePost(id)}}>Delete</button>
        </>
    )
}