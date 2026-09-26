"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { TiFolderAdd } from "react-icons/ti";
import { toast } from "react-toastify";

export default function AddToTodaysPlan({ workoutDetail }) {
  const { plan, setPlan } = useContext(WorkoutContext);

  const isAlreadyAdded = plan.some((item) => item.id === workoutDetail.id);
  const isPlanFull = plan.length >= 5;
  const isDisabled = isPlanFull;

  // Dynamic label based on state
  const getButtonText = () => {
    if (isAlreadyAdded) return "Added to Today's Plan";
    if (isPlanFull) return "Plan Full (5/5)";
    return "Add to today's plan";
  };

  const handleAddToTodaysPlan = () => {
    if (isAlreadyAdded)
      return toast.warning(`${workoutDetail.name} Added to Today's Plan`);
    if (isDisabled) return;
    setPlan([...plan, workoutDetail]);
    toast.success(`${workoutDetail.name} added to today's plan!`);
  };

  return (
    <button
      className="btn text-black bg-[#CCFF00] hover:bg-[#b8e600] disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed rounded-xl mr-3"
      onClick={handleAddToTodaysPlan}
    >
      <TiFolderAdd className="text-black" />
      {getButtonText()}
    </button>
  );
}
