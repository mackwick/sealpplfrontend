import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
    </div>
  );
};

export default Header;
