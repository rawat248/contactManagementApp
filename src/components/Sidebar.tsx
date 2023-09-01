import React from "react";
import {
  FaTachometerAlt,
  FaRegChartBar,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };

  const handleCharts = () => {
    navigate("/chart");
  };

  const handleMaps = () => {
    navigate("/maps");
  };
  return (
    <div className="bg-[#4E73DF] h-screen">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Admin panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          <button onClick={handleNavigate}> Contact</button>
        </p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          {" "}
          INTERFACE
        </p>

        <div className="flex items-center gap-[10px] py-[15px]  cursor-pointer">
          <FaRegChartBar color="white" />{" "}
          <p className="text-[14px] leading-[20px] font-bold text-white">
            <button onClick={handleCharts}>Charts</button>
          </p>
        </div>

        <div className="flex items-center gap-[10px] py-[15px]  cursor-pointer">
          <FaRegChartBar color="white" />{" "}
          <p className="text-[14px] leading-[20px] font-bold text-white">
            <button onClick={handleMaps}> Maps</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
