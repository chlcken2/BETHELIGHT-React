import React from "react";
import Slide from "react-reveal/Slide";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import styles from "assets/css/about.module.scss";
import target from "assets/img/pictogram/target.png";
import mission from "assets/img/pictogram/mission.png";
import logo from "assets/img/logo/logo-4.png";
import africa_1 from "assets/img/africa/africa-1.jpg";
import africa_2 from "assets/img/africa/africa-2.jpg";
import africa_3 from "assets/img/africa/africa-3.jpg";
import africa_4 from "assets/img/africa/africa-4.jpg";

function About(props) {
  return (
    <div className={styles.AboutBlock}>
      <section className={styles.section_2}>
        <ul className={styles.who}>
          <a href="https://www.notion.so/BeTheLight-Crews-438078392d6e4fa8983df201c50c58eb">
            <Flash duration={1000}>
              <img src={logo} alt="" />
            </Flash>
          </a>

          <h1>WHO WE ARE?</h1>
          <p>
            친환경 에너지와 ICT 기반 기술을 통해 <br />
            빈곤, 질병, 에너지고갈 등 <br />
            사회적 문제를 해결하는 소셜벤처입니다.
          </p>
        </ul>
        <ul className={styles.goal}>
          <div className={styles.vision}>
            <img src={mission} alt="" />
            <h1>Vision</h1>
            <p>
              기술을 통해 아프리카의 열악한 생활을 혁신하여
              <br /> 절대빈곤층의 문제를 해결하며
              <br />
              경제적 자립을 지원합니다.
            </p>
          </div>

          <div className={styles.mission}>
            <img src={target} alt="" />
            <h1>Mission</h1>
            <p>
              실생활에서 사용할 수 있으며 <br />더 나은 삶을 영위할 수 있도록
              <br /> 아이디어 제품과 서비스를 제공합니다.
            </p>
          </div>
        </ul>
      </section>

      <section className={styles.section_3}>
        <Slide left duration={2000}>
          <div className={styles.content_1}>
            <div className={styles.content1_box1}>
              <img src={africa_3} alt="" />
              <img src={africa_4} alt="" />
            </div>

            <div className={styles.content1_box2}>
              <ul>
                <li>
                  <span id={styles.bold}>
                    <strong>약 6억명</strong>
                  </span>
                </li>
                <li>
                  <span id={styles.assist}>
                    아프리카 지역 내 전기 없는 생활 (세계에너지전망, 2020)
                  </span>
                </li>
                <br />
                <li>
                  아프리카 국민​들은 대부분 등유램프, 양초와 같은
                  <br /> 비경제적이고 위험한 광원에 의존하고 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide right duration={2000}>
          <div className={styles.content_2}>
            <div className={styles.content2_box1}>
              <img src={africa_1} alt="" />
              <img src={africa_2} alt="" />
            </div>
            <div className={styles.content2_box2}>
              <ul>
                <li>
                  <span id={styles.bold}>
                    <strong>약 2억 5천만명</strong>
                  </span>
                </li>
                <li>
                  <span id={styles.assist}>
                    자외선으로 인한 실명률 최다(IABP, 2021)
                  </span>
                </li>
                <br />
                <li>
                  전 세계 시각장애인의 90%가 아프리카인이며 <br /> 지구온난화
                  가속화로 인한 자외선 증가로
                  <br />일 분에 한 명의 아이가 시력을 잃습니다.
                </li>
              </ul>
            </div>
          </div>
        </Slide>
      </section>

      <section className={styles.section_1}>
        <Fade bottom cascade>
          <div className={styles.main_title}>
            <p>
              <strong>Be The Light, </strong>
              <strong>D​o The Right</strong>
            </p>
            <div className={styles.main_text}>
              <p>
                We believe it is right for people
                <br /> in absolute poverty to ensure <br />a better quality of
                life.
              </p>
            </div>
          </div>{" "}
        </Fade>
      </section>
    </div>
  );
}

export default About;
