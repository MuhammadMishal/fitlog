import Image from "next/image";
import React from "react";
import bannerImage from "@/public/assets/banner.png";

export default function Banner() {
  return (
    <section className="container mx-auto py-20 bg-[#15171D] border-2 rounded-3xl mt-7 border-gray-700">
      <div className=" flex justify-center gap-50  border-gray-700 items-center mt-7 w-auto ml-5 mr-5">
        {/* Left */}
        <div className=" ml-7">
          <p className="text-[#C2F800] ">WORKOUT LIBRARY</p>
          <h1 className=" mt-5 mb-5 font-extrabold text-4xl">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>

          <p className="mb-5 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br /> into today's plan, and watch the week's work add up.
          </p>

          <button className="p-3  bg-[#C2F800] rounded-[6px] text-black font-semibold">
            BROWSE WORKOUTS
          </button>
        </div>
        {/* Right */}
        <div>
          <Image src={bannerImage} alt=""></Image>
        </div>
      </div>
    </section>
  );
}
