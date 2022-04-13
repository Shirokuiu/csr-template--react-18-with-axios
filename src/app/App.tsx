import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from 'src/components/pages/main-page/main-page';
import ExamplePage from 'src/components/pages/example-page/example-page';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="example" element={<ExamplePage />} />
      </Route>
    </Routes>
  );
}

export default App;
