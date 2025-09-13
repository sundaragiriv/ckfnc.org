import React from "react";
export default function BlogCard({ post }) {
  return (
    <a href={post.url} className="block bg-peach rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col items-center">
      <img src={post.img} alt={post.title} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="font-heading text-xl text-blue mb-2">{post.title}</h3>
      <p className="text-text text-center">{post.desc}</p>
    </a>
  );
}