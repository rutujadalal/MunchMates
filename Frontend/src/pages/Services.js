// import React, { useState } from "react";
// import corporateEvent from "../assests/corporate-event.jpg";
// import wedding from "../assests/wedding.jpg";
// import housewarmin from "../assests/housewarming.jpg";
// import birthday from "../assests/birthday.jpg";

// // All services
// const allServices = [
//   {
//     title: "Corporate Events",
//     description: "Professional decoration tailored for business gatherings, product launches, and corporate parties.",
//     image: corporateEvent,
//     category: "Corporate Events",
//   },
//   {
//     title: "Weddings",
//     description: "Elegant and dreamy wedding decorations to make your special day unforgettable.",
//     image: wedding,
//     category: "Weddings & Engagements",
//   },
//   {
//     title: "Housewarming",
//     description: "Warm and welcoming decorations to celebrate new beginnings in style.",
//     image: housewarmin,
//     category: "Housewarming Parties",
//   },
//   {
//     title: "Birthday Parties",
//     description: "Fun, colorful, and customized birthday decor for all ages and themes.",
//     image: birthday,
//     category: "Birthday Celebrations",
//   },
//   {
//     title: "Baby Showers",
//     description: "Adorable and thematic decorations to welcome the little one.",
//     image: birthday,
//     category: "Baby Showers",
//   },
//   {
//     title: "Festivals",
//     description: "Festive-themed decorations for all your seasonal and cultural events.",
//     image: wedding,
//     category: "Festivals",
//   },
//   {
//     title: "Weekend & Private Parties",
//     description: "Stylish and cozy decorations for your personal gatherings.",
//     image: housewarmin,
//     category: "Weekend & Private Parties",
//   },
// ];

// // Filter options
// const filters = [
//   "All",
//   "Corporate Events",
//   "Weddings & Engagements",
//   "Birthday Celebrations",
//   "Festivals",
//   "Housewarming Parties",
//   "Baby Showers",
//   "Weekend & Private Parties",
// ];

// const Services = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const filteredServices =
//     selectedFilter === "All"
//       ? allServices
//       : allServices.filter((s) => s.category === selectedFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-purple-50 pt-24 px-4 py-10 md:px-12 lg:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-8 font-fancy tracking-wide">
//         Our Decoration Services
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-wrap justify-center gap-2 mb-10">
//         {filters.map((filter, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedFilter(filter)}
//             className={`px-3 py-1 text-sm rounded-full font-medium border transition ${
//               selectedFilter === filter
//                 ? "bg-fuchsia-600 text-white border-fuchsia-700"
//                 : "bg-white text-fuchsia-700 border-fuchsia-300 hover:bg-fuchsia-100"
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Services Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredServices.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 cursor-pointer hover:shadow-pink-300 flex flex-col h-[300px]"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-32 object-cover"
//             />
//             <div className="p-3 flex flex-col justify-between flex-grow">
//               <div>
//                 <h3 className="text-md font-semibold text-pink-700 font-fancy mb-2 border-b border-rose-300 inline-block pb-1 hover:text-fuchsia-700 transition">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 hover:text-gray-900 transition duration-300 font-medium leading-snug">
//                   {service.description}
//                 </p>
//               </div>
//               <div className="flex justify-between mt-4">
//                 <button className="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded hover:bg-fuchsia-600 transition">
//                   Enquiry
//                 </button>
//                 <button className="text-sm border border-fuchsia-500 text-fuchsia-600 px-3 py-1 rounded hover:bg-fuchsia-100 transition">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from "react";
import axios from "axios";

const CARD_BASE_URL = "http://localhost:5000/api/service-cards";
const IMAGE_BASE_URL = "http://localhost:5000/uploads/";
const CATEGORY_BASE_URL = "http://localhost:5000/api/service-categories";

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filters, setFilters] = useState(["All"]);

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter((s) => s.categories.includes(selectedFilter))
      );
    }
  }, [selectedFilter, services]);

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${CARD_BASE_URL}/getAll`);
      setServices(res.data.reverse());
    } catch (err) {
      console.error("Failed to fetch services", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${CATEGORY_BASE_URL}/getAll`);
      const categoryNames = res.data.map((c) => c.name);
      setFilters(["All", ...categoryNames]);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-purple-50 pt-24 px-4 py-10 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-8 font-fancy tracking-wide">
        Our Decoration Services
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1 text-sm rounded-full font-medium border transition ${
              selectedFilter === filter
                ? "bg-fuchsia-600 text-white border-fuchsia-700"
                : "bg-white text-fuchsia-700 border-fuchsia-300 hover:bg-fuchsia-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 cursor-pointer hover:shadow-pink-300 flex flex-col h-[300px]"
          >
            <img
              src={`${IMAGE_BASE_URL}${service.image_url}`}
              alt={service.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-md font-semibold text-pink-700 font-fancy mb-2 border-b border-rose-300 inline-block pb-1 hover:text-fuchsia-700 transition">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 hover:text-gray-900 transition duration-300 font-medium leading-snug">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded hover:bg-fuchsia-600 transition">
                  Enquiry
                </button>
                <button className="text-sm border border-fuchsia-500 text-fuchsia-600 px-3 py-1 rounded hover:bg-fuchsia-100 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
