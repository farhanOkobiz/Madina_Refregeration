import icon from "../../assets/home/service_icon.jpg";
import Containar from "../containar/Containar";
import { useEffect, useState } from "react";
import api from "../axios/Axios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to manage "Show All" functionality

  // Function to fetch services
  const getServices = async () => {
    try {
      const response = await api.get(`/services`);
      setServices(response.data?.data); // Set the services data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error.message); // Handle error
      setLoading(false); // Set loading to false if error occurs
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  // Function to toggle "Show All" state
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Determine the services to display
  const displayedServices = showAll
    ? services?.doc
    : services?.doc?.slice(0, 8);

  return (
    <div className="">
      <Containar>
        <div className="py-[60px] sm:py-[80px]">
          <div className="text-center relative">
            <div className="flex justify-center">
              <img className="w-[70px] h-[70px]" src={icon} alt="leaf-icon" />
            </div>
            <div className="text-center my-7">
              <h5 className="text-[16px] sm:text-[21px] font-semibold mb-4 uppercase text-primary">
                Our Expert Repair & Component Solutions
              </h5>
              <h2 className="text-xl sm:text-3xl font-bold px-10 mx-auto">
                High-Quality Repairs and Genuine Spare Parts for ACs, Fridges,
                and More!
              </h2>
            </div>
            {loading ? (
              <div>
                <Skeleton height={480} />
              </div>
            ) : (
              <>
                {services?.doc?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayedServices?.map((service) => (
                      <div
                        key={service._id}
                        className="rounded-lg overflow-hidden group bg-white pb-10"
                      >
                        <div className="h-[297px] overflow-hidden">
                          <img
                            src={service?.photo} // Use the actual image source
                            alt={service.heading}
                            className="w-full h-full rounded-none object-cover"
                          />
                        </div>

                        {/* Icon and Content */}
                        <div className="mt-10 text-center">
                          {/* <div className="flex justify-center items-center mb-4">
                            <div className="bg-primary group-hover:bg-secondary transition-all ease-linear duration-150 text-white rounded-full w-[82px] h-[82px] flex justify-center items-center border-4 border-white">
                              <h3 className="text-[24px]">
                                <i
                                  className={
                                    service?.icon
                                      ? service?.icon.match(
                                          /className=['"]([^'"]+)['"]/
                                        )?.[1] || ""
                                      : ""
                                  }
                                ></i>
                              </h3>
                            </div>
                          </div> */}

                          {/* Title */}
                          <h2 className="font-semibold text-[20px] mb-5 robo line-clamp-1 px-2">
                            {service.heading}
                          </h2>

                          {/* Description */}
                          <p
                            className="text-gray-600 text-sm px-5 line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: service.details,
                            }} // This will render the HTML content
                          ></p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="h-32 flex items-center justify-center text-2xl font-semibold text-primary">
                    No Service Available!
                  </p>
                )}

                {/* Show All Button */}
                <div className="flex justify-center mt-8">
                  <Link to="/services">
                    <div
                      onClick={toggleShowAll}
                      className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-all duration-300"
                    >
                      Show All Services
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </Containar>
    </div>
  );
};

export default Service;
