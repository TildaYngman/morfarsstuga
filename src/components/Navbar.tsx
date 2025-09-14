import { css } from '@emotion/react';
import Navigation from './Navigation';
import { useState } from 'react';
import HomeButton from './HomeButton';

const styles = {
  navBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    background: #f8f9fa;
    opacity: 1.5;
    position: relative;
  `,
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav css={styles.navBar}>
      <HomeButton />
      <Navigation isOpen={navbarOpen} toggleNavbar={() => setNavbarOpen(!navbarOpen)} />
    </nav>
  );
}