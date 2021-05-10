import React from "react";
import Fade from "react-reveal/Fade";
import styles from "assets/css/social.module.scss";
import mission from "assets/img/pictogram/mission.png";
import park from "assets/img/pictogram/park.png";
import study from "assets/img/pictogram/study.png";
import syringe from "assets/img/pictogram/syringe.png";

function Social(props) {
  return (
    <div className={styles.SocialBlock}>
      <div id={styles.wrapper}>
        <Fade bottom cascade>
          <section className={styles.section_1}>
            <Fade top>
              <h1>Social Impact</h1>
            </Fade>
            <div className={styles.social}>
              <div className={styles.box_1}>
                <div className={styles.item_1}>
                  <ul>
                    <li>
                      <img src={mission} alt="" />
                    </li>
                    <li>
                      <h3>빈곤 해결</h3>
                    </li>
                    <li>
                      <p>
                        태양광 휴대용 조명 제품을 통해 <br />
                        비효율적인 등유램프를 대체하여 <br />
                        가정의 경제적 손실을 줄입니다.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.item_2}>
                  <ul>
                    <li>
                      <img src={study} alt="" />
                    </li>
                    <li>
                      <h3>교육 보장</h3>
                    </li>
                    <li>
                      <p>
                        야간에도 조도에 제약을 받지 않고 <br />
                        누구든지 쉽게 학업이 가능하도록
                        <br />
                        밝고 안전한 교육 환경을 만듭니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.box_2}>
                <div className={styles.item_3}>
                  <ul>
                    <li>
                      <img src={syringe} alt="" />
                    </li>
                    <li>
                      <h3>질병 예방</h3>
                    </li>
                    <li>
                      <p>
                        자외선으로 인해 발생하는 질병 <br />
                        (백내장, 피부암)을 예방하는 등 <br />
                        열악한 위생 환경을 개선합니다
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.item_4}>
                  <ul>
                    <li>
                      <img src={park} alt="" />
                    </li>
                    <li>
                      <h3>환경 보호</h3>
                    </li>
                    <li>
                      <p>
                        지속가능한 에너지를 사용하여 <br />
                        이산화탄소의 배출을 줄임으로 <br />
                        지구온난화 해결에 일조합니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
}

export default Social;
