import React, { useEffect } from 'react'
import SliderContent from './SliderContent'
import imageSlider from './imageSlider'
import Arrows from './Arrows'
import Dots from './Dots'
import {useState} from 'react'
import "./slider.css"

const len=imageSlider.length -1

export default function Slider() {
    const [activeIndex,setActiveIndex] = useState(0);
    useEffect(()=> {const Interval =setInterval(() => 
        {setActiveIndex(activeIndex === len ? 0: activeIndex+1)
        }, 3000);
        return ()=>clearInterval(Interval);
    }, [activeIndex]);

  return (
    <div className="slider-container"> 
    <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
    <Arrows prevSlide={() => 
        setActiveIndex(activeIndex < 1 ? len: activeIndex -1)}
        nextSlide={() =>
        setActiveIndex(activeIndex === len ? 0 :activeIndex + 1)} />
    <Dots activeIndex={activeIndex} 
        imageSlider={imageSlider} 
        onclick={activeIndex =>setActiveIndex(activeIndex)}/> 
    </div>
  )
}