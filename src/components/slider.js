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
            <iframe src="https://open.spotify.com/embed-podcast/episode/0XIsc2UbDx9YWpr63LZokQ"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/3OuAVieDgYazljtghiMgm9"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>  
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/4GzLtj0GkXsC2GdQBfkvIB"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>  
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/09cTycI6T9PoVNQAVcDBml"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div> 
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/2tfKiFA2yXoFGcfnRX38HM"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div> 
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/7hn3y9wIuR1ykqglvGUPlS"
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