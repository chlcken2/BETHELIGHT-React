import React from "react";

import { Link } from "react-router-dom";
import logo_4 from "assets/img/logo/logo-4.png";
import firebase from "firebase.js";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { AiFillBulb } from "react-icons/ai";
import styles from "assets/css/header.module.scss";
function Header() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const onLogOutClick = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={styles.HeaderBlock}>
      <div className={styles.navbar_logo}>
        <Link to="/">
          <img src={logo_4} alt="" />
          <p>BE THE LIGHT</p>
        </Link>
      </div>

      <ul className={styles.navbar_menu}>
        <li id={styles.category}>
          <Link to="/about">About</Link>
        </li>
        <li id={styles.category}>
          <Link to="/product">Product</Link>
        </li>
        <li id={styles.category}>
          <Link to="/social">Social</Link>
        </li>

        <ul className={styles.navbar_icons}>
          <li>
            <Link to="/login">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: "transparent",
                border: "0px",
                display: "flex",
                onClick: "color:black",
              }}
              id="dropdown-basic"
            >
              <AiFillBulb />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/login">로그인</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={onLogOutClick}>로그아웃</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="">내정보</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      <Link to="#" className={styles.navbar_toggleBtn}>
        <i className="fas fa-bars"></i>
      </Link>
    </div>
  );
}

export default Header;
