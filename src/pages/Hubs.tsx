import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Heart, ArrowRight, Star } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Hubs = () => {
  const hubs = [
    {
      name: 'Coconut Crafting Hub',
      location: 'Tenkasi, Tamil Nadu',
      description: 'Specializing in coconut-based products and traditional crafts.',
      artisans: '150+ Women',
      products: 'Coconut Bowls, Coasters, Jewelry',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Active',
      features: ['Traditional Crafting', 'Quality Training', 'Market Access', 'Community Support']
    },
    {
      name: 'Weaving Hub',
      location: 'Madurai, Tamil Nadu',
      description: 'Focusing on traditional textile weaving and modern designs.',
      artisans: '200+ Women',
      products: 'Handwoven Textiles, Bags, Scarves',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Active',
      features: ['Textile Weaving', 'Design Innovation', 'Quality Control', 'Export Ready']
    },
    {
      name: 'Electronics Hub',
      location: 'Chennai, Tamil Nadu',
      description: 'Modern electronics assembly and quality control training.',
      artisans: '100+ Women',
      products: 'Electronic Accessories, Components',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Active',
      features: ['Electronics Training', 'Quality Standards', 'Safety Protocols', 'Modern Equipment']
    }
  ];

  const hubStats = [
    { number: '3', label: 'Active Hubs', description: 'Across Tamil Nadu' },
    { number: '450+', label: 'Women Artisans', description: 'Working across hubs' },
    { number: '25+', label: 'Product Categories', description: 'Handcrafted items' },
    { number: '95%', label: 'Quality Rating', description: 'Customer satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-purple-600">Hubs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              See the magic happening firsthand. Visit our crafting hubs to understand our impact 
              and meet our amazing artisans.
            </p>
            
            {/* Hub Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {hubStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hubs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Crafting Hubs</h2>
            <p className="text-xl text-gray-600">
              Each hub specializes in different crafts and provides comprehensive support to artisans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hubs.map((hub, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {hub.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{hub.name}</h3>
                  <p className="text-gray-600 mb-4">{hub.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {hub.location}
                    </div>
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      {hub.artisans}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Products:</h4>
                    <p className="text-sm text-gray-600">{hub.products}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">Hub Features:</h4>
                    {hub.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
                  >
                    Visit Hub
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Hubs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Where <span className="text-purple-600">Magic Happens</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our hubs are more than just workspaces - they're communities where women come together 
                to learn, create, and support each other. Each hub is designed to provide the best 
                environment for skill development and business growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Building</h3>
                    <p className="text-gray-600">Women support each other and share knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Standards</h3>
                    <p className="text-gray-600">Maintaining high quality across all products.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Skill Development</h3>
                    <p className="text-gray-600">Continuous training and skill enhancement.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  to="/contact"
                >
                  Schedule a Visit
                </CTAButton>
                <CTAButton 
                  to="/story"
                  variant="secondary"
                >
                  Learn Our Story
                </CTAButton>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hub workspace"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Creating Together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Call to Action */}
       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit Our Hubs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            See the magic happening firsthand and meet our amazing artisans. 
            Schedule a visit to any of our hubs today.
          </p>
          <CTAButton 
            to="/contact"
            variant="white"
            size="lg"
          >
            Schedule a Visit Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Hubs;