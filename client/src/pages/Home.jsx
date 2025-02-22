import { useState, useEffect } from "react";
import Partner from "../components/home/Partner";
import Product from "../components/home/Product";
import Banner from "../components/home/Banner";
import HomeVideoPart from "../components/home/HomeVideoPart";
import Service from "../components/home/Service";

const Home = () => {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <>
      <div className="bg-[#FBF7F0] font-robo">
        <Banner />
        <Service />
        {/* <AgroMissionSection /> */}
        <Product />
        {/* <Success /> */}
        {/* <Articles /> */}
        {/* <HomeVideoPart /> */}
        {/* <Event /> */}
        <Partner />
      </div>
    </>
  );
};

export default Home;
