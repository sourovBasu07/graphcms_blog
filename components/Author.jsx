import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative bg-black bg-opacity-20 rounded-lg text-center mt-20 mb-8 p-12">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          width="100px"
          height="100px"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="">{author.name}</h3>
      <p className="text-white text-xs">{author.bio}</p>
    </div>
  );
};

export default Author;
