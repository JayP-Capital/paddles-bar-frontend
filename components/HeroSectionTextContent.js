import { _classes } from "../utilities/helpers";
import styles from "../styles/pages/About.module.scss";
const cl = _classes(styles);

export default function HeroSectionTextContent({
  title,
  description,
  subDescription,
  buttonText,
}) {
  return (
    <div className={cl("heroSubsection")}>
      <div className={cl("title")}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className={cl("subDescription")}>{subDescription}</p>
        <button className={cl("button")}>
          {buttonText}
          <span>
            {buttonText !== "Download menu" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
