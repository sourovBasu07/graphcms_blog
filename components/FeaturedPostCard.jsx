import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
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
      <div className="absolute w-full flex justify-center items-center bottom-5">
        <Image
          unoptimized
          src={post.author.photo.url}
          alt={post.author.name}
          width="30px"
          height="30px"
          className="align-middle drop-shadow-lg rounded-full"
        />
        <p className="inline align-middle text-white text-shadow font-medium ml-2">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="absolute w-full h-full cursor-pointer" />
    </Link>
  </div>
);

export default FeaturedPostCard;
