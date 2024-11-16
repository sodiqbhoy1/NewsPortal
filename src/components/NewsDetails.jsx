import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NewsDetails = () => {
    const location= useLocation();
    const {article} = location.state
    const navigate= useNavigate();

  return (
     <div className="bg-gray-100 py-10">
         <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Back
        </button>
      <div className="max-w-4xl mx-auto px-4 bg-white shadow-lg rounded-lg p-6">
       
       
       
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <p className="text-gray-700 mb-6">
        {article.content ? article.content : article.description}
            </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Original Source
        </a>
      </div>
    </div>
  )
}

export default NewsDetails
