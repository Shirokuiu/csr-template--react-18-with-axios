import React from 'react';
import { Link } from 'react-router-dom';

import 'src/components/pages/main-page/main-page.css';
import logo from 'src/assets/img/logo.svg';

function MainPage() {
  return (
    <div className="main-page">
      <header className="main-page__header">
        <img src={logo} className="main-page__logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default MainPage;
