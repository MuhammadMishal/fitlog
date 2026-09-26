import React from "react";
import LibraryCard from "../shared/LibraryCard";

const getWorkoutData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function Library() {
  const workoutDatas = await getWorkoutData();

  return (
    <section id="workouts">
      <div className="container mx-auto mt-15 mb-5 pt-6">
        <h1 className="font-extrabold text-2xl mb-2 px-4">THE LIBRARY</h1>
        <p className="text-gray-400 px-4">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {/* CARDS */}

      <div className="container mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-4">
        {workoutDatas.map((workoutData) => {
          return (
            <LibraryCard
              key={workoutData.id}
              workoutData={workoutData}
            ></LibraryCard>
          );
        })}
      </div>
    </section>
  );
}
