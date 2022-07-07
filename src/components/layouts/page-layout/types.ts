import { PropsWithChildren } from 'react';

import { PropsWithCssClassName } from 'src/type/shared';

export type PageLayoutProps = PropsWithChildren<
  PropsWithCssClassName<{
    renderFooter?: () => JSX.Element | null;
  }>
>;
