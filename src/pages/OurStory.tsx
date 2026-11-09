import React from 'react';
import { Users, Award, Globe, Heart, Lightbulb, MapPin, Layers3, Zap, ArrowRight, Star, Quote, ExternalLink, MessageCircle, Home } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const OurStory = () => {
  // Core Values
  const coreValues = [
    {
      title: 'Women Empowerment',
      description: 'Creating opportunities for rural women to become financially independent through traditional crafts.',
      image: '/assets/story/womenpower.webp'
    },
    {
      title: 'Cultural Preservation',
      description: 'Preserving traditional crafts and cultural heritage while adapting to modern markets.',
      image: '/assets/story/culturalpreservation.webp'  
    },
    {
      title: 'Sustainable Development',
      description: 'Building sustainable livelihoods that benefit both artisans and their communities.',
      image: '/assets/story/sustainabledevelopment.webp'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Maintaining high standards of quality while supporting traditional techniques.',
      image: '/assets/story/qualitycraftsmanship.webp'
    }
  ];

  // Impact Stats
  const impactStats = [
    { number: '1000+', label: 'Women Empowered', image: '/assets/story/impactwomen.webp' },
    { number: '25+', label: 'Rural Villages', image: '/assets/story/impactvillage.webp' },
    { number: '6', label: 'Skill Hubs', image: '/assets/story/impactskill.webp' },
    { number: '150+', label: 'Product Lines', image: '/assets/story/impactproduct.webp' }
  ];

  // Hubs
  const hubs = [
    {
      image: '/assets/story/coconut.webp',
      title: 'Coconut Shell Craft Hub',
      desc: 'Transforming discarded coconut shells into beautiful, functional art pieces.'
    },
    {
      image: '/assets/story/banana.jpeg',
      title: 'Banana Bark Hub',
      desc: 'Working with natural bark fibers to create elegant designs.'
    },
    {
      image: '/assets/story/weaving.jpeg',
      title: 'Weaving Hub',
      desc: 'Handcrafted baskets and textiles that tell stories of cultural heritage.'
    },
    {
      image: '/assets/story/electronics.webp',
      title: 'Electronics Hub',
      desc: 'Bridging the digital divide through careful electronics assembly.'
    },
    {
      image: '/assets/story/pottery.webp',
      title: 'Pottery Hub',
      desc: 'Handcrafted baskets and textiles that tell stories of cultural heritage.'
    },
    {
      image: '/assets/story/ev.webp',
      title: 'EV Hub',
      desc: 'Handcrafted baskets and textiles that tell stories of cultural heritage.'
    }
  ];

  // Team
  const team = [
    { name: 'Sridhar Vembu', role: 'Chief Mentor', desc: 'Global advocate for rural innovation, driving technology-enabled transformation.' },
    { name: 'Ananthan Ayyasamy', role: 'Co-Founder', desc: 'Community mobilizer connecting grassroots needs with scalable solutions.' },
    { name: 'Karunya Gunavathy', role: 'Co-Founder & CEO', desc: 'Visionary leader transforming rural communities through dignified skill development.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            From Beedi Dust to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Brilliance</span>
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-8 max-w-3xl mx-auto">
            Transforming rural women from beedi rollers to skilled artisans, creating sustainable livelihoods while preserving traditional crafts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="https://shop.kottravai.in/" variant="primary">
              Shop Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton to="/b2b" variant="secondary">
              Bulk Orders <Star className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower rural women by providing them with skills, training, and market access 
                to transform their traditional crafts into sustainable livelihoods. We bridge the 
                gap between ancient wisdom and modern opportunities.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a world where every rural woman has the opportunity to become an 
                entrepreneur, where traditional Indian crafts are celebrated globally, and where 
                sustainable development creates thriving communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Real change, measured in lives transformed</p>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-48">
              <img 
                src={stat.image} 
                alt={stat.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our mission</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-48">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Hubs */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Skill Hubs</h2>
            <p className="text-lg text-gray-600">Where traditional crafts meet modern innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubs.map((hub, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-4 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={hub.image} 
                      alt={hub.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{hub.title}</h3>
                </div>
                <p className="text-gray-600">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">The visionaries driving this transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {person.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3">
                  {person.role}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default OurStory;