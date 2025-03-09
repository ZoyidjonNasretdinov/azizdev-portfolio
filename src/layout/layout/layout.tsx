import React, { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;