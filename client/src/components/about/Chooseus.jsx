import Containar from "../containar/Containar";
import Leaf1 from "../../assets/About/Leaf-1.svg";

const topics = [
  {
    id: 1,
    title: "Eco-Friendly ",
    description:
      "Inputs: The Growth Booster is formulated using sustainable and renewable resources to minimize environmental impact.",
  },
  {
    id: 2,
    title: "Recyclable Packaging",
    description:
      "100% recyclable materials are used for packaging, reducing waste and promoting eco-conscious farming.",
  },
  {
    id: 3,
    title: "Energy Efficiency",
    description:
      "The manufacturing process prioritizes renewable energy sources and low carbon emissions, ensuring a minimal ecological footprint.",
  },
  {
    id: 4,
    title: "Resource Renewal",
    description:
      "Each harvest is designed to rejuvenate the soil, supporting a long-term cycle of agricultural sustainability without depleting natural resources.",
  },
  {
    id: 5,
    title: "Reduced Waste",
    description:
      "By improving nutrient absorption efficiency, the product minimizes nutrient runoff, which helps prevent soil and water contamination.",
  },
];

const Chooseus = () => {
  return (
    <div>
      <Containar>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h4 className="text-md font-bold text-[#F4A51D] uppercase mb-5">
              Why our clients love us
            </h4>
            <h1 className="text-4xl font-semibold">Why you should choose us</h1>
          </div>
          <div>
            <img src={Leaf1} className="hidden lg:block rotate-135" alt="Leaf Decoration" />
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          {topics.map((topic, index) => (
            <div key={topic.id} className="mt-10">
              <p className="text-lg font-medium flex items-center">
                {String(index + 1).padStart(2, "0")}
                <div className="w-full h-px bg-gray-300 ml-4"></div>
              </p>
              <div className="flex flex-col md:flex-row justify-between">
                <h2 className="text-3xl font-medium text-gray-900 w-full md:w-1/2">
                  {topic.title}
                </h2>
                <p className="text-gray-500 w-full md:w-1/2 text-lg">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Containar>
    </div>
  );
};

export default Chooseus;
