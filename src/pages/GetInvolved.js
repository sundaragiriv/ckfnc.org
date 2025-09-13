import React from "react";
export default function GetInvolved() {
  return (
    <section className="px-8 py-12 bg-peach">
      <h2 className="font-heading text-3xl text-coral mb-6">Get Involved</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Youth Volunteers */}
        <div className="bg-earth rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="font-heading text-xl text-blue mb-2">Youth Volunteers</h3>
          <p className="text-text mb-4 text-center">
            Join our youth-led team and make a direct impact in your community.
          </p>
          <a href="https://forms.gle/xxxxxxxx" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Sign Up</a>
        </div>
        {/* Adult Supporters */}
        <div className="bg-earth rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="font-heading text-xl text-blue mb-2">Adult Supporters</h3>
          <p className="text-text mb-4 text-center">
            Parents, teachers, and community leaders can volunteer, donate, or support events.
          </p>
          <a href="https://forms.gle/yyyyyyyy" target="_blank" rel="noopener noreferrer" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Get Involved</a>
        </div>
        {/* Corporate & Celebrity Partnerships */}
        <div className="bg-earth rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="font-heading text-xl text-blue mb-2">Corporate & Celebrity Partners</h3>
          <p className="text-text mb-4 text-center">
            Partner with us to amplify our reach and impact. Sponsorship, donations, and events.
          </p>
          <a href="mailto:info@cancerkidsfirstnc.org" className="bg-coral text-white font-bold px-4 py-2 rounded shadow hover:bg-blue transition">Contact Us</a>
        </div>
      </div>
      {/* Volunteer Signup Form */}
      <div className="text-center mt-8">
        <h3 className="font-heading text-xl text-coral mb-2">Volunteer Sign-Up</h3>
        <iframe src="https://forms.gle/xxxxxxxx" width="100%" height="400" className="rounded-lg shadow-lg border-none"></iframe>
      </div>
    </section>
  );
}