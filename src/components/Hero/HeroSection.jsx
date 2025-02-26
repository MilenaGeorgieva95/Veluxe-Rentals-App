import SecondaryBtn from "../Buttons/SecondaryBtn";
import styles from "../Hero/HeroSection.module.css";

export default function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <header className="heroHeader">
          <div className="logo">
            <span className="icon fa-gem"></span>
          </div>
          <div className="content">
            <div className="inner">
              <h1>Veluxe Rentals</h1>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="btnSection">
            <div className="btn-group" role="group" aria-label="Basic example">
              <SecondaryBtn text="First" />
              <SecondaryBtn text="Second" />
              <SecondaryBtn text="Third" />
              <SecondaryBtn text="Fourth" />
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
