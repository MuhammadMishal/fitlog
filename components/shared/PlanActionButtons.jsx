import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { MdDone } from "react-icons/md";

const PlanActionButtons = ({ activeTab, workoutData, markAsDone }) => {
  const { done } = useContext(WorkoutContext);
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
          ? "bg-gray-600 text-white rounded-full sm:px-2 sm:py-1 sm:text-base text-sm"
          : "bg-[#CCFF00] text-black rounded-full flex items-center sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-sm"
      }
    >
      {!isPlanMarkedButton && <MdDone className="text-black" />}

      {renderText()}
    </button>
  );
};

export default PlanActionButtons;
