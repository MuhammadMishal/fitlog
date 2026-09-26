import footerLogo from "@/public/assets/logo.png";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex justify-between p-5 bg-[#0F1115]">
      <div className="container mx-auto flex justify-between gap-2 p-5">
        <div className="flex justify-between gap-2">
          <Image src={footerLogo} alt="" />{" "}
          <p className="font-extrabold">FITLOG</p>
        </div>
        <div className="text-gray-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </section>
  );
}
