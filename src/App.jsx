import { useState } from "react";
import './App.css'
import Post from './components/Posts'

export default function App(){

  const [posts,setPosts] = useState([{ id: 1, author: "Aashutosh", text: "My first post", likes: 4,comments: [] },
    { id: 2, author: "Someone Else", text: "Another post", likes: 2 ,comments: []}]);
 
  const [postText,setPostText] = useState('');

  function handleAdd(){
    if (postText === '') return;
    const newPost={
      id: Date.now(),
      author: "Aashutosh KC",
      text: postText,
      likes: 0,
      comments: []
    }
    setPosts([newPost,...posts])
    setPostText('')
  }

  function addComment(id,newValue){
    setPosts((n)=>n.map((post) =>{ return(post.id===id ? {...post,comments: [...post.comments,newValue]} : post ) }))
  }


  return(
  <>
    <div className="user-input">
      <input type="text" value={postText} placeholder="What's new ?" 
      onChange={(e)=>setPostText(e.target.value)} onKeyDown={(e) => {e.key==="Enter" && handleAdd()}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
    {posts.map((n) =>(<Post key={n.id} author={n.author} id={n.id} text={n.text} likes={n.likes} addComment={addComment} comments={n.comments}/>))}
  </>
  )
}