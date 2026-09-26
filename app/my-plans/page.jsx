import MyPlanComponent from "@/components/Plans/MyPlan";
import { Suspense } from "react";

export default function Page({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="flex min-h-75 items-center justify-center">
            <span className="loading loading-spinner text-success w-16 h-16 bg-[#CCFF00] "></span>
          </div>
        </div>
      }
    >
      <MyPlanComponent searchParams={searchParams} />
    </Suspense>
  );
}
