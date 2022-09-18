import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import "./responsive.scss";
import "./transStyle.scss";
import "./darkMode.scss";
import "./style.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ handleFullScreen }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();
  const handleLogout = () => {
    //clear the user
  };

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const menuRef = useRef();
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    menuRef.current.classList.toggle("open");
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.documentElement.dir = "ltr";
      return;
    }
    document.body.classList.remove("rtl");
    document.body.classList.add("ltr");
    document.documentElement.dir = "rtl";
  }, [i18n.language]);

  useEffect(() => {
    darkTheme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

    openMenu && menuRef.current.classList.toggle("open");
  }, [darkTheme, setDarkTheme]);

  const languageMenu = [
    { text: "اللغه العربيه", icon: "./dz.svg", key: "ar" },
    { text: "English", icon: "./us.svg", key: "en" },
    { text: "Français", icon: "./fr.svg", key: "fr" },
  ];
  return (
    <header
      className={`dashboard-header position-sticky top-0 bg-white d-flex align-items-center justify-content-between ${
        darkTheme && "dark"
      }`}
    >
      <BsThreeDots
        className="mobile-toggle d-none mx-4"
        size={20}
        onClick={handleOpenMenu}
      />

      <ul
        className={`dashboard-header__left bg-white d-flex gap-4 align-items-center ${
          darkTheme && "dark"
        }`}
        ref={menuRef}
      >
        <li>
          <Button className="logout-btn" onClick={handleLogout}>
            {t("logout")}
            <MdLogout
              size={18}
              className="dashboard-header__icon ms-2"
              color={darkTheme ? "#fff" : ""}
            />
          </Button>
        </li>
        <li className="p-2 rounded" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <FaLightbulb size={17} className="dashboard-header__icon" />
          ) : (
            <BsMoon size={17} className="dashboard-header__icon" />
          )}
        </li>
        <li className="lang p-2 rounded position-relative">
          <MdOutlineLanguage
            size={18}
            className="dashboard-header__icon"
            color={darkTheme ? "#fff" : ""}
          />
          <ul className="bg-white text-primary ps-0 position-absolute left-50">
            {languageMenu.map((li) => (
              <li
                className={`fw-bold d-flex align-items-center flex-row-reverse ${
                  darkTheme && "bg-dark"
                } `}
                key={li.key}
                onClick={() => i18n.changeLanguage(li.key)}
              >
                <div>
                  <div
                    className="lang-icon"
                    style={{ backgroundImage: `url(${li.icon})` }}
                  />
                </div>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>
        </li>

        <li className="p-2 rounded msg position-relative">
          <FiMessageSquare size={17} className="dashboard-header__icon" />
          <ul className="bg-white text-primary ps-0 position-absolute left-50">
            <li
              className={`fw-bold d-flex align-items-center justify-content-center ${
                darkTheme && "bg-dark"
              } `}
            >
              مشاهده جميع الرسائل
            </li>
          </ul>
        </li>

        <li
          className="p-2 rounded"
          onClick={
            handleFullScreen.active
              ? handleFullScreen.exit
              : handleFullScreen.enter
          }
        >
          <BiFullscreen size={17} className="dashboard-header__icon" />
        </li>
      </ul>

      <div
        className={`dashboard-header__right d-flex align-items-center p-3 ${
          darkTheme ? "dark" : "bg-primary"
        }`}
      >
        <div className="toggle-menu p-2 bg-white rounded-2">
          <HiOutlineMenuAlt1 color="#169b88" fontSize={20} />
        </div>
        <img src="./ehlquran_white.png" alt="logo" className="img-fluid ms-2" />
      </div>
    </header>
  );
};

export default Header;
