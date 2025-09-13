import React from "react";
import storeItems from "../data/storeItems";
import StoreItem from "../components/StoreItem";

export default function Store() {
  return (
    <section className="px-8 py-12 bg-peach">
      <h2 className="font-heading text-3xl text-coral mb-8">Merchandise Store</h2>
      <p className="text-lg text-text mb-8 text-center">
        Every purchase supports our mission. A portion of proceeds goes directly to helping kids in NC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {storeItems.map((item) => <StoreItem key={item.name} item={item} />)}
      </div>
    </section>
  );
}