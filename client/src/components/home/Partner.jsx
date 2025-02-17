// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Containar from "../containar/Containar";
// import { partnerList } from "../constants";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules"; // Import from swiper/modules
// import "swiper/css"; // Core Swiper styles
// import api from "../axios/Axios";
// import "swiper/css/navigation"; // Navigation styles
// import "swiper/css/pagination"; // Pagination styles

// const Partner = () => {
//   // const [loading, setLoading] = useState(true);
//   const [partners, setPartners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getPartners = async () => {
//     try {
//       const response = await api.get(`/partners`);

//       setPartners(response.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPartners();
//   }, []);

//   return (
//     <div className="py-12 sm:py-[40px]">
//       <Containar>
//         <div className="">
//           {loading ? (
//             <div>
//               <Skeleton height={200} />
//             </div>
//           ) : (
//             <>
//               {partners?.doc?.length > 0 ? (
//                 <div className="py-[30px] lg:py-[100px] ">
//                   <div>
//                     <h4 className="uppercase text-[16px] sm:text-[20px] font-bold text-primary tracking-wide leading-7 sm:leading-[58px]">
//                       Our Trusted Partner
//                     </h4>
//                     <h2 className="text-[22px] sm:text-[36px] font-semibold leading-8 sm:leading-[48px] mt-2.5 text-text">
//                       Trusted Partner of Madina Refregeration
//                     </h2>

//                     <div className="mt-[65px]">
//                       {loading ? (
//                         // Render Skeleton placeholders while loading
//                         <div className="flex justify-between items-center flex-wrap">
//                           {[...Array(6)].map((_, index) => (
//                             <div key={index} className="w-[190px] h-[112px]">
//                               <Skeleton className="w-full h-full" />
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         // Render Swiper once loading is complete
//                         <Swiper
//                           modules={[Autoplay]} // Use imported modules
//                           spaceBetween={30}
//                           slidesPerView={1} // Default number of slides
//                           // navigation
//                           speed={3000}
//                           pagination={{ clickable: true }}
//                           autoplay={{ delay: 0 }}
//                           loop={true}
//                           breakpoints={{
//                             320: {
//                               slidesPerView: 2,
//                             },
//                             640: {
//                               slidesPerView: 2,
//                             },
//                             768: {
//                               slidesPerView: 3,
//                             },
//                             1024: {
//                               slidesPerView: 4,
//                             },
//                             1280: {
//                               slidesPerView: 6,
//                             },
//                           }}
//                         >
//                           {partners?.doc?.map((item, index) => (
//                             <SwiperSlide
//                               key={index}
//                               className="flex justify-center items-center"
//                             >
//                               <Link className="w-28 h-28" to={"/"}>
//                                 <img
//                                   className="w-full h-full"
//                                   src={item?.photo}
//                                   alt={`Partner logo ${index + 1}`}
//                                 />
//                               </Link>
//                             </SwiperSlide>
//                           ))}
//                         </Swiper>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 ""
//               )}{" "}
//             </>
//           )}
//         </div>
//       </Containar>
//     </div>
//   );
// };

// export default Partner;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Containar from "../containar/Containar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Marquee from "react-fast-marquee"; // Import react-fast-marquee
import api from "../axios/Axios";

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPartners = async () => {
    try {
      const response = await api.get(`/partners`);
      setPartners(response.data?.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <>
      {/* <Containar> */}
      <div className="font-robo">
        {loading ? (
          <div>
            <Skeleton height={200} />
          </div>
        ) : (
          <>
            {partners?.doc?.length > 0 ? (
              <div className="pt-5">
                <Containar>
                  <h2 className="text-[22px] sm:text-[36px] font-semibold leading-8 sm:leading-[48px] mt-16 text-primary">
                    Trusted Client of Qutex
                  </h2>
                </Containar>

                <div className="mt-8 pb-16">
                  {/* Add react-fast-marquee */}
                  <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    {partners?.doc?.map((item, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex justify-center items-center mx-5 overflow-hidden p-1"
                      >
                        <Link className="w-full h-full" to={"/"}>
                          <img
                            className="w-full h-full rounded-full object-cover"
                            src={item?.photo}
                            alt={`Partner logo ${index + 1}`}
                          />
                        </Link>
                      </div>
                    ))}
                  </Marquee>
                </div>

                {/* <div className="my-10 text-center">
                  <Link
                    to="/clients"
                    className="w-28 mx-auto px-6 py-3 text-lg font-medium text-white bg-primary rounded-full hover:transform hover:scale-110 transition-all ease-linear duration-200"
                  >
                    See all clients
                  </Link>
                </div> */}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No partners found. Please try again later.
              </p>
            )}
          </>
        )}
      </div>
      {/* </Containar> */}
    </>
  );
};

export default Partner;

