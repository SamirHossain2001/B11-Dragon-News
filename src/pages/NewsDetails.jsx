import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import { FaStar, FaFacebook, FaTwitter, FaShareAlt } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data && id) {
      const newsDetails = data.find((news) => news.id == id);
      if (newsDetails) {
        setNews(newsDetails);
      } else {
        console.warn("No news found with id:", id);
      }
    }
  }, [data, id]);

  const handleRating = (value) => setRating(value);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      alert(`Comment submitted:\n"${comment}"\nRating: ${rating} stars`);
      setComment("");
      setRating(0);
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-8">
        <section className="col-span-9 space-y-8">
          <h2 className="font-bold text-xl mb-5">Dragon News</h2>

          {/* News Content */}
          <NewsDetailsCard news={news} />

          {/* Rating Section */}
          <div className="bg-base-200 p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Rate this article:</h3>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer ${
                    rating >= star ? "text-yellow-400" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-base-200 p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Leave a comment:</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full p-3 rounded bg-base-100 border border-base-300 text-base-content"
                rows="4"
                placeholder="Write your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
              <button
                type="submit"
                className="mt-3 bg-secondary text-base-100 px-5 py-2 rounded hover:opacity-90">
                Submit Comment
              </button>
            </form>
          </div>

          {/* Share Options */}
          <div className="bg-base-200 p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Share this news:</h3>
            <div className="flex gap-4 text-xl text-secondary">
              <FaFacebook className="cursor-pointer hover:opacity-80" />
              <FaTwitter className="cursor-pointer hover:opacity-80" />
              <FaShareAlt className="cursor-pointer hover:opacity-80" />
            </div>
          </div>

          {/* Related News */}
          <div className="bg-base-200 p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Related News</h3>
            <ul className="list-disc pl-5 space-y-2 text-base-content">
              {data
                .filter((item) => item.id !== news.id)
                .slice(0, 3)
                .map((related) => (
                  <li key={related.id}>
                    <a
                      href={`/news-details/${related.id}`}
                      className="hover:text-secondary">
                      {related.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
