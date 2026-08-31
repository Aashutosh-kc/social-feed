import { useState } from "react"
import CommentsList from "./CommentsList";
export default function Post({id,author,text,likes,likePost,addComment,comments,deletePost}){

    const [newInputComment,setNewInputComment] = useState('');


    return(
        <>
            <h2>{author}</h2>
            <p>{text}</p>
            <div>Likes: {likes}</div>
            <button onClick={()=>likePost(id)}>Like</button>
            <CommentsList id={id} newInputComment={newInputComment} setNewInputComment={setNewInputComment} comments={comments} addComment={addComment}/>
            <button onClick={()=>{deletePost(id)}}>Delete</button>
        </>
    )
}