import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'src/components/pages/main-page/main-page';
import WrappedSvgSprite from 'src/hocks/wrapped-svg-sprite/wrapped-svg-sprite';

const TestPage = lazy(() => import('src/components/pages/test-page/test-page'));
const ReduxExamplePage = lazy(
  () => import('src/components/pages/redux-example-page/redux-example-page'),
);
const FontsExamplePage = lazy(
  () => import('src/components/pages/fonts-example-page/fonts-example-page'),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route
            path="test-page"
            element={
              <Suspense fallback={<>...</>}>
                <TestPage />
              </Suspense>
            }
          />
          <Route
            path="redux-example-page"
            element={
              <Suspense fallback={<>...</>}>
                <ReduxExamplePage />
              </Suspense>
            }
          />
          <Route
            path="fonts-example-page"
            element={
              <Suspense fallback={<>...</>}>
                <FontsExamplePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
