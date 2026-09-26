import Image from "next/image";
import React from "react";
import bannerImage from "@/public/assets/banner.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="bg-[#181a20] border border-gray-800 rounded-4xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-[#ccff00] text-xs font-black tracking-widest uppercase mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-[1.1] mb-5">
            TRAIN WITH INTENT. <br /> LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-xs md:text-base leading-relaxed mb-8 max-w-md">
            {
              "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it "
            }
            {"into today's plan,and watch the week's work add up."}
          </p>

          <Link
            href={"#workouts"}
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold px-6 py-3.5 rounded-xl transition duration-200 text-sm"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Image Container */}
        <div className="flex justify-center items-center">
          <Image
            src={bannerImage}
            alt="Gym Workout Illustration"
            className="w-[320px] sm:w-112.5 lg:w-137.5 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
