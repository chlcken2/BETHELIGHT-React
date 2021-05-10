import React from "react";
import Fade from "react-reveal/Fade";
import styles from "assets/css/home.module.scss";
import imgA from "assets/img/africa/index_3.png";
import imgB from "assets/img/africa/index.jpg";

const Home = () => {
  return (
    <div className={styles.HomeBlock}>
      {/* <!-- main video begin  -->
    <!-- <section className="video_body">

        <video muted autoplay loop playsinline>
            <source src="video/main_video.mp4" type="video/mp4">
            <strong>Your browser does not support the video tag.</strong>
        </video>
    </section> --> */}
      <section>
        <div className={styles.main_img}>
          {/* <img src={require("../img/index_3.png")} alt="" /> */}
          {/* <img src={"../img/index_3.png"} alt="" /> */}
          <img src={imgA} alt="" />
        </div>
        <div className={styles.text_1}>
          <Fade top duration={700}>
            <h1>
              친환경 에너지와 ICT Solution으로 <br />
              아프리카의 삶을 밝혀 나가는 소셜벤처
            </h1>
          </Fade>
        </div>
        <div className={styles.hidden_image}>
          <img src={imgB} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
