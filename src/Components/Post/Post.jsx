import { useSelector } from "react-redux";
import "./post.css";

function Post() {
  const posts = useSelector((state) => state.post.posts);
  
  return (
    <>
      <div className="post-container">
        {posts.map((post, index) => (
          <div className="post-item" key={index}>
            <div className="post-title">{post.title}</div>
            <div className="post-content">{post.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
