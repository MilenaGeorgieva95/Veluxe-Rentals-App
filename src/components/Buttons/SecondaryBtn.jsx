import styles from "../Buttons/SecondaryBtn.module.css";

export default function SecondaryBtn({ text }) {
  return (
    <>
      <button type="button" className="btn btn-outline-secondary">
        <span className={styles.btnSpan}>{text}</span>
      </button>
    </>
  );
}
