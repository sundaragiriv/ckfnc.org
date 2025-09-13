import React from "react";
export default function ProgramCard({ program }) {
  return (
    <div className="bg-peach rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={program.img} alt={program.title} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="font-heading text-xl text-blue mb-2">{program.title}</h3>
      <p className="text-text mb-4 text-center">{program.desc}</p>
  <a href={program.ctaLink || "#"} className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">{program.cta}</a>
    </div>
  );
}