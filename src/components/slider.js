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
            <iframe src="https://open.spotify.com/embed-podcast/episode/4dl5a1hIr25wSKpaTIV2i1"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/4bvB4GR4EtpDSBeU24qMf5"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/2LXdOAC823XlJYNyBloE2N"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/1VbSom5tV0DPwQvX6t6oS6"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/5dAR0cKiYqr0030eqBMX4c"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/0mKLC3id4PvryMSiyOoj6G"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/0NNL3gGzUEko7S8gL192IM"
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