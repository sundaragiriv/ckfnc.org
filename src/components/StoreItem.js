import React from "react";
export default function StoreItem({ item }) {
  return (
    <div className="bg-peach rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="font-heading text-xl text-blue mb-2">{item.name}</h3>
      <p className="text-text mb-4 text-center">{item.desc}</p>
      <span className="font-bold text-coral mb-2">{item.price}</span>
      <a href={item.paypalLink} target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Add to Cart</a>
    </div>
  );
}