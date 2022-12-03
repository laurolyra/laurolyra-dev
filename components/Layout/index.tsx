import React, { PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Layout: React.FC<PropsWithChildren<React.ReactNode>> = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
