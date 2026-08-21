import { useState } from "react";
import './App.css'
import Post from './components/Posts'

export default function App(){

  const [posts,setPosts] = useState([{ id: 1, author: "Aashutosh", text: "My first post", likes: 4 },
    { id: 2, author: "Someone Else", text: "Another post", likes: 2 }]);
 
  const [postText,setPostText] = useState('');

  function handleAdd(){
    const newPost={
      id: Date.now(),
      author: "Aashutosh KC",
      text: postText,
      likes: 0
    }
    setPosts([newPost,...posts])
    setPostText('')
  }

  return(
  <>
    <div className="user-input">
      <input type="text" value={postText} placeholder="What's new ?" 
      onChange={(e)=>setPostText(e.target.value)} onKeyDown={(e) => {e.key==="Enter" && handleAdd()}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
    {posts.map((n) =>(<Post key={n.id} author={n.author} text={n.text} likes={n.likes}  />))}
  </>
  )
}