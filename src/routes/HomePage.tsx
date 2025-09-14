import { css } from '@emotion/react';
import BannerImage from '../components/BannerImage';
const styles = {
  page: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 20px;
  `,
  bookingRequest: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,
};

export default function HomePage() {
  return (
    <>
      <BannerImage />
      <div css={styles.page}>
        <header>
          <h1>Morfars Stuga</h1>
          <h3>Välkommen till stugan vid fjällets fot!</h3>
        </header>

        <section>
          <p>
            Här njuter vi av underbara dagar i den allra vackraste miljön som Härjedalen har att
            erbjuda. Vi önskar er krispiga dagar på fjället och varma kvällar i bastun.
          </p>
        </section>

        <section css={styles.bookingRequest}>
          <h2 id="boka-stugan">Är du sugen på att boka stugan för en fjällsemester?</h2>
          <button type="button">Gör en bokningsförfrågan</button>
        </section>

        <section>
          <h2 id="upptack-tanndalen">Upptäck Tänndalen</h2>
          <p>
            Missa inte att kolla in vad som händer i Tänndalen under tiden du är här! Det finns
            mängder med roliga event året om som man inte vill missa!
          </p>
          <a href="/">Se evenemang i Tänndalen</a>
        </section>
      </div>
    </>
  );
}