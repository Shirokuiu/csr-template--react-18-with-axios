import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ModalProvider } from 'react-simple-modal-provider';

import ExampleForm from 'src/components/containers/example-form/example-form';
import ExampleTriggerModal from 'src/components/containers/example-trigger-modal/example-trigger-modal';
import TestModal from 'src/components/containers/test-modal/test-modal';
import PageLayout from 'src/components/layouts/page-layout/page-layout';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';

function TestPage() {
  return (
    <HelmetProvider>
      <ModalProvider value={[TestModal]}>
        <Helmet>
          <title>Test page</title>
        </Helmet>
        <PageLayout>
          <ul>
            <li>
              <h1>Hello from test page</h1>
            </li>
            <li>
              <ExampleTriggerModal />
            </li>
            <li>
              {/* <StaticImage placeholder="blurred" src="../assets/img/icon.png" alt="test" /> */}
            </li>
            <li>{/* <Icon className="svg-icon" style={{ width: '30px' }} /> */}</li>
            <li>
              <SvgSpriteIcon id="telegram" />
            </li>
            <li>
              <SvgSpriteIcon id="phone-call" />
            </li>
            <li>
              <SvgSpriteIcon id="shopping-cart" />
            </li>
            <li>
              <ExampleForm />
            </li>
            <li>
              <Link to="/">Go home</Link>
            </li>
          </ul>
        </PageLayout>
      </ModalProvider>
    </HelmetProvider>
  );
}

export default TestPage;
