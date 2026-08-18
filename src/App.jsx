import { useState } from "react";
import './App.css'
import Post from './components/Posts'
export default function App(){


  return(
  <>
    <Post author="Aashutosh-kc" text="My first Post" likes={3}  />
  </>
  )
}