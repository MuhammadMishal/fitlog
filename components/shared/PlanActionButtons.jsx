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
          ? "bg-gray-600 text-white rounded-full px-4 py-2"
          : "bg-[#CCFF00] text-black rounded-full flex items-center px-4 py-2"
      }
    >
      {!isPlanMarkedButton && <MdDone className="text-black" />}

      {renderText()}
    </button>
  );
};

export default PlanActionButtons;
