import { useState } from "react"

export default function Post({id,author,text,likes,addComment,comments}){
    const [newInputComment,setNewInputComment] = useState('');
    const [likeCount,setLikeCount] = useState(likes);

    function handleLikeCount(){
        setLikeCount((prev) => prev +1)
    }

    return(
        <>
            <h2>{author}</h2>
            <p>{text}</p>
            <div>Likes: {likeCount}</div>
            <button onClick={handleLikeCount}>Like</button>
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
        </>
    )
}