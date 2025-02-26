import SecondaryBtn from "../Buttons/SecondaryBtn";
import styles from "../Nav/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navContainer}>
        <ul className={styles.mainNav}>
          <li>
            <SecondaryBtn text="Home" />
          </li>
          <li>
            <SecondaryBtn text="About" />
          </li>
          <li>
            <SecondaryBtn text="Cars" />
          </li>
        </ul>

        <ul className={styles.userNav}>
          <li>
            <SecondaryBtn text="Register" />
          </li>
          <li>
            <SecondaryBtn text="Login" />
          </li>
        </ul>
      </nav>
    </>
  );
}
