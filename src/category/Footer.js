import React from "react";
import styles from "assets/css/footer.module.scss";
import logo_2 from "assets/img/logo/logo-2.png";

function Footer() {
  return (
    <div className={styles.FooterBlock}>
      <div className={styles.row_logo}>
        <img src={logo_2} alt="" />
      </div>

      <ul className={styles.row_right}>
        <li>
          <p>대표: 김진수 </p>
        </li>
        <li>
          <p>TEL: 010-2275-0664</p>
        </li>
        <li>
          <p>e-mail: light@bethelight.com</p>
        </li>
        <li>
          <p>
            <i className="far fa-copyright"></i>2021.BeTheLight.ALL rights
            reserved. &nbsp;<i className="fas fa-lock"></i>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
