import { css } from '@emotion/react';
import { BsHouse } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const styles = {
  navButton: css`
    background: #f8f9fa;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
    border: 1px solid transparent;

    &:hover {
      background: #f8f9fa;
      border: 1px solid #404040;
    }

    svg {
      stroke: #404040;
      width: 24px;
      height: 24px;
    }
  `,
};

export default function HomeButton() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <button type="button" onClick={goToHome} css={styles.navButton}>
      <BsHouse color="#404040" />
    </button>
  );
}