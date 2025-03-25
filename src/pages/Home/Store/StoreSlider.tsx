import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import TShirtCard from "./TShirtCard";
import TShirt1 from "../../../assets/images/shop-skull.png";
import TShirt2 from "../../../assets/images/shop-gorilla.png";
import TShirt3 from "../../../assets/images/shop-sharks.png";
import TShirt4 from "../../../assets/images/shop-fire.png";
import TShirt5 from "../../../assets/images/shop-death.png";
import TShirt6 from "../../../assets/images/shop-tour.png";

function StoreSlider() {
  return (
    <article style={{ padding: "12px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[A11y]}
      >
        <SwiperSlide>
          <div>
            {/* Card 1 */}
            <TShirtCard title="Perennial" price={21.99} img={TShirt1} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            {/* Card 2 */}
            <TShirtCard title="Ape" price={18.69} img={TShirt2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Card 3 */}
            <TShirtCard title="Pisces" price={24.79} img={TShirt3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Card 4 */}
            <TShirtCard title="Noha" price={23.95} img={TShirt4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Card 5 */}
            <TShirtCard title="True Believer" price={23.95} img={TShirt5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Card 6 */}
            <TShirtCard title="Cloud Factory" price={19.99} img={TShirt6} />
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
}

export default StoreSlider;
