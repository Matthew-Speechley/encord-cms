import React, { lazy, Suspense } from "react";
import { graphql } from "gatsby";
import EncordLogo from "../../images/EncordLogo";
import * as styles from "./LandingPage.module.css";
import { Helmet } from "react-helmet";

const HeroSection = lazy(
  () => import("../../components/HeroSection/HeroSection")
);
const FeatureGrid = lazy(
  () => import("../../components/FeatureGrid/FeatureGrid")
);
const CtaSection = lazy(() => import("../../components/CtaSection/CtaSection"));

const LoadingFallback = <div style={{ height: "300px" }} />;

const LandingPage = ({ data }: any) => {
  const { contentfulLandingPage } = data;
  return (
    <>
      <Helmet>
        <title>{contentfulLandingPage.title}</title>
        <meta name="title" content={contentfulLandingPage.title} />
        <meta name="description" content={contentfulLandingPage.description} />
      </Helmet>

      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <EncordLogo />
          </div>
        </header>
        <div className={styles.spacing} />
        <main>
          <Suspense fallback={LoadingFallback}>
            {contentfulLandingPage.sections.map((section: any) => {
              switch (section.__typename) {
                case "ContentfulHeroSection":
                  return <HeroSection key={section.id} data={section} />;
                case "ContentfulFeatureGrid":
                  return <FeatureGrid key={section.id} data={section} />;
                case "ContentfulCtaSection":
                  return <CtaSection key={section.id} data={section} />;
                default:
                  return null;
              }
            })}
          </Suspense>
        </main>
        <footer className={styles.footer} />
      </div>
    </>
  );
};

export const query = graphql`
  fragment HeroSectionFields on ContentfulHeroSection {
    heading
    subheading
    justify
    backgroundImage {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    }
    ctaButton {
      label
      url
      style
    }
  }

  fragment FeatureGridFields on ContentfulFeatureGrid {
    title
    features {
      title
      icon {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      description
    }
  }

  fragment CtaSectionFields on ContentfulCtaSection {
    heading
    subheading
    ctaButton {
      label
      url
      style
    }
  }

  query LandingPageQuery($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      title
      description
      sections {
        __typename
        ...HeroSectionFields
        ...FeatureGridFields
        ...CtaSectionFields
      }
    }
  }
`;

export default LandingPage;
