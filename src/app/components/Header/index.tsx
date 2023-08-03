import React from 'react';
import style from './header.css';
import LogOut from '../../../assets/images/logout.png';
import logoId from '../../../assets/images/loq8Logo.png';
import { useHistory } from 'react-router';
export const MainHeader = (): JSX.Element => {
  const history=useHistory()
  const logOutFunc = () => {
    localStorage.removeItem('@auth');
    history.push("/")
  };
  return (
    <header>
      <a href="/">
        <img src={logoId} alt="LOQ8 Logo" />
      </a>
      <div className={style.userBox}>
        Test User
        <p className={style.logOut} onClick={logOutFunc}>
          <img src={LogOut} alt="Logout" />
        </p>
      </div>
    </header>
  );
};
