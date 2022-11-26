import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import "./edit.css";

function EditPage({ setEdit }) {
  const avatarUrl = [
    "https://i.pinimg.com/200x/18/7a/ba/187aba73bf51796aa3c85f2e14b57a90.jpg",
    "https://i.pinimg.com/474x/11/19/ed/1119edd459f2db9693ae3ee1e390205d.jpg",
    "https://i.pinimg.com/736x/0c/d0/1c/0cd01c23c5ee1586f2c8e347e9d087f5.jpg",
    "https://i.pinimg.com/736x/87/22/61/87226137678ea356faecc46efc9b1094.jpg",
    "https://yt3.ggpht.com/a/AGF-l7_f-5QERHwQIUr8d_TJ2n04aJrNqjaFzuwyGQ=s400-c-k-c0xffffffff-no-rj-mo",
    "https://i.pinimg.com/originals/99/f2/1e/99f21e16b3cec0f4da46a0f9c7c577b2.jpg",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userObject, setUserObject] = useState({
    name: user.name,
    age: user.age,
    about: user.about,
    avatarUrl: user.avatarUrl,
    theme: user.theme,
  });

  const onChangeInput = (e) => {
    setUserObject({
      ...userObject,
      [e.target.name]: e.target.value,
    });
  };

  const onClickImage = (e) => {
    setUserObject({
      ...userObject,
      [e.target.name]: e.target.src,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    dispatch(updateUser(userObject));
  };

  return (
    <form>
      <section className="edit-container">
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
        <div className="edit-profile">Edit profile</div>
        <div className="input-container">
          <label>Display name</label>
          <input
            type="text"
            placeholder={user.name}
            name="name"
            onChange={onChangeInput}
          />
          <label>Age</label>
          <input
            type="text"
            placeholder={user.age}
            name="age"
            onChange={onChangeInput}
          />
          <label>About</label>
          <textarea
            placeholder={user.about}
            name="about"
            onChange={onChangeInput}
          />
          <label>Profile Picture</label>
          <div className="input-image-container">
            {avatarUrl.map((url) => (
              <img
                key={url}
                src={url}
                className="input-image"
                alt="avatar"
                name="avatarUrl"
                onClick={onClickImage}
              />
            ))}
          </div>
          <div className="theme-container">
            <label>Theme</label>
            <input
              type="color"
              className=""
              name="theme"
              onChange={onChangeInput}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default EditPage;
