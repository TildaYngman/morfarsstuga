import { css } from '@emotion/react';
import { BsHouse } from "react-icons/bs";


const styles = {
  bannerContainer: css`
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  `,
  bannerImage: css`
    width: 100%;
    height: 100%;
    max-height: 40vh;
    object-fit: cover;
  `,
};

export default function BannerImage() {
  const banner = '/banner.jpg';
  return (
    <figure css={styles.bannerContainer}>
      <BsHouse />

    </figure>
  );
}