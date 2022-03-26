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
    "7Fdx6U2vZ8qthPVGlczcej",
    "0qe44PTlahrWhYQO0ZNdlt",
    "32xgKH4ojANGLgqZNhuBdK",
    "1N5JKhrhiLyh6r6zEGP2CL",
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
