// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function SwiperUtil({slides}) {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      //   loop={true}
      //   autoplay={{
      //     delay: 2000,
      //   }}

      className=" cursor-grab"
    >
      {slides.map((slide) => (
        <>
          <SwiperSlide>
            <Image
              src={slide.image}
              alt={slide.title}
              width={700}
              height={700}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-bold">{slide.title}</h3>
              <p className="mt-2">{slide.description}</p>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
