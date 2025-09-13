import React from "react";
export default function About() {
  return (
    <section className="px-8 py-12 bg-earth">
      <h2 className="font-heading text-3xl text-coral mb-6">About Us</h2>
      <p className="text-lg text-text mb-6">
        Cancer Kids First of NC (CKFNC) is a youth-led organization dedicated to providing comprehensive care and support to children in North Carolina, regardless of their medical diagnosis.
      </p>
      <div className="mb-8">
        <h3 className="font-heading text-xl text-blue mb-2">Our History</h3>
        <p className="text-text">
          CKFNC was established as a chapter of the national Cancer Kids First organization, but operates independently to address the unique needs of children in North Carolina. We go beyond cancer care, supporting children with a variety of medical, practical, and emotional needs.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="font-heading text-xl text-blue mb-2">Youth-Led Team</h3>
        <p className="text-text">
          Our team is comprised of passionate young volunteers and leaders who organize events, run programs, and advocate for children’s health and happiness.
        </p>
      </div>
      <div>
        <h3 className="font-heading text-xl text-blue mb-2">Mission & Vision</h3>
        <p className="text-text">
          <strong>Mission:</strong> To provide children in North Carolina with the care and resources they need to thrive.<br />
          <strong>Vision:</strong> A future where every child receives holistic support—medical, practical, and emotional—regardless of their circumstances.
        </p>
      </div>
    </section>
  );
}