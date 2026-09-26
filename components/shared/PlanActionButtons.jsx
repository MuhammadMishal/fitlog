import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const PlanActionButtons = ({ activeTab, workoutData, markAsDone }) => {
  const { done } = useContext(WorkoutContext);
  console.log("fdfdf", done, workoutData);
  const isPlanMarkedButton =
    activeTab === "plan" && done.some((item) => item.id === workoutData.id);

  const renderText = () => {
    if (isPlanMarkedButton) {
      return "Done";
    }
    return "Mark as Done";
  };

  if (activeTab === "saved") return null;

  return (
    <button
      onClick={() => markAsDone(workoutData)}
      disabled={isPlanMarkedButton}
      className={
        isPlanMarkedButton
          ? "bg-gray-600 text-white rounded-md px-4 py-2"
          : "bg-[#CCFF00] text-black rounded-md px-4 py-2"
      }
    >
      {renderText()}
    </button>
  );
};

export default PlanActionButtons;
