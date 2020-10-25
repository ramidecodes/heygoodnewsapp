import { NavLink } from 'react-router-dom';
import { ReactComponent as HGNLogo } from '../../assets/images/hgn_logo.svg';
import TopbarStyles from './TopbarStyles';
const Topbar = () => {
  return (
    <TopbarStyles className="top-bar">
      <HGNLogo height="60px" width="70px" />
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
    </TopbarStyles>
  );
};

Topbar.propTypes = {};

export default Topbar;
