import React from 'react';
import { Users, Award, Globe, Heart, Lightbulb, MapPin, Layers3, Zap, ArrowRight, Star, Quote, ExternalLink, CheckCircle, Gift, Shield, Leaf } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const B2B = () => {
  // Process Steps
  const processSteps = [
    {
      step: '1',
      title: 'Understanding',
      description: 'We understand your gifting requirements, budget, and corporate values to create the perfect solution.',
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />
    },
    {
      step: '2',
      title: 'Recommendation',
      description: 'Our team curates a personalized list of handcrafted products that align with your brand and occasion.',
      icon: <Star className="h-8 w-8 text-purple-600" />
    },
    {
      step: '3',
      title: 'Client Finalization',
      description: 'You review and select from our curated options, with samples available for quality assurance.',
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />
    },
    {
      step: '4',
      title: 'Delivery',
      description: 'Timely delivery with custom packaging, certificates of honor, and social media recognition.',
      icon: <Gift className="h-8 w-8 text-purple-600" />
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: 'Emotional Connect',
      description: 'Every gift tells a story of empowerment and transformation, creating meaningful connections.',
      icon: <Heart className="h-8 w-8 text-purple-600" />
    },
    {
      title: '100+ Women Uplifted',
      description: 'Your orders directly support former beedi workers, transforming their lives and communities.',
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Sustainable & Eco-friendly',
      description: 'All products are made from natural materials, supporting environmental responsibility.',
      icon: <Leaf className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Premium Quality',
      description: 'Handcrafted with attention to detail, ensuring exceptional quality and durability.',
      icon: <Award className="h-8 w-8 text-purple-600" />
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Kottravai's corporate gifts were a huge hit with our clients. The quality and story behind each piece made our gifting truly special.",
      author: "Priya Sharma, Marketing Director",
      company: "TechCorp Solutions"
    },
    {
      text: "We chose Kottravai for our employee appreciation gifts. The personalized certificates and social media recognition added great value.",
      author: "Rajesh Kumar, HR Manager",
      company: "InnovateTech"
    },
    {
      text: "Supporting women artisans while getting beautiful corporate gifts - it's a win-win partnership that aligns with our values.",
      author: "Anita Patel, CEO",
      company: "GreenFuture Ltd"
    }
  ];

  // Partners
  const partners = [
    { name: "Zoho Corporation", logo: "/public/assets/Partner/ZC.webp" },
    { name: "Vaazhai Incubator", logo: "/assets/Partner/V.png" },
    { name: "Crazy Coconut", logo: "/assets/Partner/CC.webp" },
    { name: "Raphael drones", logo: "/assets/Partner/RD.png" },
    { name: "Iyanthiran", logo: "/assets/Partner/I.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Corporate Gifting
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Gift the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Blessings</span> to Your Team
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-8 max-w-3xl mx-auto">
            Support 100+ former beedi workers while giving meaningful corporate gifts. 
            Every purchase uplifts rural women and creates lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="https://shop.kottravai.in/" variant="primary">
              Contact for Bulk Orders <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
                          <a
                href="/assets/giftpdf/cocob2b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition shadow-md bg-white text-purple-600 border border-purple-600 hover:bg-purple-50"
              >
                View Catlog <ExternalLink className="ml-2 h-5 w-5" />
              </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We transform corporate gifting into a force for good, connecting your business with meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Gifting</h3>
              <p className="text-gray-600">
                Handcrafted products perfect for employee appreciation, client gifts, and corporate events.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Women Empowerment</h3>
              <p className="text-gray-600">
                Every order supports rural women artisans, providing sustainable livelihoods and dignity.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Partnership</h3>
              <p className="text-gray-600">
                Custom packaging, certificates of honor, and social media recognition for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

  

      {/* Testimonials */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600">Success stories from corporate partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <Quote className="h-8 w-8 text-purple-200 mb-4" />
                <blockquote className="text-gray-700 italic text-sm mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.author.split(' ')[0][0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
       <section className="py-4 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
      <p className="text-lg text-gray-600">Leading companies choosing impact over ordinary gifting</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-semibold text-gray-900">{partner.name}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      
    </div>
  );
};

export default B2B; 