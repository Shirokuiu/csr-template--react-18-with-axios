import { PropsWithChildren } from 'react';

export type PageLayoutProps = PropsWithChildren<{
  renderFooter?: () => JSX.Element | null;
}>;
