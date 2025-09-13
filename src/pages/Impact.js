import React from "react";
import impactStats from "../data/impactStats";

const stories = [
  {
    name: "Emily, Age 7",
    story: "Emily received a care package and ongoing support during her treatment. Her smile inspires us every day.",
    img: "/emily.jpg"
  },
  {
    name: "Jacob, Age 11",
    story: "Jacob's family received help through our Save The Child program for urgent medical needs.",
    img: "/jacob.jpg"
  }
];

export default function Impact() {
  return (
    <section className="px-8 py-12 bg-peach">
      <h2 className="font-heading text-3xl text-coral mb-6">Our Impact</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 bg-earth rounded-lg p-6 shadow-md text-center">
          <h3 className="font-heading text-xl text-blue mb-2">Children Helped</h3>
          <span className="text-3xl font-bold text-coral">{impactStats.childrenHelped}</span>
        </div>
        <div className="flex-1 bg-earth rounded-lg p-6 shadow-md text-center">
          <h3 className="font-heading text-xl text-blue mb-2">Items Donated</h3>
          <span className="text-3xl font-bold text-coral">{impactStats.itemsDonated}</span>
        </div>
        <div className="flex-1 bg-earth rounded-lg p-6 shadow-md text-center">
          <h3 className="font-heading text-xl text-blue mb-2">Funds Raised</h3>
          <span className="text-3xl font-bold text-coral">{impactStats.fundsRaised}</span>
        </div>
      </div>
      <h3 className="font-heading text-2xl text-blue mb-6">Patient Stories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((s) => (
          <div key={s.name} className="bg-earth rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={s.img} alt={s.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <h4 className="font-heading text-lg text-coral mb-2">{s.name}</h4>
            <p className="text-text text-center">{s.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}