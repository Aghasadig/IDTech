import React, { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const currentImageUrl = images[current];

  const prev = () => setCurrent((prev) => prev === 0 ? images.length-1 : prev - 1 );
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="slider-container">
      <div className="arrow arrow-prev" onClick={prev}>
        <IoIosArrowBack />
      </div>
      <div className="slider">
        <div className="slider-inner">
          <img src={currentImageUrl} width="300px" height="300px" />
        </div>
      </div>
      <div className="arrow arrow-next" onClick={next}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Slider;
