import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.thenewsapi.com/v1/news/top?api_token=y4rv1tjXJMslmoKX782WqMbTNnv1oCOZtxMh3R3L&locale=us&limit=3'
        );
        
        // Ensure response structure is correct
        if (response.data && response.data.data) {
          setData(response.data.data); // Adjust to match actual structure
        } else {
          setError("No news articles available.");
        }
      } catch (err) {
        // Log the detailed error for debugging
        console.error('Axios error:', err);
  
        // Handle specific error types
        if (err.response) {
          // The request was made, and the server responded with a status code
          console.error('Response error:', err.response.data);
          setError(`Error: ${err.response.data.message || 'Unable to fetch data.'}`);
        } else if (err.request) {
          // The request was made, but no response was received
          console.error('Request error:', err.request);
          setError("No response received. Please try again later.");
        } else {
          // Something happened in setting up the request
          setError(`Request setup error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const readMore = (article) => {
    navigate(`/news/${article.title}`, { state: { article } });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-2xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Latest News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              {item.image_url && ( // Adjust based on actual image field name
                <img
                  src={item.image_url}
                  alt={item.title || 'News Image'}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                  {item.title || 'Untitled'}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{item.description || 'No description available.'}</p>
                <button
                  onClick={() => readMore(item)}
                  className="mt-4 text-blue-500 hover:underline font-medium"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
