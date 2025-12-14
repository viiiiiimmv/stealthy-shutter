import React from "react";
import PostCard from "../components/PostCard";

const Gallery = ({ posts = [] }) => {
  return (
    <>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className='text-5xl font-galant text-white'>
            Gallery
          </h1>
        </header>

        <div className="relative" aria-live="polite">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
