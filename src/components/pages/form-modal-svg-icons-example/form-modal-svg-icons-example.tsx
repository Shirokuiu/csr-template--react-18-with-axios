import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ModalProvider } from 'react-simple-modal-provider';

import ExampleForm from 'src/components/containers/example-form/example-form';
import ExampleTriggerModal from 'src/components/containers/example-trigger-modal/example-trigger-modal';
import TestModal from 'src/components/containers/test-modal/test-modal';
import PageLayout from 'src/components/layouts/page-layout/page-layout';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';

function FormModalSvgIconsExample() {
  return (
    <HelmetProvider>
      <ModalProvider value={[TestModal]}>
        <Helmet>
          <title>Пример формы, модалки, svg иконок</title>
        </Helmet>
        <PageLayout>
          <ul>
            <li>
              <h1>Пример формы, модалки, svg иконок</h1>
            </li>
            <li>
              <ExampleTriggerModal />
            </li>
            <li>
              <SvgSpriteIcon id={SvgSpriteIconId.Telegram} />
            </li>
            <li>
              <SvgSpriteIcon id={SvgSpriteIconId.PhoneCall} />
            </li>
            <li>
              <SvgSpriteIcon id={SvgSpriteIconId.ShoppingCart} />
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

export default FormModalSvgIconsExample;
