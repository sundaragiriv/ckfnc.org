import React from "react";
import blogPosts from "../data/blogPosts";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section className="px-8 py-12 bg-earth">
      <h2 className="font-heading text-3xl text-coral mb-8">Blog & News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((b) => <BlogCard key={b.title} post={b} />)}
      </div>
    </section>
  );
}