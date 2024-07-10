import styles from "./index.module.scss";

export const FavoriteButton = () => {
  return (
    <>
      <button className={styles.favorite__btn}>
        <span className={styles.favorite__btn__text}>♡</span>
        追加
      </button>
    </>
  );
};
