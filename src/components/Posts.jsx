import { useState } from "react"
export default function Post({author,text,likes}){
    return(
        <>
            <h2>{author}</h2>
            <p>{text}</p>
            <div>Likes: {likes}</div>
        </>
    )
}