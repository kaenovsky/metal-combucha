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
            <iframe src="https://open.spotify.com/embed-podcast/episode/7a9b4krvO8kzXz42cJ6Yc6"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>  
        <div className='spotify-episodes'>
            <iframe src="https://open.spotify.com/embed-podcast/episode/4Q8padropmMrcpVzIHeXnq"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/1oawzIPIsjk7Bx8Gl9kLKN"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/5F2VLEkxtsLaDiAw93XAYK"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/21dhTj2wL0QWajzXcw3dBZ"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/6g0N8lJQqUYup6I0kNx3uB"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/40uE6ixSp7NP5GnxJJ2s1Y"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/7ew2TdPSiQ8lsDYcv1iT4m"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/1CYzY6vuEpj409sUvTo1wG"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/1TLafhvqJ4ODh0oq8Wmnb9"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/2JDhRJPGJPCFDbRNVuNBnC"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/4JZmJyFE5qjNWRUGCVdhVT"
                title="episode"
                height="232" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>
        </div>
        <div className='spotify-episodes'>
        <iframe src="https://open.spotify.com/embed-podcast/episode/3wUQwJuTIygGJIzFBAkEPe"
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