"use client";

import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Article } from "../utils/types";

interface ExternalBlogPostProps {
  article: Article;
}

export default function ExternalBlogPost({ article }: ExternalBlogPostProps) {
  const imageUrl =
    article.description.match(/<img[^>]+src="([^">]+)"/)?.[1] ||
    "/blog/placeholder.jpg";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover md:relative"
          />
        </div>
        <div className="p-6 md:w-2/3 bg-gray-50 z-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{article.author}</span>
            <span className="text-sm text-gray-500">
              {new Date(article.pubDate).toLocaleDateString()}
            </span>
          </div>
          <h2 className="text-basel font-bold mb-2 text-blue-600 transition-colors duration-300">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">
            {article.description.replace(/<[^>]*>/g, "")}
          </p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white  px-2.5 py-1.5  rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300"
          >
            Read More <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
