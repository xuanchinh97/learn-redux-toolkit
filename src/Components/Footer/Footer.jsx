import "./footer.css";

function Footer({ openPost, setOpenPost }) {
  return (
    <footer onClick={() => setOpenPost(!openPost)}>
      <div className="footer-title">{!openPost ? "+" : "x"}</div>
    </footer>
  );
}

export default Footer;
