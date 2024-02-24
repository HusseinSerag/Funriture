import styles from "./ErrorMessage.module.scss";

export default function ErrorMessage({ error, showErrorMessage, children }) {
  return (
    <div className={styles.error}>{showErrorMessage ? error : children}</div>
  );
}
