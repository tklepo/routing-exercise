/** @jsxImportSource @emotion/react */

import { Header } from '../header';
import { wrapper } from './Layout.styles';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  onLogin: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogin }) => {
  return (
    <main css={wrapper}>
      <Header onLogin={onLogin} />
      {children}
      <Outlet />
    </main>
  );
};
