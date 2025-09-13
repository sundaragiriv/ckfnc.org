import React from "react";
export default function Footer() {
  return (
    <footer className="bg-peach py-8 mt-auto">
      <div className="flex flex-col md:flex-row md:justify-between px-8">
        <div>
          <span className="font-heading text-coral font-bold text-lg">Cancer Kids First of NC</span>
          <p className="text-text text-sm mt-2">A youth-led chapter supporting children’s health and hope. NC’s independent chapter of Cancer Kids First.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="mailto:info@cancerkidsfirstnc.org" className="text-blue hover:text-coral">Contact</a>
          <a href="https://cancerkidsfirst.org" className="text-blue hover:text-coral" target="_blank" rel="noopener noreferrer">Parent Organization</a>
          <a href="/privacy" className="text-blue hover:text-coral">Privacy</a>
        </div>
      </div>
      <div className="text-center text-sm text-text mt-4">
        &copy; {new Date().getFullYear()} Cancer Kids First of NC. All Rights Reserved.
      </div>
    </footer>
  );
}