import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Volunteer = () => {
  const volunteerRoles = [
    {
      title: 'Material Sorting & Preparation',
      duration: '2-4 Hours',
      location: 'All Hubs',
      description: 'Help sort and prepare raw materials for artisans, ensuring quality standards.',
      features: ['Material Sorting', 'Quality Check', 'Inventory Management']
    },
    {
      title: 'Story Documentation',
      duration: '3-5 Hours',
      location: 'Remote/On-site',
      description: 'Document artisan stories, create content, and help amplify our impact.',
      features: ['Photography', 'Video Creation', 'Content Writing']
    },
    {
      title: 'Logistics & Operations',
      duration: '4-6 Hours',
      location: 'Hub Locations',
      description: 'Support day-to-day operations, inventory management, and hub coordination.',
      features: ['Inventory Management', 'Order Processing', 'Quality Control']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join as a <span className="text-purple-600">Volunteer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Time is also a gift. Help us sort raw materials, document artisan stories, 
              manage logistics, or simply spend time at our hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">
              Choose the role that matches your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      {role.duration}
                    </div>
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {role.location}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">What You'll Do:</h4>
                    {role.features.map((feature, idx) => (
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Give Your Time?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our volunteer community and be part of a movement that's transforming 
            lives and building stronger communities across rural India.
          </p>
          <CTAButton 
            to="/contact"
            variant="white"
            size="lg"
          >
            Start Volunteering Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
