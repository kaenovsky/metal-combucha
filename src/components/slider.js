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
            <iframe src="https://open.spotify.com/embed-podcast/episode/6tnYXxUCjsmTko9jT23Uf2"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/2hvksFjDePZj2LkOdGDqin"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/5eYUigLJ4zhJCkIQpi8fOa"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
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
      </Slider>
    );
  }