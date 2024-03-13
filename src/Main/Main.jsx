import React, {useState} from "react";
import s from "./Main.module.css";
import { SliderMain } from "./Slider/SliderMain";
import check from "./greenIcon.svg";
import { useMediaQuery } from "react-responsive";
import location4 from "./location4.png";
import phoneLogo3 from "./phoneLogo3.png";
import phoneCall from './phoneCall.svg';
import locationSvg from './locationSvg.svg'
import { Price1 } from "./Prices/Price1";

export const Main = () => {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className={s.mainContainer}>
      {isMobile ? (
        <div className={s.descriptionMobile}>
          <div className={s.description1Mobile}>Cтудия звукозаписи Минск</div>
          <div className={s.description2Mobile}>
          <img src={locationSvg} alt="location svg" width="30px" className={s.locationSvg}/>
            Ташкентская улица, 18/2
          </div>
          <div className={s.description2Mobile}>
          <img src={phoneCall} alt="phone call" width="30px" className={s.phoneCall}/>
            Тел.: +375 (29) 831-74-96
          </div>
        </div>
      ) : (
        <div className={s.description}>
          <div className={s.description1}>Cтудия звукозаписи Минск</div>
          <div className={s.description2}>
          <a className={s.adressLink} href="https://yandex.by/maps/157/minsk/house/Zk4YcARiT0ECQFtpfXR1c35kbQ==/?ll=27.634240%2C53.843544&z=16.61">
          <img src={locationSvg} alt="location svg" width="30px" className={s.locationSvg}/>
            Ташкентская улица, 18/2
            </a>
          </div>
          <div className={s.description2}>
          <img src={phoneCall} alt="phone call" width="30px" className={s.phoneCall}/>
            +375 (29) 831-74-96</div>
        </div>
      )}
      <SliderMain />
    
      

      <div id="prices" className={s.prices}>
        <div className={s.uslugi}>Услуги</div>
        <div className={s.mainRadiusContainer}>
        <div className={s.radiusContainer}>
          <div className={s.cardsContainer1}>
            <h2 className={s.mainName}>Элитный</h2>
            <h3 className={s.mainDescription}>
              <ul className={s.miniDescription}>
              <li>запись вокала до 2-х часов</li>
              <li>помощь во время записи</li>
              <li>коррекция фальшивых нот</li>
              <li>сведение вокала с минусом</li>
              </ul>
            </h3>
            <div className={s.price}>200 руб</div>
            <button className={s.buttonChoose} onClick={handleOpen}>Choose Plan</button>
            {open ? <Price1 handleClose={handleClose}/> : null}
          </div>
        </div>
        <div className={s.radiusContainer}>
          <div className={s.cardsContainer2}>
            <h2 className={s.mainName}>Обычный</h2>
            <h3 className={s.mainDescription}>
            <ul className={s.miniDescription}>
              <li>запись вокала до 2-х часов</li>
              <li>помощь во время записи</li>
              <li>коррекция фальшивых нот</li>
              <li>сведение вокала с минусом</li>
              </ul>
            </h3>
            <div className={s.price}>120 руб</div>
            <button className={s.buttonChoose}>Choose Plan</button>
          </div>
        </div>
        <div className={s.radiusContainer}>
          <div className={s.cardsContainer3}>
            <h2 className={s.mainName}>Продвинутый</h2>
            <h3 className={s.mainDescription}>
            <ul className={s.miniDescription}>
              <li>запись вокала до 2-х часов</li>
              <li>помощь во время записи</li>
              <li>коррекция фальшивых нот</li>
              <li>сведение вокала с минусом</li>
              </ul>
            </h3>
            <div className={s.price}>150 руб</div>
            <button className={s.buttonChoose}>Choose Plan</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
