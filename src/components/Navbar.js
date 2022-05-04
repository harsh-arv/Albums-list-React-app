import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="">
        <ul>
          <li className="icon">
            <a href="/Albums-list-React-app">
              <FaHome />
            </a>
          </li>
          <li className="addAlbum">
            <Link to="/add">Add Album</Link>
          </li>
          <li className="deleteAlbum">
            <Link to="/delete">Delete Album</Link>
          </li>
          <li className="replaceAlbum">
            <Link to="/replace">Replace Album</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
