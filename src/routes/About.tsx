import { useState } from 'react';
import { css } from '@emotion/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const styles = {
  section: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 20px;
  `,
  button: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: white;
    color: #404040;
    border: 1px solid #4a4a4a;
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;

    &:hover {
      background: #f8f9fa;
      color: #404040;
    }
  `,
  alignButton: css`
    display: flex;
    gap: 8px;
  `,
  moreText: (isVisible: boolean) => css`
    display: ${isVisible ? 'inline-block' : 'none'};
  `,
};

export default function StugaDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section css={styles.section}>
      <h1>Om Stugan</h1>
      <p>
        Välkommen till vår vackra fjällstuga i Tänndalen! Den större av de två stugorna är
        tillgänglig att hyra. Storstugan byggdes på 80-talet och har gått i arv från vår mormor och
        morfar till vår mamma och nu har vi äran att förvalta den. Stugan har skänkt glädje och
        fantastiska minnen till vår familj. Vi vill vårda detta arv och sprida samma glädje till
        kommande generationer.
      </p>
      <button
        css={styles.button}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <span css={styles.alignButton}>
            Visa mindre <BsChevronUp />
          </span>
        ) : (
          <span css={styles.alignButton}>
            Läs mer <BsChevronDown />
          </span>
        )}
      </button>
      <div css={styles.moreText(isExpanded)}>
        <p>
          Med omsorgsfull planering har vår familj skapat en stuga utrustad med allt för en
          fantastisk fjällvistelse. Morfar var en uppfinnare och en entreprenör och har skapat många
          av de finurliga lösningar som finns i stugans inredning. Välkommen till en unik plats där
          du kan känna dig hemma och uppleva fjällens magi. Låt oss vara din värd för en oförglömlig
          fjällvistelse.
        </p>
      </div>

      <h2>Utrustning och bekvämligheter</h2>
      <ul>
        <li>
          <strong>Fullt utrustat kök</strong> – Perfekt för att laga läckra måltider och njuta av
          fjällmiljön.
        </li>
        <li>
          <strong>Mysigt vardagsrum</strong> – Med en braskamin som ger värme och avkoppling efter
          en dag utomhus.
        </li>
        <li>
          <strong>Två toaletter</strong> – En på varje våningsplan för bekvämlighet.
        </li>
        <li>
          <strong>Dubbelrum</strong> – En bekväm säng på 160 cm med praktisk förvaring under.
        </li>
        <li>
          <strong>Mindre sovrum</strong> – Våningssäng och garderob, perfekt för familjer eller
          extra gäster.
        </li>
        <li>
          <strong>Förvaringsmöjligheter</strong> – Flera hallar med plats för ytterkläder och en
          särskild plats för att torka pjäxor.
        </li>
        <li>
          <strong>Frys</strong> – Lättillgänglig under trappan.
        </li>
        <li>
          <strong>Sovrum på nedre plan</strong> – Våningssäng, garderob och byrå för extra komfort.
        </li>
        <li>
          <strong>Duschrum & bastu</strong> – Perfekt för återhämtning efter en dag i backen eller
          längdspåren.
        </li>
      </ul>
    </section>
  );
}