import styles from "./index.module.scss";
import { PropertyAccess } from "@/components/Apartment/informations/PropertyAccess";
import { PropertyAddress } from "@/components/Apartment/informations/PropertyAddress";
import { PropertyType } from "@/components/Apartment/informations/PropertyType";

export const Informations = () => {
  return (
    <>
      <div className={styles.apartment__info}>
        <div className={styles.apartment__info__child}>
          <PropertyAddress />
        </div>
        <div className={styles.apartment__info__child}>
          <PropertyAccess />
        </div>
        <div className={styles.apartment__info__child}>
          <PropertyType />
        </div>
      </div>
    </>
  );
};
