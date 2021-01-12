import React, {useState} from "react";


function Comment({ comments }) {
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)



    function handleDownVotes(e) {
        setDownvote(downvote + 1)
        
    }

    function handleUpVotes(e) {
        setUpvote(upvote + 1)
    }
    
    const commentItems = comments.map((comment) => {
        console.log(comment)
              return (
                <>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
                <button onClick={handleUpVotes}>{upvote}</button>
                <button onClick={handleDownVotes}>{downvote}</button>
                </>

                
              )
            
            });
    return (
        <div>
            <h2>2 Comments</h2>
            {commentItems}
         

        </div>
    )

}

export default Comment;
