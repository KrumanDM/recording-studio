import React from "react";
import s from "./Price.module.css";
import closeSvg from "./closeSidebar1.svg";

export const Price1 = ({handleClose}) => {
  return (
    <div className={s.priceContainer}>
      <button className={s.close} onClick={handleClose}>
        <img
          src={closeSvg}
          alt="close sidebar"
          id={"hw5-menu-close"}
        />
      </button>
      <div>Вернуться</div>
      <div>
        Счастливые часы с Пн-пт 07:00-10:00 - 1100р час записи При приобретении
        любой услуги Дистрибуция в подарок! Запись и выгрузка во всех форматах!
        Помощь при исполнении Минимальный заказ ночью это 3000р + 1500р на чай
        звукорежиссеру Бронь на ночь происходит до 23:00, ночь с 00:00 - 06:00
        Выгрузка записанного материала (от 0-3х дней)
      </div>
    </div>
  );
};
