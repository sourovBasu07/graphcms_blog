import React from "react";
import moment from "moment";
import Link from "next/link";

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div
      className="absolute w-full h-72 bg-center bg-no-repeat bg-cover rounded-lg inline-block shadow-md"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute w-full h-72 bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black" />
    <div className="absolute w-full h-full flex flex-col justify-center items-center rounded-lg p-4">
      <p className="font-semibold text-white text-shadow text-xs mb-4">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="font-semibold text-white text-shadow text-2xl mb-4">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="absolute w-full h-full z-10 cursor-pointer" />
    </Link>
    {position === "LEFT" && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    )}
    {position === "RIGHT" && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
