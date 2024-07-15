import styles from "./index.module.scss";
import { PropertyAddress } from "./Property";
import { PropertyAccess } from "./Property";
import { PropertyType } from "./Property";

export const Informations = () => {
  const propertyData = {
    status: "新築",
    story: 3,
    accesses: [
      "JR中央線/大久保駅 歩6分",
      "JR山手線/新大久保駅 歩9分",
      "JR山手線/高田馬場駅 歩19分",
    ],
    address: "東京都新宿区百人町3",
  };

  const {status, story, accesses, address} = propertyData;

  return (
    <>
      <div className={styles.apartment__info}>
        <div className={styles.apartment__info__child}>
          <PropertyAddress address={address} />
        </div>
        <div className={styles.apartment__info__child}>
          <PropertyAccess accesses={accesses} />
        </div>
        <div className={styles.apartment__info__child}>
          <PropertyType story={story} status={status} />
        </div>
      </div>
    </>
  );
};
