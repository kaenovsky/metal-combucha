import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  var episodesIds = [
    "57uMLHgCu5TY9XgltKUggK",
    "2XzsuktXELPmxCCF4tjniw",
    "3bbYxUk7czx1nnywAUYkMt",
    "0LPZayZYdzmwo6VZxzK4tV",
    "2M3HEnbLd2ffZyVaFp8XLY",
    "7IY7t83GOAVtoeP7UsoRka",
  ];
  return (
    <Slider {...settings} className="slider-wrapper">
      {episodesIds.map(episodeId => {
        return (
          <div className="spotify-episodes">
            <iframe
              src={`https://open.spotify.com/embed-podcast/episode/${episodeId}`}
              title="episode"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        );
      })}
    </Slider>
  )
}
