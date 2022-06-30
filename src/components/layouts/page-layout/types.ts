import { PropsWithChildren } from 'react';

export type PageLayoutProps = PropsWithChildren<{
  className?: string;
  renderFooter?: () => JSX.Element | null;
}>;
