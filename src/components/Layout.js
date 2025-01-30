import Container from 'react-bootstrap/Container';
import logo from './assets/logo-white.png'
import { Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';



function Layout() {

  const HeaderComponent = React.memo(() => (
    <Navbar expand="lg">
      <Container className='d-flex justify-content-center'>
        <Link to="/">
          <img alt='logo' src={logo} />
        </Link>
      </Container>
    </Navbar>
  ));
  const FooterComponent = React.memo(() => (
    <footer className='row justify-content-center pt-2' style={{ borderTop: "1px solid #999" }}><p dir='ltr' className='text-light text-center'>© Copyright 2025 - Nexus Analytica</p></footer>
  ));



  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default Layout;