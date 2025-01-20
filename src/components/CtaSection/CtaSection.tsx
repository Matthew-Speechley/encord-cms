import React from "react";
import CtaButton, { CtaButtonProps } from "../CtaButton/CtaButton";
import * as styles from "./CtaSection.module.css";

interface CtaSectionProps {
  data: {
    heading: string;
    subheading: string;
    ctaButton: CtaButtonProps;
  };
}

const CtaSection = ({ data }: CtaSectionProps) => {
  const { heading, subheading, ctaButton } = data;
  return (
    <section className={styles.ctaSectionContainer}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subheading}>{subheading}</p>
      {ctaButton && <CtaButton {...ctaButton} />}
    </section>
  );
};

export default CtaSection;
