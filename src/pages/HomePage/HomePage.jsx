import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
// import Modal from "../../components/Modal/Modal";
// // import styles from "./style.module.scss";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* <LanguageSwitcher />
      <Modal modalTitle="Title">Modal content</Modal> */}
      {t("pages.registration.signUpTitle")}
    </div>
  );
}
