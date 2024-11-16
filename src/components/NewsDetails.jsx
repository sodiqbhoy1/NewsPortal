import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely extract the article from location.state
  const article = location.state?.article;

  // Handle cases where the article is not passed (e.g., user visits the page directly)
  if (!article) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">No news article selected.</p>
        <button
          onClick={() => navigate("/")}
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-300 shadow-md"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-300 shadow-md"
        >
          ← Back
        </button>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title || "News Image"}
              className="w-full h-72 object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {article.title || "No Title"}
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {article.content || article.description || "No content available."}
            </p>
            {article.url && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition ease-in-out duration-300 shadow-lg"
              >
                View Original Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
