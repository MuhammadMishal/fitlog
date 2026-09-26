"use client";
import React, { useContext } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useContext(WorkoutContext);
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
          <Link
            href="/workouts"
            className={`font-semibold py-2 px-4 ${pathname === "/workouts" ? "text-[#C2F800] bg-[#1A2312] rounded-full" : ""}`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plans"
            className={`font-semibold py-2 px-4 ${pathname === "/my-plans" ? "text-[#C2F800] bg-[#1A2312] rounded-full" : ""}`}
          >
            My Plan
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Plan Tab */}
          <Link href="/my-plans?tab=plan">
            <div className="flex items-center gap-3   text-white">
              <span>Plan</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-base font-bold text-black">
                {plan.length}
              </span>
            </div>
          </Link>

          {/* Saved Tab */}
          <Link href="/my-plans?tab=saved">
            <div className="flex items-center gap-3 font-medium text-[#9CA3AF]">
              <span>Saved</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 bg-gray-900/60 text-base font-bold text-white">
                {saved.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
