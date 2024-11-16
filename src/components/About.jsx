import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About <span className="text-blue-600">NextUpdate</span>
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to NextUpdate, your trusted source for the latest news from around the world. Our mission is to provide
          accurate, up-to-date information on a variety of topics, including politics, sports, entertainment, and technology.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team of dedicated journalists and content creators work tirelessly to deliver breaking news and in-depth articles to keep you informed. Whether you're interested in the latest headlines or looking for thoughtful commentary, we have something for everyone.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Choose NextUpdate?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold">✔</span>
            <p className="ml-2 text-lg text-gray-700">Reliable and up-to-date news from trusted sources.</p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold">✔</span>
            <p className="ml-2 text-lg text-gray-700">Comprehensive coverage of all major topics: politics, sports, entertainment, and more.</p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold">✔</span>
            <p className="ml-2 text-lg text-gray-700">Easy navigation and user-friendly interface for a seamless experience.</p>
          </li>
        </ul>
      </section>

     
    </div>
  </div>
  )
}

export default About
