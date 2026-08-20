import { useState } from "react";
import './App.css'
import Post from './components/Posts'
export default function App(){

  const posts = [
  { id: 1, author: "Aashutosh", text: "My first post", likes: 4 },
  { id: 2, author: "Someone Else", text: "Another post", likes: 2 },
  { id: 3, author: "Third User", text: "3r post", likes: 7 },
]

  return(
  <>
    {posts.map((n) =>(<Post key={n.id} author={n.author} text={n.text} likes={n.likes}  />))}
  </>
  )
}