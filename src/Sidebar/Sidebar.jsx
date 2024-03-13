import React, { useState } from "react";
import s from './Sidebar.module.css'
import closeSidebar from "./closeSidebar5.svg"



export const Sidebar = ({open, handleClose}) => {
  const [svgColor, setSvgColor] = useState("white");
  
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


    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}
            
            <aside className={sidebarClass}>
        

            <nav id={'hw5-menu'} className={s.nav}>
            <button className={s.close} onClick={handleClose}>
    <img
      src={closeSidebar}
      alt="close sidebar"
      fill={svgColor}
      id={'hw5-menu-close'}
    />
  </button>
  <button className={s.navLink} onClick={() => {
    handleClose();
    handlePricesClick();
  }}><a href="#services" className={s.link}>Услуги</a></button>
  <button className={s.navLink}><a href="#equipment" className={s.link}>Оборудование</a></button>
  <button className={s.navLink} onClick={() => {
    handleClose();
    handlePhotoClick();
  }}><a href="#photos" className={s.link}>Фото</a></button>
  <button className={s.navLink} onClick={() => {
    handleClose();
    handleContactsClick();
  }}><a href="#contacts" className={s.link}>Контакты</a></button>
  
</nav>
            </aside>
        </>
    )
}
