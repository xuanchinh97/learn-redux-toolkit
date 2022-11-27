import "./header.css";
import { useSelector } from "react-redux";
function Header({ setEdit }) {
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <header
      style={{
        background: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme} 65%, #fff 100% )`,
      }}
    >
      <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>
          Edit
        </div>
        <img src={user.avatarUrl} alt="avatar" className="info-avatar" />
        <div className="info-username">{user.name}</div>
        <div className="info-age">{user.age}</div>
        <div className="info-about">{user.about}</div>
      </div>
    </header>
  );
}

export default Header;
