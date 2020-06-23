import React, { useState, useEffect } from "react";
import "./style.css";
import Imagen from "../img/habitació_Ejecutiva.jpg";
import Imagen1 from "../img/habitación_básica.jpg";
import Imagen2 from "../img/habitación_presidencial.jpg";

const Slide = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 1000);

    return () => clearInterval(tick);
  }, [activeIndex, images.length]);

  return (
    <div className="Slide">
      <div className="Slide_Container">
        {images.map((image, index) => (
          <img
            src={image.src}
            key={image.src}
            alt={image.tittle}
            className={
              index === activeIndex
                ? "Slide_Container_Img animaShow"
                : "Slide_Container_Img animahide"
            }
          />
        ))}
        <div className="Slide_Container_tittle">
          {images[activeIndex].tittle}
        </div>
      </div>
    </div>
  );
};

Slide.defaultProps = {
  images: [
    {
      src: Imagen,
      tittle: "Habitacion Basica",
    },
    {
      src: Imagen1,
      tittle: "Habitacion ejecutiva",
    },
    {
      src: Imagen2,
      tittle: "Habitacion Presidencial",
    },
  ],
};

export default Slide;
