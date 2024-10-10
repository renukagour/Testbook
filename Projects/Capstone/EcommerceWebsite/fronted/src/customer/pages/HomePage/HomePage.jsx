import React from "react";
import MainCarosel from "../../Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-10 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoe's"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's T-Shirt"} />
      </div>
    </div>
  );
};

export default HomePage;
