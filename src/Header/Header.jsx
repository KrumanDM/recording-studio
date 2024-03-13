import React from "react";
import s from "./Header.module.css";
import logo from "./recording.png";
import recordingLogo3 from "./recordingLogo3.png"
import { useMediaQuery } from "react-responsive";

export const Header = ({ handleOpen }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const handlePhotoClick = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePricesClick = () => {
    const slider = document.getElementById("prices");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactsClick = () => {
    const slider = document.getElementById("contacts");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={s.headerContainer}>
     
      <div className={s.iconContainer}>
        <a className={s.icon} href="#">
          <img src={recordingLogo3} width="45px" alt="#" />
        </a>
        <div className={s.descriptionLogo}>
        <div className={s.slashMusic1}>SLASH MUSIC</div>
        
        </div>
      </div>
      

      {isMobile ? (
        <img
          src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
          id={"hw5-burger-menu"}
          className={s.burgerMenuIcon}
          onClick={handleOpen}
          alt={"open menu"}
        />
      ) : (
        <div className={s.navigationContainer}>
          <li>
            <a href="#" className={s.navigationLink} onClick={handlePricesClick}>
              Услуги
            </a>
          </li>
          <li>
            <a href="#" className={s.navigationLink}>
              Оборудование
            </a>
          </li>
          <li>
            <a href="#" className={s.navigationLink} onClick={handlePhotoClick}>
              Фото
            </a>
          </li>
          {/* <li>
            <a href="#" className={s.navigationLink}>
              Отзывы
            </a>
          </li> */}
          <li>
            <a href="#" className={s.navigationLink} onClick={handleContactsClick}>
              Контакты
            </a>
          </li>
        </div>
      )}
    </div>
  );
};
