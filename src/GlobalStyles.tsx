import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Normalize Styles */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      p {
        margin: 0;
      }
      ul,
      ol {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0;
        padding-left: 12px;
        list-style: none;
      }

      @media (min-width: 768px) {
        ul,
        ol {
          padding-left: 40px;
        }
      }

      button {
        background-color: #007bff;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 9999px;
        cursor: pointer;
        text-align: center;
        transition: background 0.2s ease-in-out;
      }

      button:hover {
        background-color: #0056b3;
      }

      button:active {
        background-color: #004085;
      }

      button:focus {
        outline: 2px solid #005fcc;
      }

      a {
        color: #0000ee;
        text-decoration: underline;
        cursor: pointer;
      }

      a:visited {
        color: #551a8b;
      }

      a:hover {
        color: #ff0000;
        text-decoration: underline;
      }

      a:focus {
        outline: 2px solid #005fcc;
      }

      a:active {
        color: #ff0000;
      }
      h1 {
        color: #404040;
        margin: 0;
      }
      h2 {
        color: #5c5c5c;
        margin: 0;
      }
      h3 {
        color: #5c5c5c;
        margin: 0;
      }
      p {
        color: #404040;
        margin: 0;
      }
    `}
  />
);

export default GlobalStyles;