import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, Target, Heart, ArrowRight, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Mentorship = () => {
  const programStats = [
    { number: '1000+', label: 'Women Trained', description: 'Across all our programs' },
    { number: '95%', label: 'Success Rate', description: 'Program completion rate' },
    { number: '₹25,000', label: 'Avg Income Increase', description: 'Monthly income improvement' },
    { number: '50+', label: 'Villages Reached', description: 'Across Tamil Nadu' }
  ];

  const mentorshipPrograms = [
    {
      title: 'Skill Development Program',
      duration: '3 Months',
      participants: '50+ Women',
      description: 'Comprehensive training in traditional crafts, modern techniques, and quality standards.',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Hands-on Training', 'Quality Control', 'Tool Provision', 'Certification'],
      nextBatch: '2025-02-15'
    },
    {
      title: 'Business Leadership Program',
      duration: '6 Months',
      participants: '25+ Women',
      description: 'Advanced program focusing on entrepreneurship, leadership, and business management.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Business Planning', 'Financial Literacy', 'Marketing Skills', 'Leadership Training'],
      nextBatch: '2025-03-01'
    },
    {
      title: 'Digital Literacy Program',
      duration: '2 Months',
      participants: '100+ Women',
      description: 'Essential digital skills for modern business operations and online market access.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Computer Basics', 'Online Marketing', 'Digital Payments', 'E-commerce'],
      nextBatch: '2025-01-20'
    }
  ];

  const mentors = [
    {
      id: 'santhosh-kumar',
      name: 'Dr. Santhosh Kumar',
      role: 'Business Strategy Mentor',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialization: 'Rural Entrepreneurship & Business Development',
      mentees: '200+ Women Guided',
      location: 'Chennai, Tamil Nadu',
      hub: 'electronics-chennai',
      hubName: 'Electronics Hub - Chennai',
      rating: 4.9,
      totalReviews: 156,
      bio: 'Leading expert in rural entrepreneurship with extensive experience in developing sustainable business models for women-led enterprises.',
      achievements: ['Rural Business Excellence Award', 'Women Empowerment Champion', 'Sustainable Development Leader']
    },
    {
      id: 'priya-raman',
      name: 'Priya Raman',
      role: 'Craft Excellence Mentor',
      experience: '12+ Years',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialization: 'Traditional Crafts & Quality Assurance',
      mentees: '150+ Artisans Trained',
      location: 'Madurai, Tamil Nadu',
      hub: 'weaving-madurai',
      hubName: 'Weaving Hub - Madurai',
      rating: 4.8,
      totalReviews: 124,
      bio: 'Master craftsperson and quality expert dedicated to preserving traditional techniques while meeting international standards.',
      achievements: ['Craft Heritage Award', 'Quality Excellence Recognition', 'Traditional Arts Preservation Medal']
    },
    {
      id: 'rajesh-krishnan',
      name: 'Rajesh Krishnan',
      role: 'Technology Mentor',
      experience: '10+ Years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialization: 'Digital Marketing & E-commerce',
      mentees: '300+ Women Empowered',
      location: 'Coimbatore, Tamil Nadu',
      hub: 'banana-coimbatore',
      hubName: 'Banana Bark Hub - Coimbatore',
      rating: 4.7,
      totalReviews: 189,
      bio: 'Technology evangelist helping rural entrepreneurs leverage digital platforms for business growth and market expansion.',
      achievements: ['Digital Innovation Award', 'E-commerce Excellence', 'Tech for Good Recognition']
    },
    {
      id: 'lakshmi-devi',
      name: 'Lakshmi Devi',
      role: 'Financial Literacy Mentor',
      experience: '8+ Years',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialization: 'Financial Planning & Banking',
      mentees: '250+ Women Educated',
      location: 'Tenkasi, Tamil Nadu',
      hub: 'coconut-tenkasi-main',
      hubName: 'Coconut Crafting Hub - Tenkasi',
      rating: 4.9,
      totalReviews: 167,
      bio: 'Financial literacy expert empowering women with essential money management skills and banking knowledge for business success.',
      achievements: ['Financial Inclusion Award', 'Women Banking Champion', 'Microfinance Excellence']
    }
  ];

  const successStories = [
    {
      name: 'Meena Devi',
      before: 'Household Worker',
      after: 'Coconut Craft Entrepreneur',
      income: '₹15,000/month',
      story: 'From earning ₹3,000 monthly to running her own coconut craft business with 10 employees.',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=200',
      mentor: 'Dr. Santhosh Kumar'
    },
    {
      name: 'Kamala Raman',
      before: 'Farm Helper',
      after: 'Organic Food Producer',
      income: '₹25,000/month',
      story: 'Transformed her farming knowledge into a thriving organic food business serving 500+ customers.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      mentor: 'Priya Raman'
    },
    {
      name: 'Devi Lakshmi',
      before: 'Unemployed',
      after: 'Textile Business Owner',
      income: '₹30,000/month',
      story: 'Started with basic weaving skills and now exports handwoven textiles to international markets.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      mentor: 'Rajesh Krishnan'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Mentorship</span> Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Guided by mentors, rising as leaders. Our comprehensive mentorship programs 
              transform rural women from skilled artisans into confident entrepreneurs and community leaders.
            </p>
            
            {/* Program Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {programStats.map((stat, index) => (
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

      {/* About Our Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Lives Through <span className="text-purple-600">Mentorship</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mentorship programs are designed to address the unique challenges faced by rural women 
                entrepreneurs. We provide comprehensive training, ongoing support, and access to markets 
                that enable sustainable economic growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <BookOpen className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Skill Development</h3>
                    <p className="text-gray-600">Master traditional crafts with modern techniques and quality standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Training</h3>
                    <p className="text-gray-600">Learn entrepreneurship, financial management, and marketing strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600">Join a network of women entrepreneurs supporting each other's growth.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
                >
                  Apply for Programs
                </Link>
                <Link 
                  to="/story"
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium text-center"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women in mentorship program"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Empowering Communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to empower women at every stage of their journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Next: {new Date(program.nextBatch).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      {program.participants}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">Program Features:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors block text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Mentor</h2>
            <p className="text-xl text-gray-600">
              Meet our experienced mentor dedicated to empowering the next generation of women entrepreneurs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {mentors.slice(0, 1).map((mentor, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto md:mx-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{mentor.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{mentor.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{mentor.hubName}</p>
                    <div className="flex items-center justify-center md:justify-start text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {mentor.location}
                    </div>
                    
                    <p className="text-gray-600 mb-4 italic">"{mentor.bio}"</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{mentor.experience}</div>
                        <div className="text-xs text-gray-600">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{mentor.mentees.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">Women Guided</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-lg font-bold text-gray-900">{mentor.rating}</span>
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Recent Achievements:</h4>
                      <div className="space-y-1">
                        {mentor.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <Award className="h-3 w-3 text-purple-600 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Link
                        to={`/mentor/${mentor.id}`}
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
                      >
                        View Full Profile
                      </Link>
                      <Link
                        to={`/hub/${mentor.hub}`}
                        className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-medium text-center"
                      >
                        Visit Hub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Mentors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mentors Network</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals across our hubs dedicated to empowering women entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                    <p className="text-purple-600 font-medium text-sm mb-1">{mentor.role}</p>
                    <p className="text-gray-600 text-xs mb-2">{mentor.experience}</p>
                    <p className="text-gray-500 text-xs mb-2">{mentor.hubName}</p>
                    
                    <div className="flex items-center justify-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-900">{mentor.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({mentor.totalReviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">Specialization:</p>
                      <p className="text-sm font-medium text-gray-900">{mentor.specialization}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-purple-700">{mentor.mentees}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/mentor/${mentor.id}`}
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium text-center"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/hub/${mentor.hub}`}
                      className="w-full border border-purple-600 text-purple-600 px-4 py-1 rounded-lg hover:bg-purple-50 transition-colors text-xs font-medium text-center"
                    >
                      Visit {mentor.hubName.split(' - ')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Connect with our {mentors.length} experienced mentors across all our hubs
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-block"
            >
              Join Our Mentorship Program
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real transformations from our mentorship programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-purple-600 font-medium">{story.income}</p>
                    <p className="text-xs text-gray-500">Mentored by {story.mentor}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Before:</span>
                    <span className="text-sm font-medium text-gray-900">{story.before}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-purple-600 mx-auto" />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-600">After:</span>
                    <span className="text-sm font-medium text-purple-600">{story.after}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Mentorship Program
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're a rural woman looking to develop new skills or an experienced 
                professional wanting to give back, there's a place for you in our mentorship community.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Apply Online</h3>
                    <p className="text-gray-600">Fill out our simple application form with your background and interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interview & Assessment</h3>
                    <p className="text-gray-600">Meet with our team to understand your goals and match you with the right program.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Start Your Journey</h3>
                    <p className="text-gray-600">Begin your transformation with dedicated mentors and comprehensive training.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
                >
                  Apply as Mentee
                </Link>
                <Link 
                  to="/contact"
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium text-center"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mentorship in action"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Transforming Lives Together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our mentorship community and be part of a movement that's transforming 
            lives and building stronger communities across rural India.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;