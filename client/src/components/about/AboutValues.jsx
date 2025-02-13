import { useState } from "react";
import Containar from "../containar/Containar";
import missionImg from "../../assets/About/mission.png";
import visionImg from "../../assets/About/vision.png";

const values = [
  {
    id: 1,
    valuesType: "Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5931DU1WQFwYz0I2LQ3HKAHpicjmiWPwyg&s",
    discription:
      "Expertise and insightful evidence-based solutions are at the heart of everything we do. Expertise and insightful evidence-based solutions are at the heart of everything we do. Expertise and insightful evidence-based solutions are at the heart of everything we do. Expertise and insightful evidence-based solutions are at the heart of everything we do.",
  },
  {
    id: 2,
    valuesType: "Grounded",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5931DU1WQFwYz0I2LQ3HKAHpicjmiWPwyg&s",
    discription:
      "Our teams and partners work closely with local communities, engaging them in every level of decision-making. Our teams and partners work closely with local communities, engaging them in every level of decision-making. Our teams and partners work closely with local communities, engaging them in every level of decision-making. Our teams and partners work closely with local communities, engaging them in every level of decision-making.",
  },
  {
    id: 3,
    valuesType: "Impactful",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5931DU1WQFwYz0I2LQ3HKAHpicjmiWPwyg&s",
    discription:
      "We deliver long-lasting change for farmers, their families and their environments. We deliver long-lasting change for farmers, their families and their environments. We deliver long-lasting change for farmers, their families and their environments. We deliver long-lasting change for farmers, their families and their environments. We deliver long-lasting change for farmers, their families and their environments.",
  },
  {
    id: 4,
    valuesType: "Bold",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5931DU1WQFwYz0I2LQ3HKAHpicjmiWPwyg&s",
    discription:
      "We model innovative approaches and are not afraid to challenge trategies that are failing. We model innovative approaches and are not afraid to challenge trategies that are failing. We model innovative approaches and are not afraid to challenge trategies that are failing.We model innovative approaches and are not afraid to challenge trategies that are failing.",
  },
];

const AboutValues = () => {
  const [value, setValue] = useState(values[0]);

  const handelValues = (id) => {
    setValue(values[id - 1]);
  };
  return (
    <div className="bg-[#FBF7F0] md:py-12">
      <Containar>
        <div className="lg:my-16 p-4">
          {/* <div className=""> */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 xl:gap-x-10">
            <div className="my-6">
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="w-full  leading-7 text-lg text-justify text-gray-500">
                Our mission at Agro Infusion is to empower rural farmers in
                Bangladesh by providing them with essential tools, knowledge,
                and resources to improve soil health and crop yields, thereby
                enhancing their livelihoods. Through our American Formula
                “Growth Booster,” we promote sustainable agriculture by
                increasing crop resilience and fortifying soil, encouraging
                long-term success in farming. We are committed to building
                enduring relationships with farmers based on trust, ensuring
                they feel confident and secure using our products and services.
                Additionally, we aim to uplift rural communities by driving
                economic development, increasing agricultural production, and
                supporting food security across Bangladesh. By tailoring our
                solutions to meet the unique agricultural challenges of rural
                areas, Agro Infusion strives to make a positive local impact,
                creating opportunities for farmers to boost yields, improve
                incomes, and enhance their overall quality of life.
              </p>
              <div className="mt-5 md:mt-10">
                <img src={missionImg} className="h-full w-[90%]" alt="" />
              </div>
            </div>
            <div className="my-6">
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Our Vision
              </h2>
              <p className="w-full leading-7 text-lg text-gray-500 text-justify">
                Our vision at Agro Infusion is to create a thriving rural
                Bangladesh, where farmers are self-sufficient, prosperous, and
                empowered to produce healthy, abundant crops with the support of
                innovative soil health solutions. We aspire to become
                Bangladesh's leading provider of agricultural solutions,
                recognized for revolutionizing farming practices and
                transforming the rural agricultural landscape. By contributing
                to a sustainable and resilient food system, we aim to ensure
                that future generations of farmers can succeed without
                compromising the environment. As we grow, we envision setting a
                global model for rural agricultural development, demonstrating
                how a focused, community-driven approach can lead to sustainable
                prosperity in developing regions.
              </p>
              <div className="mt-5 md:mt-10">
                <img src={visionImg} className="h-full w-full" alt="" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <div className="lg:my-16 p-4">
          <div className="my-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Values</h2>
            <p className="w-full md:w-4/5 lg:w-3/5 leading-7 text-lg text-gray-500">
              Global Agro Resources Incorporation is an agro-based company in
              Bangladesh dealing various agriculture products including Sesame
              Seeds, Sesame Oil, Peanut, Peanut Oil, Yellow Maize, Fresh
              Potatoes, Raw Jute, Jute bags and other agriculture products as
              well. Visit our website www.garibd.com for more information.
            </p>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row">
              <div className="md:basis-1/3 mx- mb-10 md:mb-0 text-left flex flex-col">
                {values.map((value) => (
                  <div key={value.id} onClick={() => handelValues(value.id)}>
                    <button className="text-xl font-serif  hover:text-[#F4A51D] text-primary font-semibold">
                      {value?.valuesType}
                    </button>
                    <hr className="divider border-1 my-10"></hr>
                  </div>
                ))}
              </div>
              <div className="md:basis-2/3 flex flex-col md:flex-row gap-2">
                <div className="md:basis-1/2">
                  <img
                    className="h-[360px] lg:h-[440px] w-[400px] object-cover rounded-md"
                    src={value?.img}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="md:basis-1/2 pt- text-left">
                  <h2 className="text-2xl mb-3 font-semibold text-primary">
                    {value?.valuesType}
                  </h2>
                  <p className="text-md leading-7 text-lg text-gray-500">
                    {value?.discription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Containar>
    </div>
  );
};

export default AboutValues;
