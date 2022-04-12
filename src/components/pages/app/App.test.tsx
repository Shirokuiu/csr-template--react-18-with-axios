import React from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/pages/app/App';
import { NameSpace } from 'src/store/constants';

describe('Проверка компонента App', () => {
  const middlewares = [thunk.withExtraArgument('')];
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
