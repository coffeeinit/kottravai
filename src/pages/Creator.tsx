import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, ArrowRight, Star, MapPin, BookOpen } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Creator = () => {
  const creatorBenefits = [
    {
      title: 'Training & Skill Development',
      description: 'Master traditional crafts with modern techniques and quality standards.',
      features: ['Hands-on Training', 'Quality Workshops', 'Certification Programs', 'Mentorship'],
      icon: <BookOpen className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Market Access & Support',
      description: 'Connect with global markets and receive ongoing business support.',
      features: ['Global Market Access', 'Business Mentoring', 'Quality Standards', 'Brand Support'],
      icon: <Target className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Community & Network',
      description: 'Join a network of women entrepreneurs supporting each other\'s growth.',
      features: ['Peer Network', 'Community Support', 'Knowledge Sharing', 'Collaboration'],
      icon: <Users className="h-6 w-6 text-purple-600" />
    }
  ];

  const creatorStats = [
    { number: '1000+', label: 'Women Creators', description: 'Active across all hubs' },
    { number: '₹25,000', label: 'Avg Monthly Income', description: 'Income improvement' },
    { number: '50+', label: 'Villages Reached', description: 'Across Tamil Nadu' },
    { number: '95%', label: 'Success Rate', description: 'Program completion' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join as a <span className="text-purple-600">Creator</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your traditional skills into sustainable livelihoods. We provide training, 
              market access, and support for rural women artisans.
            </p>
            
            {/* Creator Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {creatorStats.map((stat, index) => (
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

      {/* Creator Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join as a Creator?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive support to transform your skills into sustainable income
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {creatorBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">What you get:</h4>
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <CTAButton 
                    to="/contact"
                    className="w-full"
                  >
                    Apply Now
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Being a Creator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-purple-600">Skills</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're skilled in traditional crafts, farming, or have other talents, 
                we help you turn your abilities into sustainable income. Our comprehensive 
                support system ensures your success.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <BookOpen className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Skill Development</h3>
                    <p className="text-gray-600">Enhance your existing skills with modern techniques and quality standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market Access</h3>
                    <p className="text-gray-600">Connect with global markets and customers for your products.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600">Join a network of women entrepreneurs supporting each other.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                                 <CTAButton 
                   to="/contact"
                 >
                   Become a Creator
                 </CTAButton>
                 <CTAButton 
                   to="/hubs"
                   variant="secondary"
                 >
                   Visit Our Hubs
                 </CTAButton>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women creators at work"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Skills?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community of creators and turn your traditional skills into sustainable income. 
            Your journey to empowerment starts here.
          </p>
                     <CTAButton 
             to="/contact"
             variant="white"
             size="lg"
           >
             Become a Creator Today
           </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Creator; 