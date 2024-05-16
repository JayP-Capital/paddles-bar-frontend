import { _classes } from "../utilities/helpers";
import styles from "../styles/pages/About.module.scss";
import Image from "next/image";
import HeroSectionTextContent from "./HeroSectionTextContent";

const cl = _classes(styles);

export default function SecondHeroSection({
  title,
  description,
  subDescription,
  buttonText,
  imageSrc,
  imageAltText,
}) {
  return (
    <section className={cl("_")}>
      <div className={cl("secondImage")}>
        <div className={cl("hero")}>
          <Image
            src={imageSrc}
            alt={imageAltText}
            width={1300}
            height={850}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <HeroSectionTextContent
          title={title}
          description={description}
          subDescription={subDescription}
          buttonText={buttonText}
        />
      </div>
    </section>
  );
}
