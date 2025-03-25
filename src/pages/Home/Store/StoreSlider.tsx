import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import TShirtCard from "./TShirtCard";
import TShirt1 from "../../../assets/images/shop-skull.avif";
import TShirt2 from "../../../assets/images/shop-gorilla.avif";
import TShirt3 from "../../../assets/images/shop-sharks.avif";
import TShirt4 from "../../../assets/images/shop-fire.avif";
import TShirt5 from "../../../assets/images/shop-death.avif";
import TShirt6 from "../../../assets/images/shop-tour.avif";

function StoreSlider() {
  return (
    <article className="store__custom-slider" style={{ padding: "12px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination, A11y]}
      >
        <SwiperSlide>
          {/* Card 1 */}
          <TShirtCard title="Perennial" price={21.99} img={TShirt1} />
        </SwiperSlide>
        <SwiperSlide>
          {/* Card 2 */}
          <TShirtCard title="Ape" price={18.69} img={TShirt2} />
        </SwiperSlide>
        <SwiperSlide>
          {/* Card 3 */}
          <TShirtCard title="Pisces" price={24.79} img={TShirt3} />
        </SwiperSlide>
        <SwiperSlide>
          {/* Card 4 */}
          <TShirtCard title="Noha" price={23.95} img={TShirt4} />
        </SwiperSlide>
        <SwiperSlide>
          {/* Card 5 */}
          <TShirtCard title="True Believer" price={23.95} img={TShirt5} />
        </SwiperSlide>
        <SwiperSlide>
          {/* Card 6 */}
          <TShirtCard title="Cloud Factory" price={19.99} img={TShirt6} />
        </SwiperSlide>
      </Swiper>
    </article>
  );
}

export default StoreSlider;
