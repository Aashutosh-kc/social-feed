import { useState,useEffect,useRef } from "react";
import './App.css'
import Post from './components/Posts'
import Toast from "./components/Toast";
import { Route,Routes } from "react-router-dom";
import PostPage from "./components/PostPage";

export default function App(){

  const [posts,setPosts] = useState(()=>{
    const saved = localStorage.getItem('posts');
    return saved? JSON.parse(saved) :  [{ id: 1, author: "Aashutosh", text: "My first post", likes: 4,comments: [] },
    { id: 2, author: "Someone Else", text: "Another post", likes: 2 ,comments: []}]
  });

  const [postText,setPostText] = useState('');
  const [toast,setToast] = useState(null);
  const toastTimer = useRef(null);

  function showToast(message,type){
    clearInterval(toastTimer.current);
    setToast({message,type});
    toastTimer.current = setTimeout(()=>{
      setToast(null);
    },3000);
  }

  function handleAdd(){
    if (postText.trim() === '') {
      showToast("Post title can't be empty","error");
      return;
    }
    const newPost={
      id: Date.now(),
      author: "Aashutosh KC",
      text: postText,
      likes: 0,
      comments: []
    }
    setPosts([newPost,...posts])
    showToast("Post created successfully", "success")
    setPostText('')
  }

  useEffect(()=>{
    try{
      localStorage.setItem('posts',JSON.stringify(posts));
    }
    catch(error){
      showToast("Failed to save posts","error")
    }
  
  },[posts])

  function likePost(id){
    setPosts((posts) => posts.map((post)=> {
      return id===post.id? {...post,likes: post.likes + 1} : post;
    }))
    showToast("Post liked successfully","success")
  }

  function deletePost(id){
    setPosts((prev) => prev.filter((post) => post.id !== id))
    showToast("Post deleted successfully","success")
  }

  function addComment(id,newValue){
    setPosts((n)=>n.map((post) =>{ return(post.id===id ? {...post,comments: [...post.comments,newValue]} : post ) }))
    showToast("Comment added successfully","success")
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
    {toast && <Toast message={toast.message} type={toast.type}/>}
    </>} />
    <Route path="/post/:id" element={<PostPage posts={posts}  likePost={likePost} addComment={addComment}  deletePost={deletePost}></PostPage>} />
  </Routes>
  )
}