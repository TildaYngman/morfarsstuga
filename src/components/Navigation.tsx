import { css } from '@emotion/react';

const styles = {
  menuContainer: css`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-width: 150px;
    display: none;

    @media (min-width: 768px) {
      position: static;
      background: transparent;
      box-shadow: none;
      padding: 0;
      min-width: auto;
      display: flex;
      align-items: center;
    }
  `,
  menuList: css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      color: #404040;
      padding: 0;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s;
      border: 1px solid transparent;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 4px;

      &:hover {
        background: #f8f9fa;
        border: 1px solid #404040;
      }
      @media (min-width: 768px) {
        background: #f8f9fa;
        padding: 8px;
      }
    }
  `,
  navButton: css`
    background: transparent;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #404040;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #f1f1f1;
    }

    svg {
      stroke: #404040;
    }

    @media (min-width: 768px) {
      display: none;
    }
  `,
};

type NavigationType = {
isOpen: boolean;
toggleNavbar: () => void;
}


export default function Navigation({ isOpen, toggleNavbar }: NavigationType) {
  return (
    <>
      <button type="button" onClick={toggleNavbar} css={styles.navButton}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6L18 18" />
            <path d="M6 18L18 6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div css={styles.menuContainer} style={{ display: isOpen ? 'block' : '' }}>
        <ul css={styles.menuList}>
          <li>
            <a href="/about">Om stugan</a>
          </li>
          <li>
            <a href="/">Bokningsförfrågan</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>
    </>
  );
}