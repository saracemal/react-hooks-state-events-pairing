import React, { useState } from "react";

function Header({title, views,createdAt, upvotes, downvotes }) {
const [upvote, setUpvote] = useState(upvotes)
const [downvote, setDownvote] = useState(downvotes)

    function handleDownVotes(e) {
        return (
        setDownvote(downvote + 1)
        )
    }

    function handleUpVotes(e) {
        setUpvote(upvote + 1)
    }
    
    return (
    <div>
        <h1>{title}</h1>
        <p>{views} | Uploaded {createdAt} </p>
        <button onClick={handleUpVotes} name="+">{upvote}👍🏻 </button>
        <button onClick={handleDownVotes} name="-">{downvote}👎🏻 </button>
    </div>
    //title, views, createdAt, upvotes, downvotes
    )
    
}

export default Header;