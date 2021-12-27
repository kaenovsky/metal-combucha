import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className='slider-wrapper'>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/7IY7t83GOAVtoeP7UsoRka"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/13L9HxIt0FX1jggUsv7W1f"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/09TweJRu6oqk11PHIIILH7"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/4PNw6JKOwcTeLL1e7vhMtk"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>  
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/5B0Mt5u0s5leywS0zUGBzJ"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/5MW5PQapoz526nGdH59qfR"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>                                            
      </Slider>
    );
  }