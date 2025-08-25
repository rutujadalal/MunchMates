


import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const BASE_URL = "http://localhost:5000/api/sliders";
  const BASE_UPLOADS = "http://localhost:5000/uploads/";

  // Fetch sliders from API
  const fetchSliders = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const fetchedImages = response.data.map(slider => BASE_UPLOADS + slider.image);
      setImages(fetchedImages);
    } catch (error) {
      console.error("Failed to fetch sliders:", error);
      // fallback to default images if fetch fails
      setImages([
        "https://static.wixstatic.com/media/623a24_ad26f6ba7a474830be3a88b985c86a8e~mv2.png/v1/fill/w_1920,h_757,al_c,q_90,enc_avif,quality_auto/623a24_ad26f6ba7a474830be3a88b985c86a8e~mv2.png",
        "https://static.wixstatic.com/media/7c969b_9c95cf348b17442ba77c6762aebc91cb~mv2.jpg/v1/fill/w_1901,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c969b_9c95cf348b17442ba77c6762aebc91cb~mv2.jpg",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop",
      ]);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [images]); // Important to restart timer when images are fetched

  if (images.length === 0) {
    return <div className="text-center py-20">Loading...</div>; // Loader while fetching
  }

  return (
    <section
      className="min-h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center text-center relative"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Great food makes good times even better
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white drop-shadow-md">
          Elevate your meals with premium private chefs near you.
        </p>
        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
