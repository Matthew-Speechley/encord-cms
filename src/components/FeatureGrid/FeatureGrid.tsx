import React from "react";
import * as styles from "./FeatureGrid.module.css";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface FeatureGridProps {
  data: {
    title: string;
    features: Array<{
      title: string;
      description: string;
      icon: IGatsbyImageData;
    }>;
  };
}

const FeatureGrid = ({ data }: FeatureGridProps) => {
  const { title, features } = data;

  return (
    <section className={styles.featureGridContainer}>
      <h1>{title}</h1>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => {
          const image = getImage(feature.icon);
          return (
            <div key={index} className={styles.featureBox}>
              <div className={styles.titleContainer}>
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={title}
                    className={styles.icon}
                  />
                )}
                <h4 className={styles.title}>{feature.title}</h4>
              </div>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
