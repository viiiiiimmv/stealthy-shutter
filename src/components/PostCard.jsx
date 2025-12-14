import React from "react";
import InstagramIcon from "./InstagramIcon";

const PostCard = ({ post }) => {
  return (
    <article
    className="
      mb-6 break-inside-avoid relative rounded-2xl overflow-hidden
      group border transition-all duration-300
      border-[rgba(255,255,255,0.2)]
      group-hover:border-[rgba(255,255,255,0.4)]
      ring-0 ring-white/10
      group-hover:ring-2 group-hover:ring-white/30
      group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
    "
    >
      <img
        src={post.src}
        alt={post.title || "Gallery image"}
        loading="lazy"
        className="w-full h-auto block rounded-2xl transform transition duration-300 group-hover:scale-[1.02] object-cover"
        style={{ display: "block" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 flex flex-col justify-end p-4 gap-3 z-10">
        <h3 className="font-galant text-white text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
          {post.title}
        </h3>

        <div className="flex items-center justify-between w-full">
          <a
            href={post.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${post.title} on Instagram`}
            className="inline-flex items-center gap-2 bg-white/90 text-black rounded-full px-3 py-1 text-sm shadow-sm transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <InstagramIcon />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          <span className="ml-auto text-white/90 text-xs">#{post.id}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
