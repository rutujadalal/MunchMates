

// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantities, setQuantities] = useState({});

//   const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/menu/");
//         if (!response.ok) throw new Error("Failed to fetch menu data");
//         const data = await response.json();
//         setMenuData(data);

//         // Initialize quantity state
//         const initialQuantities = {};
//         data.forEach((item) => {
//           initialQuantities[item.id] = 1;
//         });
//         setQuantities(initialQuantities);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   const handleQuantityChange = (id, delta) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[id] || 1) + delta);
//       return { ...prev, [id]: newQty };
//     });
//   };

  

//   return (
//     <div className="min-h-screen bg-white py-16 px-6">
//       <div className="container mx-auto text-center pt-10">
//         <h2 className="text-[#f5af00] text-sm uppercase tracking-widest font-medium">
//           Explore Our Offerings
//         </h2>
//         <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-[#1e293b]">
//           Our Menu
//         </h1>
//         <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//           Discover a variety of culinary delights tailored for every occasion, crafted with care and precision.
//         </p>
//       </div>

//       {loading ? (
//         <div className="text-center mt-10 text-lg text-gray-600">Loading...</div>
//       ) : (
//         <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {menuData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               <img
//                 src={item.image ? `${IMAGE_BASE_URL}${item.image}` : "https://via.placeholder.com/300"}
//                 alt={item.title}
//                 className="w-full h-56 object-cover rounded-t-xl"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-[#1e293b]">{item.title}</h2>
//                 <p className="text-gray-500 mt-2 text-sm">{item.description}</p>

//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       className="w-8 h-8 text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300 transition"
//                     >
//                       -
//                     </button>
//                     <span className="text-md font-medium">{quantities[item.id] || 1}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       className="w-8 h-8 text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300 transition"
//                     >
//                       +
//                     </button>
//                   </div>

//                   {/* Show price per plate */}
//                   <p className="text-[#1e293b] font-bold text-md">
//                     ₹{item.price} 
//                   </p>
//                 </div>

//                 <div className="mt-6">
//                   {/* Display total price based on quantity */}
//                   <p className="text-[#1e293b] font-semibold text-lg">
//                     Total: ₹{item.price * (quantities[item.id] || 1)}
//                   </p>
//                 </div>

//                 <div className="mt-6">
//                   <button
//                     className="w-full bg-[#f5af00] text-white font-semibold py-3 rounded-full shadow-lg hover:bg-[#e59c00] transition duration-300 ease-in-out transform hover:scale-105"
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

     
//     </div>
//   );
// };

// export default Menu;






// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantities, setQuantities] = useState({});

//   const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/menu/");
//         if (!response.ok) throw new Error("Failed to fetch menu data");
//         const data = await response.json();
//         setMenuData(data);

//         const initialQuantities = {};
//         data.forEach((item) => {
//           initialQuantities[item.id] = 1;
//         });
//         setQuantities(initialQuantities);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   const handleQuantityChange = (id, delta) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[id] || 1) + delta);
//       return { ...prev, [id]: newQty };
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-purple-50 py-12 px-4">
//       <div className="container mx-auto text-center pt-8">
//         <h2 className="text-fuchsia-600 text-xs uppercase tracking-widest font-medium">
//           Explore Our Offerings
//         </h2>
//         <h1 className="text-3xl sm:text-4xl font-bold mt-1 text-pink-700">
//           Our Menu
//         </h1>
//         <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Discover a variety of culinary delights crafted with care and precision.
//         </p>
//       </div>

//       {loading ? (
//         <div className="text-center mt-8 text-base text-gray-600">Loading...</div>
//       ) : (
//         <div className="container mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {menuData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md hover:shadow-pink-300 transition-transform transform hover:scale-105 duration-300 border border-rose-200 flex flex-col"
//             >
//               <img
//                 src={item.image ? `${IMAGE_BASE_URL}${item.image}` : "https://via.placeholder.com/300"}
//                 alt={item.title}
//                 className="w-full h-32 object-cover rounded-t-lg"
//               />
//               <div className="p-3 flex flex-col flex-grow">
//                 <div>
//                   <h2 className="text-lg font-semibold text-pink-700 truncate">{item.title}</h2>
//                   <p className="text-gray-500 mt-1 text-xs leading-snug line-clamp-2">{item.description}</p>
//                 </div>

//                 <div className="mt-3 flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
//                     >
//                       -
//                     </button>
//                     <span className="text-sm font-medium">{quantities[item.id] || 1}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <p className="text-pink-700 font-bold text-sm">
//                     ₹{item.price}
//                   </p>
//                 </div>

//                 <div className="mt-3">
//                   <p className="text-fuchsia-700 font-semibold text-sm">
//                     Total: ₹{item.price * (quantities[item.id] || 1)}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   {/* <button
//                     className="w-full bg-fuchsia-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-fuchsia-700 transition duration-300 ease-in-out transform hover:scale-105"
//                   >
//                     Order Now
//                   </button> */}
//                   <button class="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded hover:bg-fuchsia-600 transition">Order Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;



// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantities, setQuantities] = useState({});
//   const [filter, setFilter] = useState("All"); // new filter state

//   const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/menu/");
//         if (!response.ok) throw new Error("Failed to fetch menu data");
//         const data = await response.json();
//         setMenuData(data);

