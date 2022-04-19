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
    "0BUKFImoqhAZRkqbJ9Rmdf",
    "6oKivQRgR7h6ktUua80Fnx",
    "3xhzCLR7tv133LGqjVUq0a",
    "22KfDD72Jx1T47EwgIg1vM",
  ];
  return (
    <Slider {...settings} className="slider-wrapper">
      {episodesIds.map(episodeId => {
        return (
          <div className="spotify-episodes">
            <iframe
              src={`https://open.spotify.com/embed-podcast/episode/${episodeId}?utm_source=generator`}
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
