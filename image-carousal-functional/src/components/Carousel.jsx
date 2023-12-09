import React, { useEffect, useLayoutEffect, useState } from "react";
import { images } from "../data/CarouselData";
import "./Carousel.css";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleBackward = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleForward = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container">
      <div className="image" key={imageIndex}>
        <img src={images[imageIndex].img} alt="" />
        <h1>{images[imageIndex].title}</h1>
        <p className="title">{images[imageIndex].subtitle}</p>
      </div>
      <div className="arrow arrow-back" onClick={handleBackward}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </div>
      <div className="arrow arrow-forward">
        <ArrowForwardIosIcon sx={{ color: "white" }} onClick={handleForward} />
      </div>
    </div>
  );
}

export default Carousel;
