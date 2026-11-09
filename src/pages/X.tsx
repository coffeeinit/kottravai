import { ArrowRight, Sparkles, Users, TrendingUp, Heart, Trophy, Star } from 'lucide-react';

const X = () => {

  const featuredBrands = [
    {
      name: 'Kalai Naturals',
      category: 'Wellness',
      emoji: '🌿',
      location: 'Tamil Nadu',
      description: 'Crafting wellness from nature\'s bounty',
      rating: 4.8
    },
    {
      name: 'Aura Handlooms',
      category: 'Handmade',
      emoji: '🧵',
      location: 'Kerala',
      description: 'Weaving stories, one thread at a time',
      rating: 4.9
    },
    {
      name: 'Earth Bites',
      category: 'Food',
      emoji: '🌾',
      location: 'Karnataka',
      description: 'Organic goodness from our farms',
      rating: 4.7
    },
    {
      name: 'Craft Stories',
      category: 'Craft',
      emoji: '🏺',
      location: 'Rajasthan',
      description: 'Traditional pottery for modern homes',
      rating: 4.8
    }
  ];

  const testimonials = [
    {
      name: 'Meena Devi',
      brand: 'Kalai Naturals',
      quote: 'Selling through Kottravai X gave us confidence, customers, and a new future. Our herbal products now reach customers across India.'
    },
    {
      name: 'Radha Krishnan',
      brand: 'Aura Handlooms',
      quote: 'The platform helped us preserve our traditional weaving techniques while reaching modern customers who value authenticity.'
    },
    {
      name: 'Priya Sharma',
      brand: 'Earth Bites',
      quote: 'From a small farm in Karnataka to customers nationwide - Kottravai X made our organic food business dreams come true.'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Active Brands', icon: <Users className="h-6 w-6" /> },
    { number: '50,000+', label: 'Happy Customers', icon: <Heart className="h-6 w-6" /> },
    { number: '300%', label: 'Growth Rate', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '25+', label: 'Awards Won', icon: <Trophy className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#f21094]">Empowering Brands.</span>
                <span className="text-black block">Enriching Stories.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/explore-brand.php" className="bg-violet-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-900 transition-colors inline-flex items-center justify-center group">
                  Explore All Brands
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/become-seller.php" className="bg-white border-2 border-violet-800 text-violet-800 px-8 py-4 rounded-lg font-semibold hover:bg-violet-800 hover:text-white transition-colors inline-flex items-center justify-center">
                  Become a Seller
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-violet-800/10 rounded-xl flex items-center justify-center mb-4">
                      <Sparkles className="text-violet-800" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Brand Spotlight</h3>
                    <p className="text-gray-600 text-sm">Build your own brand within our ecosystem</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-violet-800/10 rounded-xl flex items-center justify-center mb-4">
                      <Users className="text-violet-800" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mentorship</h3>
                    <p className="text-gray-600 text-sm">Access training & support system</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-violet-800/10 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="text-violet-800" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Scale with Purpose</h3>
                    <p className="text-gray-600 text-sm">Sell ethically without compromising values</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-violet-800/10 rounded-xl flex items-center justify-center mb-4">
                      <Heart className="text-violet-800" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visibility</h3>
                    <p className="text-gray-600 text-sm">Reach conscious customer base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  
      {/* Brand Spotlight */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Spotlight</h2>
            <p className="text-xl text-gray-600">Build your own brand within our ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-600">Access training & support system</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale with Purpose</h3>
              <p className="text-gray-600">Sell ethically without compromising values</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50">
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visibility</h3>
              <p className="text-gray-600">Reach conscious customer base</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Join a network of purpose-driven brands</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Purpose-Driven Marketplace for Emerging Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Kottravai X is a collaborative space designed to help purpose-led brands — especially those rooted in rural craft, sustainability, and heritage — grow and reach global markets. We give you your own brand presence, marketing support, and customer reach, while you remain in control of your product and story.
            </p>
            <blockquote className="text-2xl font-semibold text-purple-600 italic">
              "Your brand. Your values. Our platform."
            </blockquote>
          </div>
        </div>
      </section>

   
      {/* Featured Brands */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h2>
            <p className="text-xl text-gray-600">Meet some of the amazing brands thriving on Kottravai X</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{brand.emoji}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{brand.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{brand.category}</p>
                <p className="text-sm text-gray-600 mb-2">{brand.location}</p>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <button className="w-full text-purple-600 font-semibold hover:text-purple-700 flex items-center justify-center">
                  Visit Brand
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Brands Say</h2>
            <p className="text-xl text-gray-600">Stories of success from our brand partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-purple-600">{testimonial.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Kottravai X?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Whether you're a brand looking to grow or a customer seeking authentic products, Kottravai X is your destination for purpose-driven commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Explore Brands
            </button>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default X;
