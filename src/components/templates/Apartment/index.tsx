import { ApartmentName } from "./ApartmentType";
import { ApartmentType } from "./ApartmentType";
import { Informations } from "./informations";
import { ApartmentProvider } from "@/context/ApartmentContext";
import styles from "./index.module.scss";

export const Apartment = () => {
  const contextValue = {
    apartmentType: true,
    apartmentName: "パークアクシス新宿百人町",
  };
  return (
    <>
      <div className={styles.apartment}>
        <ApartmentProvider value={contextValue}>
          <ApartmentType/>
          <ApartmentName/>
          <Informations />
        </ApartmentProvider>
      </div>
    </>
  );
};
