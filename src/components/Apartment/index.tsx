import { ApartmentName } from "./ApartmentType";
import { ApartmentType } from "./ApartmentType";
import { Informations } from "./informations";
import styles from "./index.module.scss";

export const Apartment = () => {
  return (
    <>
      <div className={styles.apartment}>
        <ApartmentType apartmentType={false}/>
        <ApartmentName apartmentName="パークアクシス新宿百人町" />
        <Informations />
      </div>
    </>
  );
};
