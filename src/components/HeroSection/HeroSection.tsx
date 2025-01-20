import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import CtaButton, { CtaButtonProps } from "../CtaButton/CtaButton";
import * as styles from "./HeroSection.module.css";

interface HeroSectionProps {
  data: {
    heading: string;
    subheading: string;
    justify: "left" | "center";
    backgroundImage: IGatsbyImageData;
    ctaButton: CtaButtonProps;
  };
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const { heading, subheading, backgroundImage, ctaButton } = data;
  const image = getImage(backgroundImage);

  return (
    <section className={styles.heroSection}>
      {image && (
        <GatsbyImage
          image={image}
          alt={heading}
          className={styles.backgroundImage}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <div
        className={styles.heroContent}
        style={{ "--text-align": data.justify } as React.CSSProperties}
      >
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
        {ctaButton && <CtaButton {...ctaButton} />}
      </div>
    </section>
  );
};

export default HeroSection;
