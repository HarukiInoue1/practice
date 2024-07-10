import { useRouter } from "next/router";
import styles from "./index.module.scss";

export const ContactButton = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")} className={styles.contact__btn}>
        お問い合わせ
        <br />
        (無料)
      </button>
    </>
  );
};
