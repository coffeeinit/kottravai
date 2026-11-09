import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gift, Users, Target, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Donor = () => {
  const donationAreas = [
    {
      title: 'Tools & Equipment',
      amount: '₹5,000 - ₹25,000',
      description: 'Fund essential tools and equipment for artisans to improve their craft quality and productivity.',
      impact: '50+ artisans benefit',
      features: ['Crafting Tools', 'Quality Equipment', 'Safety Gear', 'Workspace Setup']
    },
    {
      title: 'Workshop Programs',
      amount: '₹10,000 - ₹50,000',
      description: 'Support training workshops and skill development programs for rural women.',
      impact: '100+ women trained',
      features: ['Skill Training', 'Quality Workshops', 'Certification Programs', 'Mentorship']
    },
    {
      title: 'Child Care Support',
      amount: '₹2,000 - ₹10,000',
      description: 'Provide child care facilities so mothers can focus on their craft and business.',
      impact: '200+ children cared for',
      features: ['Child Care Centers', 'Educational Support', 'Nutrition Programs', 'Safe Environment']
    }
  ];

  const impactStats = [
    { number: '₹50,00,000+', label: 'Total Donations', description: 'Raised for women empowerment' },
    { number: '1000+', label: 'Women Empowered', description: 'Through donor support' },
    { number: '25+', label: 'Villages Impacted', description: 'Across Tamil Nadu' },
    { number: '95%', label: 'Fund Utilization', description: 'Directly to beneficiaries' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join as a <span className="text-purple-600">Donor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Support Without Buying — Still Makes Change. Your donation helps us fund tools, 
              workshops, child care for artisans.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
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

      {/* Donation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Your Donation Goes</h2>
            <p className="text-xl text-gray-600">
              Choose how you want to make an impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Gift className="h-4 w-4 mr-2" />
                      {area.amount}
                    </div>
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <Target className="h-4 w-4 mr-2" />
                      {area.impact}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">Your donation funds:</h4>
                    {area.features.map((feature, idx) => (
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
                    Donate Now
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Donations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Donation <span className="text-purple-600">Makes a Difference</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every rupee you donate goes directly to empowering rural women. We maintain complete 
                transparency in how your funds are used and provide regular updates on the impact created.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Impact</h3>
                    <p className="text-gray-600">Your donation directly supports women artisans and their families.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Building</h3>
                    <p className="text-gray-600">Help build stronger, more sustainable rural communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparency</h3>
                    <p className="text-gray-600">Complete transparency in fund utilization and impact reporting.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                                 <CTAButton 
                   to="/contact"
                 >
                   Make a Donation
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
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women artisans at work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Empowering Through Giving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Call to Action */}
       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Your donation can transform lives and create lasting change in rural communities. 
            Every contribution matters.
          </p>
                     <CTAButton 
             to="/contact"
             variant="white"
             size="lg"
           >
             Donate Today
           </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Donor; 