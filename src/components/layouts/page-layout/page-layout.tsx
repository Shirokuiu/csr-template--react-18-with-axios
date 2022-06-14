import React from 'react';

import { PageLayoutProps } from 'src/components/layouts/page-layout/types';
import './page-layout.scss';

function PageLayout({ children, renderFooter = () => null }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
      <div className="page-layout__footer-wrap">{renderFooter()}</div>
    </div>
  );
}

export default PageLayout;
