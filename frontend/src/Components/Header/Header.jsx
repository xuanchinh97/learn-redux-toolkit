import "./header.css";

function Header({ setEdit }) {

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <header
      style={{
        background: "#ff9061",
        backgroundImage:
          "linear-gradient(180deg, #ff9051 2%, #ff9051 65%, #181818 100% )",
      }}
    >
      <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>
          Edit
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/87141231"
          alt="avatar"
          className="info-ava"
        />
        <div className="info-username">Xuan Chinh</div>
        <div className="info-age">21</div>
        <div className="info-about">I'm a Frontend Developer</div>
      </div>
    </header>
  );
}

export default Header;
