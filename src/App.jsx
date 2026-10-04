import { useState,useEffect } from "react";
import './App.css'
import Post from './components/Posts'
import { Route,Routes } from "react-router-dom";
import PostPage from "./components/PostPage";

export default function App(){

  const [posts,setPosts] = useState(()=>{
    const saved = localStorage.getItem('posts');
    return saved? JSON.parse(saved) :  [{ id: 1, author: "Aashutosh", text: "My first post", likes: 4,comments: [] },
    { id: 2, author: "Someone Else", text: "Another post", likes: 2 ,comments: []}]
  });

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

  useEffect(()=>{
  localStorage.setItem('posts',JSON.stringify(posts));
  },[posts])

  function likePost(id){
    setPosts((posts) => posts.map((post)=> {
      return id===post.id? {...post,likes: post.likes + 1} : post;
    }))
  }

  function deletePost(id){
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  function addComment(id,newValue){
    setPosts((n)=>n.map((post) =>{ return(post.id===id ? {...post,comments: [...post.comments,newValue]} : post ) }))
  }


  return(
  <Routes>
    <Route path="/" element={<>
    <div className="user-input">
      <input type="text" value={postText} placeholder="What's new ?" 
      onChange={(e)=>setPostText(e.target.value)} onKeyDown={(e) => {e.key==="Enter" && handleAdd()}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
    {posts.length===0?
    <p>No posts yet - write something</p>:
    (posts.map((n) =>(<Post key={n.id} author={n.author} id={n.id} text={n.text} likes={n.likes} likePost={likePost} addComment={addComment} comments={n.comments} deletePost={deletePost}/>)))
    }
    </>} />
    <Route path="/post/:id" element={<PostPage posts={posts}  likePost={likePost} addComment={addComment}  deletePost={deletePost}></PostPage>} />
  </Routes>
  )
}