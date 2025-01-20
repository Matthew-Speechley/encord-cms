import React from "react";
import * as styles from "./CtaButton.module.css";

export interface CtaButtonProps {
  label: string;
  url: string;
  style: "primary" | "secondary";
}

const CtaButton = ({ label, url, style }: CtaButtonProps) => {
  return (
    <a href={url}>
      <button className={`${styles.button} ${styles[style]}`}>{label}</button>
    </a>
  );
};

export default CtaButton;
