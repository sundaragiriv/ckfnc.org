import React from "react";
export default function ProgressBar({ current, goal }) {
  const percent = Math.min(100, Math.round((current / goal) * 100));
  return (
    <div className="w-full max-w-xl mx-auto bg-peach rounded-full h-8 flex items-center shadow relative">
      <div
        className="bg-coral h-8 rounded-full transition-all duration-700"
        style={{ width: `${percent}%` }}
      ></div>
      <span className="absolute left-1/2 transform -translate-x-1/2 text-blue font-heading font-bold">
        ${current.toLocaleString()} / ${goal.toLocaleString()}
      </span>
    </div>
  );
}