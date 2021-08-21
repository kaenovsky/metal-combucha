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
            <iframe src="https://open.spotify.com/embed-podcast/episode/1VHvzfglkgnN73bLvNJR2A"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/1Z7f6IVBIMDCt41c3fpLi7"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>    
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/07aSz2t4ndjsjvJAUMAeNC"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/5mNn2i4Bt6YKn9JVGSZXw8"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/06EldtQNA7dHs8k9ZdzG9S"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/2dDT6CU8ZFiFq3nEKzweDe"
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