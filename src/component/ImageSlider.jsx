import React from "react";
import './ImageSlider.css';

const ImageSlider = ({tool_images}) => {
  return(
    <div className="image-slider">
      <div className="slider-wrapper" style={{ width: `${tool_images.length * 220}px` }}>
        {tool_images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
        {tool_images.map((image, index) => (
          <div className="image-container" key={`copy-${index}`}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
        {tool_images.map((image, index) => (
          <div className="image-container" key={`copy-${index}`}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;