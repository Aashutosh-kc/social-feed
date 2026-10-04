import { useParams } from "react-router-dom"
import { useState } from "react";
import CommentsList from "./CommentsList";
export default function PostPage({posts,likePost,addComment,deletePost}){

     const { id } = useParams();
     const [newInputComment,setNewInputComment] = useState('');
     const matchedPost = posts.find((a) => a.id===Number(id));

    if (!matchedPost){
        return<p>Post not found</p>
    }
        return (
        <>
            <h2>{matchedPost.author}</h2>
            <p>{matchedPost.text}</p>
            <div>Likes: {matchedPost.likes}</div>
            <button onClick={()=>likePost(matchedPost.id)}>Like</button>
            <CommentsList id={matchedPost.id} newInputComment={newInputComment} setNewInputComment={setNewInputComment} comments={matchedPost.comments} addComment={addComment}/>
            <button onClick={()=>{deletePost(matchedPost.id)}}>Delete</button>
        </>)
}