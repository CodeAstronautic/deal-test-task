import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { MainHeader } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = () => {
  return (
    <div className={style.normal}>
      <MainHeader />
    </div>
  );
};
