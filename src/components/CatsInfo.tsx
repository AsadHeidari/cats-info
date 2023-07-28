import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// swiper styles.
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// custom hook.
import useFetch from "../hooks/useFetch";

function CatsInfo() {
  const cats = useFetch("https://api.thecatapi.com/v1/images/search?limit=10");

  return (
    <div className="h-3/5 w-[500px] mx-8 md:w-1/2 cat-info rounded-3xl p-8 shadow-md">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {cats.map((cat) => (
          <SwiperSlide>
            <img src={cat.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CatsInfo;
