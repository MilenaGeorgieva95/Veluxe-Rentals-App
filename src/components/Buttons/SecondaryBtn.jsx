import styles from "../Buttons/SecondaryBtn.module.css";

export default function SecondaryBtn({ text }) {
  return (
    <>
      <button type="button" class="btn btn-outline-secondary">
        <span className={styles.btnSpan}>{text}</span>
      </button>
    </>
  );
}
