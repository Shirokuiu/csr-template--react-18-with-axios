import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ReactComponent as SvgSprite } from 'src/assets/sprites/_sprite.svg';
import MainPage from 'src/components/pages/main-page/main-page';

const TestPage = lazy(() => import('src/components/pages/test-page/test-page'));
const ReduxExamplePage = lazy(
  () => import('src/components/pages/redux-example-page/redux-example-page'),
);
const FontsExamplePage = lazy(
  () => import('src/components/pages/fonts-example-page/fonts-example-page'),
);
const DataFetchByRtkQueryExamplePage = lazy(
  () =>
    import(
      'src/components/pages/data-fetch-by-rtk-query-example-page/data-fetch-by-rtk-query-example-page'
    ),
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
          <Route
            path="data-fetch-by-rtk-query-example-page"
            element={
              <Suspense fallback={<>...</>}>
                <DataFetchByRtkQueryExamplePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <SvgSprite className="svg-sprite" />
    </>
  );
}

export default App;
