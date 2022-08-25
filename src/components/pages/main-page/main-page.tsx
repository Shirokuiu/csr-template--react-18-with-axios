import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import PageLayout from 'src/components/layouts/page-layout/page-layout';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { clearState } from 'src/store/main-page-process/main-page-process';
import { getTitle } from 'src/store/main-page-process/selectors';

function MainPage() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(clearState());
  };

  return (
    <HelmetProvider>
      <PageLayout renderFooter={() => <h2>Hello from footer content</h2>}>
        <Helmet>
          <title>Index page</title>
        </Helmet>
        <CenterLayout>
          <ul>
            <li>
              <h1>Hello</h1>
            </li>
            <li>
              <Link to="test-page">Test page</Link>
            </li>
            <li>{title}</li>
            <li>
              <button type="button" onClick={handleButtonClick}>
                Reset state
              </button>
            </li>
          </ul>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
