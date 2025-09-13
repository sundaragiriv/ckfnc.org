import React from "react";
export default function Donate() {
  return (
    <section className="px-8 py-12 bg-earth">
      <h2 className="font-heading text-3xl text-coral mb-6">Donate</h2>
      <p className="text-lg text-text mb-8">
        Your generous donation helps us provide essential care and support for children in need. Every contribution makes a difference!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-peach rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="font-heading text-xl text-blue mb-2">$25</span>
          <p className="text-text mb-4 text-center">Provides toys for a child in hospital.</p>
          <a href="https://www.paypal.com/donate?hosted_button_id=XXX25" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Donate $25</a>
        </div>
        <div className="bg-peach rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="font-heading text-xl text-blue mb-2">$50</span>
          <p className="text-text mb-4 text-center">Provides a care package for a child.</p>
          <a href="https://www.paypal.com/donate?hosted_button_id=XXX50" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Donate $50</a>
        </div>
        <div className="bg-peach rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="font-heading text-xl text-blue mb-2">$100</span>
          <p className="text-text mb-4 text-center">Funds an urgent medical service.</p>
          <a href="https://www.paypal.com/donate?hosted_button_id=XXX100" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Donate $100</a>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-heading text-xl text-blue mb-2">Custom Amount</h3>
        <a href="https://www.paypal.com/donate?hosted_button_id=XXXcustom" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-6 py-3 rounded shadow hover:bg-blue transition">Donate Custom Amount</a>
      </div>
    </section>
  );
}