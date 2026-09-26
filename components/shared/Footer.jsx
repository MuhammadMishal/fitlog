import footerLogo from "@/public/assets/logo.png";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#0F1115] p-5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src={footerLogo} alt="FitLog" className="w-8 sm:w-10" />
          <p className="font-extrabold text-white">FITLOG</p>
        </div>
        <div className="text-center text-sm text-gray-600 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </section>
  );
}
