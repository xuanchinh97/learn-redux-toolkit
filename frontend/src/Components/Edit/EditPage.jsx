import { useState } from "react";
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
console.log();
  const [userName, setUserName] = useState("Xuan Chinh");
  const [age, setAge] = useState(22);
  const [about, setAbout] = useState("");
  const [url, setUrl] = useState(
    "https://avatars.githubusercontent.com/u/87141231"
  );
  const [theme, setTheme] = useState("#ff9051");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <form>
      <section className="edit-container">
        <button className="save" onClick={handleSubmit}>Save</button>
        <div className="edit-profile">Edit profile</div>
        <div className="input-container">
          <label>Display name</label>
          <input
            type="text"
            placeholder="name"
            id="username"
            onClick={(e) => setUserName(e.target.value)}
          />
          <label>Age</label>
          <input
            type="text"
            placeholder="age"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label>About</label>
          <textarea
            placeholder="about"
            id="about"
            onChange={(e) => setAbout(e.target.value)}
          />
          <label>Profile Picture</label>
          <div className="input-image-container">
            {avatarUrl.map((url) => (
              <>
                <img
                  src={url}
                  className="input-image"
                  alt="avatar"
                  onClick={(e) => setUrl(e.target.src)}
                />
              </>
            ))}
          </div>
          <div className="theme-container">
            <label>Theme</label>
            <input
              type="color"
              className=""
              id="theme"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default EditPage;
