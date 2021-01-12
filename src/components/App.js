import video from "../data/video.js";
import React, {useState} from "react";
import Header from "./Header";
// import Comment from "./Comment";
import Comment from "./Comment";

function App() {
  // console.log("Here's your data:", video);

  const [commentSearch, setCommentSearch] = useState("")

    const filteredComments = video.comments.filter((comment) => {
        return comment.user.toLowerCase().includes(commentSearch.toLowerCase());
    })

    const commentItems = filteredComments.map((comment) => {
      return <Comment key={comment.id} comment={comment} user={comment.user} />;
    });

    console.log(commentItems)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} />
      <input
      type="text"
        placeholder="Search..."
        onChange={(e) => setCommentSearch(e.target.value)}
      />
      <Comment comments={commentItems}/>
      {/* <ul className="cards">{commentItems}</ul> */}
    </div>
  );
}

export default App;
