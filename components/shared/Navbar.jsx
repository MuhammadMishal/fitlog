import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="sticky top-0 z-50 border-b-2 border-gray-700 py-3 bg-black">
      <div className="container mx-auto flex justify-between   p-2 ">
        {/* Left */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="" />
          <Link href={"/"}>
            <h2 className="font font-extrabold">FITLOG</h2>
          </Link>
        </div>

        {/* Center */}
        <div className="flex justify-between gap-2 items-center">
          <div className="font-semibold  p-1 rounded-2xl border-black">
            <Link href="/workouts">Workouts</Link>
          </div>
          <div className="font-semibold p-1 ">
            <Link href="/my-plans">My Plan</Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-between gap-5">
          <Link href="/added-plans">Plan</Link>
          <Link href="/saved-workouts">Saved</Link>
        </div>
      </div>
    </section>
  );
}
