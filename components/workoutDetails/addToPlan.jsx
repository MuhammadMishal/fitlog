"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

export default function AddToTodaysPlan({ workOutDetail }) {
  console.log("----------------", workOutDetail);
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleAddToTodaysPlan = () => {
    setPlan([...plan, workOutDetail]);
    alert(`You have read ${workOutDetail.name}`);
  };

  return (
    <button
      className="btn text-black bg-[#CCFF00] rounded-xl mr-3"
      onClick={() => handleAddToTodaysPlan()}
    >
      Add to todays plan
    </button>
  );
}