//         const initialQuantities = {};
//         data.forEach((item) => {
//           initialQuantities[item.id] = 1;
//         });
//         setQuantities(initialQuantities);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   const handleQuantityChange = (id, delta) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[id] || 1) + delta);
//       return { ...prev, [id]: newQty };
//     });
//   };

//   // Apply filter
//   // const filteredMenu = filter === "All"
//   //   ? menuData
//   //   : menuData.filter((item) => item.category.toLowerCase() === filter.toLowerCase());
   
//   const filteredMenu = filter === "All"
//   ? menuData
//   : menuData.filter(
//       (item) =>
//         (item.category || "").toLowerCase() === filter.toLowerCase()
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-purple-50 py-12 px-4">
//       <div className="container mx-auto text-center pt-8">
//         <h2 className="text-fuchsia-600 text-xs uppercase tracking-widest font-medium">
//           Explore Our Offerings
//         </h2>
//         <h1 className="text-3xl sm:text-4xl font-bold mt-1 text-pink-700">
//           Our Menu
//         </h1>
//         <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Discover a variety of culinary delights crafted with care and precision.
//         </p>

//         {/* Filter Buttons */}
//         <div className="mt-6 flex justify-center gap-4">
//           {["All", "Veg", "Nonveg"].map((type) => (
//             <button
//               key={type}
//               onClick={() => setFilter(type)}
//               className={`text-sm px-4 py-1 rounded-full border ${
//                 filter === type
//                   ? "bg-fuchsia-600 text-white border-fuchsia-600"
//                   : "bg-white text-fuchsia-600 border-fuchsia-200 hover:bg-fuchsia-100"
//               } transition`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       {loading ? (
//         <div className="text-center mt-8 text-base text-gray-600">Loading...</div>
//       ) : (
//         <div className="container mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {filteredMenu.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md hover:shadow-pink-300 transition-transform transform hover:scale-105 duration-300 border border-rose-200 flex flex-col"
//             >
//               <img
//                 src={item.image ? `${IMAGE_BASE_URL}${item.image}` : "https://via.placeholder.com/300"}
//                 alt={item.title}
//                 className="w-full h-32 object-cover rounded-t-lg"
//               />
//               <div className="p-3 flex flex-col flex-grow">
//                 <div>
//                   <h2 className="text-lg font-semibold text-pink-700 truncate">{item.title}</h2>
//                   <p className="text-gray-500 mt-1 text-xs leading-snug line-clamp-2">{item.description}</p>
//                 </div>

//                 <div className="mt-3 flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
//                     >
//                       -
//                     </button>
//                     <span className="text-sm font-medium">{quantities[item.id] || 1}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <p className="text-pink-700 font-bold text-sm">₹{item.price}</p>
//                 </div>

//                 <div className="mt-3">
//                   <p className="text-fuchsia-700 font-semibold text-sm">
//                     Total: ₹{item.price * (quantities[item.id] || 1)}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   <button className="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded hover:bg-fuchsia-600 transition">
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;



import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [filter, setFilter] = useState("All");

  const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu/");
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();
        setMenuData(data);

        const initialQuantities = {};
        data.forEach((item) => {
          initialQuantities[item.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  const filteredMenu =
    filter === "All"
      ? menuData
      : menuData.filter(
          (item) => (item.category || "").toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto text-center pt-8">
        <h2 className="text-fuchsia-600 text-xs uppercase tracking-widest font-medium">
          Explore Our Offerings
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mt-1 text-pink-700">
          Our Menu
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Discover a variety of culinary delights crafted with care and precision.
        </p>

        {/* Filter Dropdown */}
        {/* <div className="mt-6 flex justify-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm px-4 py-2 rounded-md border border-fuchsia-300 text-fuchsia-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            <option value="All">All</option>
            <option value="Veg">Veg</option>
            <option value="Nonveg">Nonveg</option>
          </select>
        </div> */}
        <div className="mt-6 flex justify-start">
  <div className="ml-4">
    <label htmlFor="filter" className="text-sm font-medium text-gray-700 mr-2">
      Filter by:
    </label>
    <select
      id="filter"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="text-sm px-4 py-2 rounded-md border border-fuchsia-300 text-fuchsia-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
    >
      <option value="All">All</option>
      <option value="Veg">Veg</option>
      <option value="Nonveg">Nonveg</option>
    </select>
  </div>
</div>


      </div>

      {loading ? (
        <div className="text-center mt-8 text-base text-gray-600">Loading...</div>
      ) : (
        <div className="container mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-pink-300 transition-transform transform hover:scale-105 duration-300 border border-rose-200 flex flex-col"
            >
              <img
                src={
                  item.image
                    ? `${IMAGE_BASE_URL}${item.image}`
                    : "https://via.placeholder.com/300"
                }
                alt={item.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3 flex flex-col flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-pink-700 truncate">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 mt-1 text-xs leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-6 h-6 text-base font-bold bg-rose-100 text-pink-700 rounded-full hover:bg-rose-200 transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-pink-700 font-bold text-sm">₹{item.price}</p>
                </div>

                <div className="mt-3">
                  <p className="text-fuchsia-700 font-semibold text-sm">
                    Total: ₹{item.price * (quantities[item.id] || 1)}
                  </p>
                </div>

                <div className="mt-4">
                  <button className="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded hover:bg-fuchsia-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
