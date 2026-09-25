"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function SaveForLater({ workoutDetail }) {
  const { saved, setSaved } = useContext(WorkoutContext);
  console.log(saved, workoutDetail);

  function handleSaveForLater() {
    const alreadySaved = saved.find(
      (workout) => workout.id === workoutDetail.id,
    );

    if (alreadySaved) {
      toast.warning(`${workoutDetail.name} is already saved`);
      return;
    }
    setSaved([...saved, workoutDetail]);
    toast.success(` ${workoutDetail.name} Saved for Later!`);
  }

  return (
    <button
      className="btn bg-black text-white border-3 rounded-xl  mr-3"
      onClick={() => handleSaveForLater()}
    >
      Save For Later
    </button>
  );
}
