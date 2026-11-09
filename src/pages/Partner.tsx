import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Users, Target, ArrowRight, Star, MapPin } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Partner = () => {
  const partnershipTypes = [
    {
      title: 'Corporate Partnerships',
      description: 'Partner with us to create sustainable supply chains and empower rural communities.',
      benefits: ['CSR Initiatives', 'Supply Chain Integration', 'Brand Collaboration', 'Impact Reporting'],
      commitment: 'Long-term partnerships'
    },
    {
      title: 'NGO Collaborations',
      description: 'Work together to amplify our impact and reach more rural communities.',
      benefits: ['Joint Programs', 'Resource Sharing', 'Capacity Building', 'Community Outreach'],
      commitment: 'Project-based partnerships'
    },
    {
      title: 'Educational Institutions',
      description: 'Partner with universities and training institutes to develop skills and research.',
      benefits: ['Research Projects', 'Skill Development', 'Student Programs', 'Knowledge Exchange'],
      commitment: 'Academic partnerships'
    }
  ];

  const partnerStats = [
    { number: '25+', label: 'Corporate Partners', description: 'Supporting our mission' },
    { number: '15+', label: 'NGO Collaborations', description: 'Amplifying our impact' },
    { number: '10+', label: 'Educational Partners', description: 'Building capacity' },
    { number: '₹2,00,00,000+', label: 'Partnership Value', description: 'Collective investment' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Partner <span className="text-purple-600">With Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you're a designer, engineer, baker, or business leader — your expertise can light the way. 
              Join us in creating sustainable impact.
            </p>
            
            {/* Partner Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {partnerStats.map((stat, index) => (
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

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">
              Choose the partnership model that aligns with your goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Handshake className="h-4 w-4 mr-2" />
                      {type.commitment}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">Partnership Benefits:</h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <CTAButton 
                    to="/contact"
                    className="w-full"
                  >
                    Partner With Us
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Together We <span className="text-purple-600">Create Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our partnerships are built on shared values and mutual goals. We work with organizations 
                that believe in empowering rural women and creating sustainable communities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Handshake className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Shared Vision</h3>
                    <p className="text-gray-600">Partnerships based on common goals and values.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Measurable Impact</h3>
                    <p className="text-gray-600">Clear metrics and reporting on partnership outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Focus</h3>
                    <p className="text-gray-600">All partnerships benefit rural women and communities.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                                 <CTAButton 
                   to="/contact"
                 >
                   Become a Partner
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
                alt="Partnership collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Handshake className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Building Together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Call to Action */}
       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our network of partners and help us create lasting change in rural communities. 
            Your expertise can light the way.
          </p>
                     <CTAButton 
             to="/contact"
             variant="white"
             size="lg"
           >
             Partner With Us Today
           </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Partner; 