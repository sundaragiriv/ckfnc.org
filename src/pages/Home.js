import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/blogPosts";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-peach px-8 py-12 md:py-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-heading text-coral font-bold mb-4">
            Bringing Hope and Care to Children in Need
          </h1>
          <p className="text-lg md:text-xl mb-6 text-text">
            Cancer Kids First of NC is a youth-led charity dedicated to helping children receive the medical, practical, and emotional care they need—no matter the diagnosis.
          </p>
          <div className="flex gap-4">
            <Link to="/donate" className="bg-coral text-white font-bold px-6 py-3 rounded shadow hover:bg-blue transition">Donate</Link>
            <Link to="/get-involved" className="bg-teal text-blue font-bold px-6 py-3 rounded shadow hover:bg-coral transition">Get Involved</Link>
          </div>
        </div>
        <img src="/hero-img.jpg" alt="Children & Volunteers" className="flex-1 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-10 w-full max-w-md h-auto" />
      </section>

      {/* Fundraising Progress Bar */}
      <section className="px-8 py-6 bg-earth" id="fundraising">
        <h2 className="font-heading text-2xl text-coral mb-2">Fundraising Goal</h2>
        <ProgressBar current={7000} goal={10000} />
        <p className="text-center mt-2 text-text">Help us reach our goal to support more children this year!</p>
      </section>

      {/* Youth-led Section */}
      <section className="px-8 py-12 bg-teal/40" id="about">
        <h2 className="font-heading text-2xl text-coral mb-6">Youth-Led Impact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-lg text-text">
              Our NC chapter is powered by passionate young volunteers who go beyond cancer care—championing support for all children in need. See their stories and impact!
            </p>
            <ul className="pl-4 list-disc text-text">
              <li>Organizing drives and events</li>
              <li>Offering emotional support</li>
              <li>Advocating for children’s healthcare access</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <iframe
              className="rounded-lg shadow-lg w-full h-48 md:h-64"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Youth Volunteers Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="mt-2 text-sm text-blue font-heading">Hear from our volunteers!</span>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="px-8 py-12 bg-teal/20" id="blog">
        <h2 className="font-heading text-2xl text-coral mb-8">Latest Updates & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((b) => <BlogCard key={b.title} post={b} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="bg-coral text-white font-bold px-6 py-3 rounded shadow hover:bg-blue transition">Read More</Link>
        </div>
      </section>
    </div>
  );
}