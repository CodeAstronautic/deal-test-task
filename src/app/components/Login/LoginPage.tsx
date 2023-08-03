import React, { useState, useEffect } from 'react';
import { authApiData } from 'app/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import loq8Logo from "../../../assets/images/loq8Logo.png"
import style from './login.css';

export const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { authData, error } = useSelector((data: any) => data.authDataList);
  console.log(authData, error, 'dataadataa');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(authApiData({ username, password }));
  };
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  useEffect(() => {
    if (authData?.id) {
      history.push('/deals');
    }
  }, [authData]);
  return (
    <>
      <div className={style.loginWarpper}>
        <div className={style.loginBox}>
          <img src={loq8Logo} alt="LOQ8 Logo" />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
