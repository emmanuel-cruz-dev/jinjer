import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import TShirtCard from "./TShirtCard";
import { shopProductsList } from "../../../data/shopProducts";

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
        {shopProductsList.slice(0, 8).map((product) => (
          <SwiperSlide>
            <TShirtCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default StoreSlider;
