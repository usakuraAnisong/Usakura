import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-item active">메인</a>
      <span className="divider">|</span>
      <a href="#" className="nav-item">소개</a>
      <span className="divider">|</span>
      <a href="#" className="nav-item">연혁</a>
      <span className="divider">|</span>
      <a href="#" className="nav-item">멤버</a>
      <span className="divider">|</span>
      <a href="#" className="nav-item">스터디</a>
      <span className="divider">|</span>
      <a href="#" className="nav-item">공모</a>
    </nav>
  );
};

export default Navbar;
