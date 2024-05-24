import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS base do Swiper

const SuggestedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/api/suggested-destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) =>
        console.error("Error fetching suggested destinations:", error)
      );
  }, []);

  return (
    <div className="suggested-destinations">
      <h2>Suggested Destinations</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <img src={hotel.png.image} alt={destination.name} />
            <div>{destination.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestedDestinations;
