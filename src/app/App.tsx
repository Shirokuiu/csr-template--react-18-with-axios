import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ReactComponent as SvgSprite } from 'src/assets/sprites/_sprite.svg';
import MainPage from 'src/components/pages/main-page/main-page';
import TestPage from 'src/components/pages/test-page/test-page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="test-page" element={<TestPage />} />
        </Route>
      </Routes>
      <SvgSprite className="svg-sprite" />
    </>
  );
}

export default App;
