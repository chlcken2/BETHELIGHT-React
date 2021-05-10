import React from "react";
import Fade from "react-reveal/Fade";
import styles from "assets/css/product.module.scss";
import color_1 from "assets/img/product/color_1.png";
import color_2 from "assets/img/product/color_2.png";
import color_3 from "assets/img/product/color_3.png";
import color_4 from "assets/img/product/color_4.png";
import product_0 from "assets/img/product/product-0.png";
import product_6 from "assets/img/product/product-6.png";

function Product() {
  return (
    <div className={styles.ProductBlock}>
      <div id={styles.wrapper}>
        {/* <section className={styles.section_1}>
          <div className={styles.item}>
            <Fade bottom cascade>
              <div className={styles.intro_1}>
                <ul>
                  <li id={styles.text_1}>자바라이트</li> <br />
                  <br />
                  <li id={styles.text_2}>
                    언제 어디서든 태양만 있다면 쉽게 충전할 수 있으며
                    <br />
                    어두운 밤을 밝게 비출 수 있는 조명으로 활용하거나 <br />
                    휴대폰 등 전자기기에 전원을 공급할 수도 있습니다.
                    <br />
                    <br />
                  </li>
                  <li id={styles.text_3}>29,000KRW</li>
                  <br />
                  <button>
                    <Link to="">판매 준비 중</Link>
                  </button>
                </ul>
                <Slidebar />
              </div>
            </Fade>
            <div className={styles.section1}></div>
          </div>
        </section> */}

        <section className={styles.section_2}>
          <div className={styles.infor_1}>
            <Fade left cascade>
              <h2>Color</h2>
            </Fade>
            <Fade bottom cascade>
              <ul>
                <div className={styles.white}>
                  <li>Black</li>
                  <li>
                    <img src={color_1} alt="" />
                  </li>
                </div>
                <div className={styles.white}>
                  <li>White</li>
                  <li>
                    <img src={color_2} alt="" />
                  </li>
                </div>
                <div className={styles.white}>
                  <li>Space Gray</li>
                  <li>
                    <img src={color_3} alt="" />
                  </li>
                </div>
                <div className={styles.white}>
                  <li>Woody</li>
                  <li>
                    <img src={color_4} alt="" />
                  </li>
                </div>
              </ul>
            </Fade>
          </div>
          <hr />
          <div className={styles.infor_2}>
            <Fade left cascade>
              <h2>Size & Weight</h2>
            </Fade>
            <Fade bottom cascade>
              <div className={styles.box_item}>
                <img src={product_0} alt="" />
                <img src={product_6} alt="" />
                <ul>
                  <li id={styles.size}>크기</li> <br />
                  <li>
                    자바라물통의 모양으로 만들어져 <br /> 위로 펼치거나
                    대각선으로 각도를 조절할 수 있고 <br /> 자유자재로 변형이
                    가능합니다. <br />
                    (접었을 때 4cm, 폈을 때 15cm)
                  </li>
                  <br />
                  <li id={styles.size}>무게</li> <br />
                  <li> 500g 내외</li>
                </ul>
              </div>
            </Fade>
          </div>
          <hr />
          <div className={styles.infor_3}>
            <Fade left cascade>
              <h2>Product Specifications</h2>
            </Fade>
            <ul>
              <Fade right cascade duration={1000}>
                <li>태양전지: 효율 약 18%, 6V 340mA</li>
                <li>
                  태양광 1시간 충전 시 조명 약 10시간 사용 가능(최저전력모드
                  기준)
                </li>
                <li>
                  태양광 4시간 충전 시 휴대폰 약 80% 충전 가능(아이폰 SE2 기준)
                </li>
                <li>입력: USB-C 포트, 출력: USB-A 포트</li>
                <li>방수: IP 67</li>
              </Fade>
            </ul>
          </div>
          <hr />
          <div className={styles.infor_4}>
            <Fade left cascade>
              <h2>Components</h2>
            </Fade>
            <ul>
              <Fade right cascade duration={1000}>
                <li>자바라이트 본체</li>
                <li>USB-C 충전 케이블</li>
                <li>사용 설명서</li>
              </Fade>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
