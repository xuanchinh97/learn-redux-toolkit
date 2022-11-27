import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import "./post.css";

function MakePost({ setOpenPost }) {
  const dispatch = useDispatch();
  const [postObject, setPostObject] = useState({});

  const onChangeInput = (e) => {
    setPostObject({
      ...postObject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addPost(postObject));
    setOpenPost(false);
  };

  return (
    <section className="post-container">
      <button className="save" onClick={handleSubmit}>
        Add post
      </button>
      <div className="input-container">
        <label for="post-title">Title</label>
        <input
          id="post-title"
          type="text"
          name="title"
          onChange={onChangeInput}
        />
        <label for="post-content">Content</label>
        <textarea id="post-content" name="content" onChange={onChangeInput} />
      </div>
    </section>
  );
}

export default MakePost;
