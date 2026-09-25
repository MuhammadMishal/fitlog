"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

export default function SaveForLater({ workoutDetail }) {
  const { saved, setSaved } = useContext(WorkoutContext);

  function handleSaveForLater() {
    setSaved([...saved, workoutDetail]);
    alert(`You have read '${workoutDetail.name}'`);
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
