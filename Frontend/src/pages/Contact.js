







// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="min-h-screen pt-24 px-4 py-10 md:px-12 lg:px-20 bg-gradient-to-br from-white via-rose-50 to-purple-50 text-gray-800">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-10 font-fancy tracking-wide">
//         Get In Touch
//       </h2>

//       {/* Description */}
//       <div className="max-w-3xl mx-auto text-center mb-12">
//         <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-700">
//           Planning a celebration? Let’s make it unforgettable. Whether it's a wedding, birthday,
//           or private party — we’re ready to serve flavor and elegance.
//         </p>
//       </div>

//       {/* Contact Info + Form */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {/* Contact Info Cards */}
//         <div className="flex flex-col gap-6">
//           {[
//             {
//               icon: <FaPhoneAlt />,
//               title: "Phone",
//               info: "‪+91 74993 03475‬",
//               hover: "hover:text-pink-600",
//             },
//             {
//               icon: <FaEnvelope />,
//               title: "Email",
//               info: "epicFoods@catering.com",
//               hover: "hover:text-fuchsia-700",
//             },
//             {
//               icon: <FaMapMarkerAlt />,
//               title: "Address",
//               info: "Space Oyumpia wing c 604 Sutagirni chouk, Chh.Sambhajinagar, India",
//               hover: "hover:text-purple-600",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`flex items-center gap-4 bg-white shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-pink-300 cursor-pointer ${item.hover}`}
//             >
//               <div className="text-3xl text-pink-500">{item.icon}</div>
//               <div>
//                 <h4 className="text-lg font-semibold text-fuchsia-700">{item.title}</h4>
//                 <p className="text-gray-700 font-medium">{item.info}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <form className="bg-white shadow-md rounded-2xl p-5 sm:p-6 space-y-4 hover:shadow-pink-300 transition-all w-full md:w-[90%] lg:w-[80%] mx-auto">
//           <h3 className="text-lg font-semibold text-pink-700 text-center mb-2">
//             Let’s Plan Something Special 🎉
//           </h3>

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300 text-sm"
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
//           />
//           <textarea
//             rows="3"
//             placeholder="Tell us about your event..."
//             className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm resize-none"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-fuchsia-600 text-white px-4 py-2 rounded-full font-medium w-full hover:bg-fuchsia-700 transition text-sm"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* CTA Footer */}
//       <div className="mt-16 text-center">
//         <h4 className="text-2xl font-semibold text-pink-700 mb-2">We’re Just A Message Away 💌</h4>
//         <p className="text-gray-700 max-w-xl mx-auto font-medium text-base">
//           Reach out and let’s bring your dream event to life — full of joy, taste, and timeless
//           memories.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;






import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-4 py-10 md:px-12 lg:px-20 bg-gradient-to-br from-white via-rose-50 to-purple-50 text-gray-800">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-10 font-fancy tracking-wide">
        Get In Touch
      </h2>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-700">
          Planning a celebration? Let’s make it unforgettable. Whether it's a wedding, birthday,
          or private party — we’re ready to serve flavor and elegance.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              info: "‪+91 74993 03475‬",
              hover: "hover:text-pink-600",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              info: "epicFoods@catering.com",
              hover: "hover:text-fuchsia-700",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              info: "Space Oyumpia wing c 604 Sudhgirni chouk, Chh.Sambhajinagar, India",
              hover: "hover:text-purple-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-white shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-pink-300 cursor-pointer ${item.hover}`}
            >
              <div className="text-3xl text-pink-500">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-fuchsia-700">{item.title}</h4>
                <p className="text-gray-700 font-medium">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-2xl p-5 sm:p-6 space-y-4 hover:shadow-pink-300 transition-all w-full md:w-[90%] lg:w-[80%] mx-auto">
          <h3 className="text-lg font-semibold text-pink-700 text-center mb-2">
            Let’s Plan Something Special 🎉
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300 text-sm"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
          />
          <textarea
            rows="3"
            placeholder="Tell us about your event..."
            className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm resize-none"
            required
          />
          <button
            type="submit"
            className="bg-fuchsia-600 text-white px-4 py-2 rounded-full font-medium w-full hover:bg-fuchsia-700 transition text-sm"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="mt-16 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5540339044596!2d75.34269667564526!3d19.858814126930827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba27e4ed4701d%3A0x6a3f089978edef2!2sOlumpus%2C%20Sut%20Girni%20Rd%2C%20Gadia%20Vihar%2C%20Chhatrapati%20Sambhaji%20Nagar%2C%20Maharashtra%20431005!5e0!3m2!1sen!2sin!4v1745644742033!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CTA Footer */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-pink-700 mb-2">We’re Just A Message Away 💌</h4>
        <p className="text-gray-700 max-w-xl mx-auto font-medium text-base">
          Reach out and let’s bring your dream event to life — full of joy, taste, and timeless
          memories.
        </p>
      </div>
    </div>
  );
};

export default Contact;
