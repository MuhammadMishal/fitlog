"use client";

import React, { createContext, useEffect, useState } from "react";

export const WorkoutContext = createContext({});

export default function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");
    const savedDone = localStorage.getItem("fitlog-done");

    if (savedPlan) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }

    if (savedDone) {
      setDone(JSON.parse(savedDone));
    }

    setIsLoaded(true);
  }, []);

  // Save only after loading is complete
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-done", JSON.stringify(done));
  }, [done, isLoaded]);

  function addToSaved(workout) {
    setSaved([...saved, workout]);
  }

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    addToSaved,
    done,
    setDone,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
}
