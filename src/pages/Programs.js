import React from "react";
import ProgramCard from "../components/ProgramCard";
import programs from "../data/programs";

export default function Programs() {
  return (
    <section className="px-8 py-12 bg-earth">
      <h2 className="font-heading text-3xl text-coral mb-8">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((p) => <ProgramCard key={p.title} program={p} />)}
      </div>
    </section>
  );
}