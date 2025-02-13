import farmer1 from "../../assets/About/farmer-1.jpg";
import aboutHeader from "../../assets/About/about_header.png";
import leaf1 from "../../assets/About/Leaf-1.svg";
import Containar from "../containar/Containar";
const AboutIntroduction = () => {
  return (
    <div>
      <Containar>
        <div className="my-24 w-full flex flex-col  lg:flex-row justify-between items-center md:gap-10">
          <div className="lg:w-1/2">
            <h4 className="text-xl font-bold text-[#F4A51D]">
              Welcome to{" "}
              <span className="text-primary">Agro Infusion Limited!</span>
            </h4>
            <h1 className="text-4xl font-semibold my-4 mb-8">
              We are building a better future
            </h1>
            <p className="text-lg leading-9 text-gray-500">
              Agro Infusion's Growth Booster is designed to revolutionize
              farming by enriching soil health, enhancing plant vitality, and
              improving yield quality and quantity. It empowers farmers
              economically by increasing productivity while reducing costs,
              supports sustainable farming practices, and fosters resilience
              against environmental and biological challenges. The product
              promotes food security and uplifts rural communities by ensuring
              reliable harvests and better livelihoods. Backed by innovation and
              scientific research, it delivers precise nutrient solutions that
              protect natural ecosystems, conserve resources, and contribute to
              long-term agricultural and environmental sustainability.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutHeader}
              className="h-[450px] md:h-[900px] w-full rounded-lg"
            ></img>
            <img src={leaf1} className="hidden lg:block absolute -bottom-5 -right-4"></img>
          </div>
        </div>
      </Containar>
    </div>
  );
};

export default AboutIntroduction;
