"use client";
import React, { useState, useContext } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { plan, saved } = useContext(WorkoutContext);

  return (
    <section className="sticky top-0 z-50 border-b border-gray-800 bg-[#111315] py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Hamburger Button + Logo */}
        <div className="relative flex items-center gap-3">
          {/* Hamburger Icon (Only visible on mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FITLOG Logo" width={26} height={26} />
            <h2 className="text-xl font-extrabold tracking-wider text-white">
              FITLOG
            </h2>
          </Link>

          {/* Mobile Dropdown Menu (Appears under Hamburger) */}
          {isMenuOpen && (
            <div className="absolute top-10 left-0 z-50 w-44 rounded-2xl border border-gray-800 bg-[#181a1f] p-4 shadow-2xl md:hidden">
              <div className="flex flex-col gap-3">
                <Link
                  href="/workouts"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    pathname === "/workouts"
                      ? "text-[#C2F800]"
                      : "text-gray-300 hover:text-[#C2F800]"
                  }`}
                >
                  Workouts
                </Link>
                <Link
                  href="/my-plans"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    pathname === "/my-plans"
                      ? "text-[#C2F800]"
                      : "text-gray-300 hover:text-[#C2F800]"
                  }`}
                >
                  My Plan
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Center: Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/workouts"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              pathname === "/workouts"
                ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plans"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              pathname === "/my-plans"
                ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right: Badges (Plan & Saved - Always Visible) */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Plan Badge */}
          <Link href="/my-plans?tab=plan">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <span>Plan</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-xs font-bold text-black">
                {plan.length}
              </span>
            </div>
          </Link>

          {/* Saved Badge */}
          <Link href="/my-plans?tab=saved">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>Saved</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 bg-gray-900/80 text-xs font-semibold text-white">
                {saved.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
