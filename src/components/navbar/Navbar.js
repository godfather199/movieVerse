import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="headerLeft">
          <span className="headerLeftTitle" onClick={handleClick}>
            MOVIE VERSE
          </span>
        </div>
        <div className="headerRight">
          <div className="headerList">
            <Link className="link" to="/">
              <div className="headerItems">
                <span>Home</span>
              </div>
            </Link>
            <Link className="link" to="/genre">
              <div className="headerItems">
                <span>Genre</span>
              </div>
            </Link>
            <Link className="link" to="/login">
              <div className="headerItems">
                <span>Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
