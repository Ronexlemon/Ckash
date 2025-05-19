"use client";

import { useEffect, useState } from "react";
import ExternalBlogPost from "../components/ExternalBlogPost";
import { Article } from "../utils/types";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            "https://medium.com/feed/@ckashApp"
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();

        if (data.status === "ok" && data.items) {
          setArticles(data.items);
          console.log(data.items);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load articles"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Header with Hero Image */}
      <div className="relative h-[300px] md:h-[400px] w-full z-1">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("hero-bg.png")',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-4xl mx-auto px-4 -mt-32 z-100 bg-white pb-12">
        {/* Featured External Blog Post */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-8">
            {loading ? (
              <div>Loading articles...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              articles.map((article) => (
                <ExternalBlogPost key={article.guid} article={article} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
