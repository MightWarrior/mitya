import React, { useState } from 'react';
import {ROUTES} from "../../../constants";
import { NavLink } from "react-router-dom";
import OutsideClickHandler from "../outsideClickHandler/index";

const Profile = (props) => {
  const { logoutUser, user } = props;
  const [isSideOpen, setSideOpen] = useState(false);

  const toggleProfile = () => {
    setSideOpen(!isSideOpen);
  };

  const hideProfile = () => {
    setSideOpen(false);
  };

  const profileClassName = isSideOpen ? 'profile is-open' : 'profile';
  const profileMenuClassName = isSideOpen ? 'profile-menu menu open' : 'profile-menu menu';

  return (
    <div className={ profileClassName }>
      <div className="profile-content" onClick={ toggleProfile }>
        <div className="profile-info">
          <div className="profile-name">{ user === 'admin' ? 'Administrator' : 'User'}</div>
        </div>
      </div>
      <OutsideClickHandler handleClickOutside={ hideProfile }>
        <div className={profileMenuClassName}>
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink to={ROUTES.LOGIN_ROUTE} className="menu-link" onClick={logoutUser}>Log out</NavLink>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Profile;
