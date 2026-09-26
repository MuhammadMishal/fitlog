import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LibraryCard({ workoutData }) {
  return (
    <Link href={`/workouts/${workoutData.id}`} className="block h-full">
      <div className="bg-[#151922] border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between h-full hover:border-[#CCFF00]">
        <div>
          <div className="relative w-full h-60 overflow-hidden">
            <Image
              src={workoutData.image}
              alt={workoutData.name || "Workout Image"}
              fill
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="p-4">
            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mb-3">
              {workoutData.muscleGroups?.map((muscle, ind) => (
                <span
                  key={ind}
                  className="rounded-full bg-[#CCFF00] px-3 py-0.5 text-xs font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Name */}
            <h3 className="font-extrabold text-lg text-white uppercase tracking-wide mb-1">
              {workoutData.name}
            </h3>

            {/* Equipment */}
            <p className="text-gray-400 text-xs mb-4">
              {workoutData.equipment}
            </p>

            {/* Card Footer Info */}
            <div className="flex items-center gap-4 text-xs font-medium text-gray-300">
              {/* Duration */}
              <div className="flex items-center gap-1">
                <span>{workoutData.duration} min</span>
              </div>

              {/* Calories Burned */}
              <div className="flex items-center gap-1">
                <span>{workoutData.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <span>{workoutData.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
