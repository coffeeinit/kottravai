import React from 'react';
import { Newspaper, ArrowRight, Calendar, Tag, ExternalLink } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Kottravai Wins Social Impact Award',
      date: 'February 28, 2024',
      category: 'Awards',
      desc: 'Recognized for outstanding contribution to women empowerment through craft.',
      link: '#',
      image: '/assets/img1.jpg'
    },
    {
      title: 'New Hub Launched in Puliyangudi',
      date: 'February 15, 2024',
      category: 'Expansion',
      desc: 'Expanding our reach to serve more rural women artisans.',
      link: '#',
      image: '/assets/tenkasi.jpeg'
    },
    {
      title: 'Partnership with National Craft Council',
      date: 'January 30, 2024',
      category: 'Partnerships',
      desc: 'Collaborating to preserve and promote traditional Indian crafts.',
      link: '#',
      image: '/assets/creators.jpg'
    },
    {
      title: 'Digital Transformation for Rural Artisans',
      date: 'January 15, 2024',
      category: 'Innovation',
      desc: 'Introducing digital tools to help artisans reach global markets.',
      link: '#',
      image: '/assets/cocnuthub.jpg'
    },
    {
      title: 'Women Empowerment Program Success',
      date: 'December 20, 2023',
      category: 'Impact',
      desc: 'Over 500 women artisans trained and empowered through our programs.',
      link: '#',
      image: '/assets/firstsale.jpeg'
    },
    {
      title: 'Sustainable Craft Practices Initiative',
      date: 'December 10, 2023',
      category: 'Sustainability',
      desc: 'Launching eco-friendly practices in traditional craft production.',
      link: '#',
      image: '/assets/motherwithchildvector.svg'
    }
  ];

  const categories = ['All', 'Awards', 'Expansion', 'Partnerships', 'Innovation', 'Impact', 'Sustainability'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Latest News & Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Updated with Kottravai
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            Latest developments, achievements, and stories from our community
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-lg text-gray-600">Stay updated with our latest developments</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-purple-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{item.desc}</p>
                  <a href={item.link} className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">Get the latest news and updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none"
            />
            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 