import { useState } from "react"

export default function Post({author,text,likes}){

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
        </>
    )
}