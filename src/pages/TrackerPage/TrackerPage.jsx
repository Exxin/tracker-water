import { useTranslation } from "react-i18next";
// import styles from "./style.module.scss";

export default function TrackerPage() {
  const { t } = useTranslation();

  return <div>{t("pages.registration.signUpTitle")}</div>;
}
