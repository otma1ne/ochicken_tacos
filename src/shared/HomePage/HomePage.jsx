import React from "react";
import styles from "./Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/images/slide_1.jpg";
import slide2 from "../../assets/images/slide_2.jpg";
import pizza2 from "../../assets/images/pizza_2.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function HomePage() {
  return (
    <div className={styles.home} id="home">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className={styles.slideContent}>
            <img
              className={styles.backgroundImage}
              src={slide1}
              alt="Background"
            />
            <div className={styles.overlay}>
              <div className={styles.contentWrapper}>
                <h1 className={styles.title}>Pizza Margherita</h1>
                <div className={styles.ligne}></div>

                <div className={styles.seconde_title}>
                  1 pizza achetée <span> 2ème à 5€ A emporter !!</span>{" "}
                </div>
              </div>
              <div className={styles.images}>
                <img className={styles.pizza_image} src={pizza2} alt="Pizza" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContent_two}>
            <img
              className={styles.backgroundImage_two}
              src={slide2}
              alt="Background"
            />
            <div className={styles.overlay_two}>
              <div className={styles.contentWrapper_two}>
                <h1 className={styles.title}>Pizza Margarita</h1>
                <div className={styles.seconde_title}>Making people happy </div>
                <div className={styles.three_title}>
                  Pizza With Cherry Tomatoes and Green Basil{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage;
