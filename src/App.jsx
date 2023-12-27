// Slider.js
import React, { useState } from "react";
 import './App.css'
import img1 from '../../../sheo_website/img/slide/1.png'
import img2 from '../../../sheo_website/img/slide/2.png'
import img3 from '../../../sheo_website/img/slide/3.png'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  const slides = [
    {
      image: img1,
      title: "Nike Metcon Shoes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta sit iure neque voluptate.",
    },
    {
      image: img2,
      title: "Nike Metcon Shoes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta sit iure neque voluptate.",
    },
    {
      image: img2,
      title: "Nike Metcon Shoes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta sit iure neque voluptate.",
    },
    // Add more slides with similar structure...
  ];

  return (
    <section className="home" id="home">
      {slides.map((slide, idx) => (
        <div key={idx} className={`slide-container ${idx === index ? "active" : ""}`}>
          <div className="slide">
            <div className="content">
              <span>Nike Sport Shoes</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <a href="#" className="btn">
                add to card
              </a>
            </div>
            <div className="image">
              <img src={slide.image} alt={`Shoe ${idx + 1}`} className="shoe" />
            </div>
          </div>
        </div>
      ))}
      <div id="prev" className="fa fa-angle-left flex items-center justify-center" onClick={prev}>
        <MdOutlineKeyboardArrowLeft className="text-8xl"/>
      </div>
      <div id="next" className="fa fa-angle-right flex items-center justify-center" onClick={next}>
        <MdOutlineKeyboardArrowRight className="text-8xl"/>
      </div>
    </section>
  );
};

export default Slider;
