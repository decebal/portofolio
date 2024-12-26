"use client";

import type React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div className="embla__slide" key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EmblaCarousel };
