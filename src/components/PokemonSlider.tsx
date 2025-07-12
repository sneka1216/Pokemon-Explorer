"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PokemonSlider({ sprites }: { sprites: any }) {
  const spriteImages = [
    sprites.front_default,
    sprites.back_default,
    sprites.front_shiny,
    sprites.back_shiny,
  ].filter(Boolean);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-slate-200 p-4 rounded h-64 flex items-center justify-center">
      <Slider {...settings} className="w-44">
        {spriteImages.map((img: string, index: number) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt={`sprite-${index}`}
              className="w-40 h-40 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
