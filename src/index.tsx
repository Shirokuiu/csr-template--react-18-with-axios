import { StrictMode } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'src/assets/styles/index.scss';

import App from 'src/app/App';
import { createAPI } from 'src/services/api';
import { store } from 'src/store';

const container = document.getElementById('root');
const root = createRoot(container);

export const api = createAPI();

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
