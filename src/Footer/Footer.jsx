import React from "react";
import s from "./Footer.module.css";
import logo from "./recording.png";
import recordingLogo3 from "../Header/recordingLogo3.png";

export const Footer = () => {
  return (
    <div className={s.footerContainer} id="contacts">
      <section className={s.top}>
        <div className={s.some}>Контакты</div>
        <div className={s.links}>
          <div className={s.linksColumn}>
            <h2>Контакты</h2>
            <div className={s.contactsContainer}>
              График работы: c 10-00 до 22-00
              <p></p>
              <a
                className={s.adressLink}
                href="https://yandex.by/maps/157/minsk/house/Zk4YcARiT0ECQFtpfXR1c35kbQ==/?ll=27.634240%2C53.843544&z=16.61"
              >
                Адрес: Селезневская, дом 4
              </a>
              <p>E-mail: dkryman@mail.ru</p>
              Тел.: +375 (29) 831-74-96
            </div>
          </div>
          {/* another links column */}
          <div className={s.linksColumn_socialsColumn}>
            <div>Мы в соц сетях:</div>

            <div className={s.socials}>
              <a className={s.faBrands_faInstagram} href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </a>
              {/* more social links */}
            </div>
          </div>
        </div>
      </section>
      <section className={s.bottom}>
        <p className={s.copyright}>© KrumanDM</p>
        <div className={s.legal}>{/* legal links */}</div>
      </section>
    </div>
  );
};
