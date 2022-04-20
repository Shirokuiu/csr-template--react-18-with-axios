import React from 'react';
import { Link } from 'react-router-dom';

import 'src/components/pages/main-page/main-page.scss';
import logo from 'src/assets/img/logo.svg';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { clearState } from 'src/store/main-page-process/reducer/main-page-process';
import { getTitle } from 'src/store/main-page-process/selectors';

function MainPage() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(clearState());
  };

  return (
    <div className="main-page">
      <header className="main-page__header">
        <img src={logo} className="main-page__logo" alt="logo" />
        <p>{title}</p>
        <a
          className="main-page__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="example" className="main-page__link">
          Go to example page
        </Link>
        <button type="button" onClick={handleButtonClick}>
          Clear state
        </button>
      </header>
    </div>
  );
}

export default MainPage;
