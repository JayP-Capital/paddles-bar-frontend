import { useState, useEffect } from "react";
import { _classes } from "../utilities/helpers";
import Intro from "../components/Intro";
import styles from "../styles/pages/About.module.scss";
import SecondHeroSection from "../components/SecondHeroSection";
import HeroSection from "../components/HeroSection";

const cl = _classes(styles);

function AboutUs() {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("../db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setPageData(json.items[1]);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!pageData) {
    return <p>No Data</p>;
  }

  return (
    <div className={cl("_")}>
      <div className={cl("container")}>
        <div id="hero">
          <HeroSection
            imageSrc={pageData?.fieldgroup1[0]?.image1}
            imageAltText={pageData?.fieldgroup1[0]?.image1_alt_text}
            title={pageData?.fieldgroup1[0]?.title}
            description={pageData?.fieldgroup1[0]?.h5}
            subDescription={pageData?.fieldgroup1[0]?.h6}
            buttonText={pageData?.fieldgroup1[0]?.buttontext1}
          />
          <SecondHeroSection
            imageSrc={pageData?.fieldgroup1[1]?.image1}
            imageAltText={pageData?.fieldgroup1[1]?.image1_alt_text}
            title={pageData?.fieldgroup1[1]?.title}
            description={pageData?.fieldgroup1[1]?.h5}
            subDescription={pageData?.fieldgroup1[1]?.h6}
            buttonText={pageData?.fieldgroup1[1]?.buttontext1}
          />
        </div>

        <div id="about">
          <Intro
            title={pageData.h2 || "This is the intro title"}
            meme={pageData.h3 || "Meme Text Here"}
            content={pageData.blurb1 || "This is the intro content"}
            cta={pageData.buttonlink1}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
