import { Link } from 'react-router-dom';

import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import PageLayout from 'src/components/layouts/page-layout/page-layout';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { clearState } from 'src/store/slices/main-page-slice/main-page-slice';
import { getTitle } from 'src/store/slices/main-page-slice/selectors';

function ReduxExamplePage() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(clearState());
  };

  return (
    <PageLayout>
      <CenterLayout>
        <h2>{title}</h2>
        <button type="button" onClick={handleButtonClick}>
          Reset state
        </button>
        <br />
        <br />
        <div>
          <Link to="/">На главную</Link>
        </div>
      </CenterLayout>
    </PageLayout>
  );
}

export default ReduxExamplePage;
