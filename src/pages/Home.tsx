import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, ExternalLink, Quote, Users, Award, Calendar, MapPin, ShieldCheck, MessageCircle, Smile, ShoppingBag, Truck, CreditCard, Headphones } from 'lucide-react';

const Home = () => {
  // Hero Section Data
  const heroStats = [
    { value: '200+', label: 'Artisans', image: '/assets/artisian.webp' },
    { value: '500+', label: 'Products', image: '/assets/product.webp' },
    { value: '100%', label: 'Handmade', image: '/assets/handmade.webp' },
  ];

  // Why Kottravai Data
  const features = [
    {
      image: '/assets/purchase_empower.webp',
      title: 'Every Purchase Empowers',
      description: 'Your shopping directly supports rural women artisans and their families.'
    },
    {
      image: '/assets/ecofriendly.webp',
      title: 'Sustainable & Ethical',
      description: 'Eco-friendly materials and fair trade practices in every product.'
    },
    {
      image: './assets/womenmade.jpeg',
      title: 'Skilled Artisans',
      description: 'Trained women creating quality products with traditional expertise.'
    },
    {
      image: './assets/connectwith.jpeg',
      title: 'Meet Your Maker',
      description: 'Connect with the artisan behind every product you purchase.'
    }
  ];

  const cardColors = [
    'from-purple-100 to-purple-50',
    'from-green-100 to-green-50',
    'from-pink-100 to-pink-50',
    'from-orange-100 to-orange-50',
  ];

  // Featured Products Data
  const featuredProducts = [
    {
      name: "Handcrafted Coconut Shell Bowls",
      price: "₹1,200",
      image: "/assets/cocnuthub.jpg",
      category: "Kitchen & Dining",
      description: "Traditional coconut shell bowls crafted by rural women artisans"
    },
    {
      name: "Eco-friendly Banana Bark Baskets",
      price: "₹850",
      image: "/assets/img1.jpg",
      category: "Home Decor",
      description: "Sustainable baskets made from natural banana bark fibers"
    },
    {
      name: "Handwoven Coir Floor Mats",
      price: "₹650",
      image: "/assets/tenkasi.jpeg",
      category: "Flooring",
      description: "Durable coir mats woven by skilled women artisans"
    },
    {
      name: "Artisan Handcrafted Jewelry",
      price: "₹1,500",
      image: "/assets/firstsale.jpeg",
      category: "Fashion",
      description: "Unique jewelry pieces created with traditional techniques"
    }
  ];

  // Impact Stories Data
  const impactStories = [
    {
      title: "Empowering Rural Women",
      description: "Supporting women artisans in Tamil Nadu through skill development and market access",
      image: "/assets/empowersec.webp",
      stats: "1000+ Women Trained"
    },
    {
      title: "Sustainable Livelihoods",
      description: "Creating sustainable income opportunities through traditional crafts and modern markets",
      image: "/assets/sustainablelife.webp",
      stats: "5000+ Products Created"
    },
    {
      title: "Community Development",
      description: "Building stronger communities through women's economic empowerment and skill sharing",
      image: "/assets/communitydev.webp",
      stats: "50+ Villages Impacted"
    },
    {
      title: "Cultural Preservation",
      description: "Preserving traditional crafts and cultural heritage while creating economic opportunities",
      image: "/assets/culturalpreservation.webp",
      stats: "15+ Craft Categories"
    }
  ];

  // Shopping Benefits Data
  const shoppingBenefits = [
    {
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹999 across India'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-grade security'
    },
    {
      icon: <Headphones className="h-8 w-8 text-pink-600" />,
      title: '24/7 Support',
      description: 'Get help anytime with our dedicated support team'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-600" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all products'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
            
            {/* Left: Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Tagline */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="relative flex-shrink-0">
                  <img 
                    src="/assets/motherwithchildvector.svg" 
                    alt="Mother with child" 
                    className="h-8 w-8 lg:h-12 lg:w-12" 
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-pink-500 rounded-full animate-pulse" />
                </div>
                <span className="text-base lg:text-xl font-semibold text-purple-600">
                  Handcrafted with Love by Rural Women
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Beedi Dust
                  </span> to Beautiful Art
                </h1>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Every product tells a story of transformation. Rural women who once rolled beedis now create beautiful handcrafted items that empower their families and preserve traditional crafts.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link
                  to="/story"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Star className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="https://shop.kottravai.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-600 text-purple-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group"
                >
                  <ShoppingBag className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Shop Products
                  <ExternalLink className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 lg:gap-6 pt-6 lg:pt-8">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-sm border border-purple-100">
                      
                      <div className="text-lg lg:text-2xl font-bold text-purple-700 mb-1">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl p-4 lg:p-6 shadow-xl">
                <img
                  src="/assets/tenkasi.jpeg"
                  alt="Women craftsperson working on handmade products"
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating tags */}
                <div className="absolute -top-2 lg:-top-4 left-2 lg:left-4 bg-white rounded-xl p-2 lg:p-3 shadow-lg border border-purple-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-xs lg:text-sm font-semibold text-gray-900">
                      Handmade by rural women
                    </span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 lg:-bottom-4 right-2 lg:right-4 bg-white rounded-xl p-2 lg:p-3 shadow-lg border border-purple-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs lg:text-sm font-semibold text-gray-900">
                      Free shipping on ₹999+
                    </span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY SHOP WITH US SECTION */}
      <section className="py-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop with Kottravai?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              <span className="block font-semibold text-purple-700 mb-2">Every purchase makes a difference.</span>
              <span className="block mt-2">Support rural women artisans while getting beautiful, handcrafted products.</span>
            </p>
          </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`bg-gradient-to-br ${cardColors[index]} rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
    >
      {/* Image container spans full width */}
      <div className="w-full h-40">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-700 text-base font-medium">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

   


      {/* 5. IMPACT STORIES SECTION */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Transforming lives and communities through women's empowerment
            </p>
          </div>
          {/* Main impact stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStories.map((story, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-purple-100 overflow-hidden"
            >
              {/* Image container spans full width */}
              <div className="w-full h-48">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                <div className="text-lg font-semibold text-purple-600">{story.stats}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      
      
      {/* 4. SHOPPING BENEFITS SECTION */}
      <section className="py-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shopping with Confidence</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We make your shopping experience seamless and secure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shoppingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. CTA SECTION */}
      <section className="py-4 lg:py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Shop Handcrafted Treasures?
            </h2>
            <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of customers who are supporting rural women artisans while getting beautiful, quality products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop.kottravai.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                <ShoppingBag className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                Start Shopping
                <ExternalLink className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <Link
                to="/story"
                className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
              >
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;