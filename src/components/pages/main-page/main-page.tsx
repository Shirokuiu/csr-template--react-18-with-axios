import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import PageLayout from 'src/components/layouts/page-layout/page-layout';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout
        renderFooter={() => (
          <CenterLayout>
            <h2>Контент футера</h2>
          </CenterLayout>
        )}
      >
        <Helmet>
          <title>Руководство</title>
        </Helmet>
        <CenterLayout>
          <h1>Руководство</h1>
          <ul>
            <li>
              <Link to="test-page">Пример с формой и модалкой</Link>
            </li>
            <li>
              <Link to="redux-example-page">Пример с redux</Link>
            </li>
            <li>
              <Link to="fonts-example-page">Пример с шрифтами</Link>
            </li>
            <li>
              <Link to="data-fetch-by-rtk-query-example-page">Пример работы с api (rtk-query)</Link>
            </li>
          </ul>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
