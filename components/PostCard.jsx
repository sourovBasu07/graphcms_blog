import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute object-top w-full h-80 object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="font-semibold text-3xl text-center mb-8 transition duration-700 hover:text-pink-600 cursor-pointer">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex justify-center items-center w-full text-center mb-8">
        <div className="w-full lg:w-auto flex justify-center items-center mb-4 lg:mb-0 mr-8">
          <Image
            unoptimized
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
          />
          <p className="inline font-medium text-gray-700 align-middle ml-2">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal mb-8 px-4 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="inline-block font-medium text-white text-lg bg-pink-600 rounded-full px-8 py-3 transition ease duration-500 transform hover:-translate-y-1 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
