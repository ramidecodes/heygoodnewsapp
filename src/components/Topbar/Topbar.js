import { NavLink } from 'react-router-dom';
import { ReactComponent as HGNLogo } from '../../assets/images/hgn_logo.svg';
const Topbar = () => {
  return (
    <section className="top-bar">
      <HGNLogo height="60px" width="auto" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

Topbar.propTypes = {};

export default Topbar;
