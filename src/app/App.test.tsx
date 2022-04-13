import React from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/app/App';
import { NameSpace } from 'src/store/constants';
import { api } from 'src/store';

describe('Проверка компонента App', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка отрисовки', () => {
    it('Компонент корректно отрисоывается', () => {
      const store = mockStore({
        [NameSpace.MainPage]: {
          title: 'Hello',
        },
      });

      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
