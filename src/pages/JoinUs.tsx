import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Lightbulb, Star, ExternalLink, Mail, ArrowRight, Gift, Mic, UserPlus, Building2, Handshake, UserCheck, BookOpen, MapPin, Calendar, Award, Users2, Globe, Target, TrendingUp, Download } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const JoinUs = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState([]);
  
  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('joinUsSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get client IP address using a public API
      let userIP = 'Unknown';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        userIP = ipData.ip;
      } catch (ipError) {
        console.error('IP fetch error:', ipError);
      }

      // Prepare data with metadata
      const submissionData = {
        ...form,
        timestamp: new Date().toISOString(),
        ip: userIP,
        userAgent: navigator.userAgent
      };

      // Add to submissions and update localStorage
      const updatedSubmissions = [...submissions, submissionData];
      setSubmissions(updatedSubmissions);
      localStorage.setItem('joinUsSubmissions', JSON.stringify(updatedSubmissions));

      setSubmitted(true);
      setForm({ name: '', email: '', interest: '', message: '' });
    } catch (err) {
      setError('There was an error submitting your form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadSubmissions = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "join_us_submissions.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const joinOptions = [
    {
      id: 'mentorship',
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, 
      title: 'Join as a Mentor',
      desc: 'Give Her a Skill. Change Her Story. Whether you\'re a designer, engineer, baker, or business leader — your expertise can light the way.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'creators',
      icon: <Users2 className="h-8 w-8 text-purple-500" />, 
      title: 'Join as a Creator',
      desc: 'Transform your traditional skills into sustainable livelihoods. We provide training, market access, and support for rural women artisans.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'volunteer',
      icon: <Heart className="h-8 w-8 text-pink-500" />, 
      title: 'Join as a Volunteer',
      desc: 'Time is also a gift. Help us sort raw materials, document artisan stories, manage logistics, or simply spend time at our hubs.',
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 'hubs',
      icon: <Building2 className="h-8 w-8 text-blue-500" />, 
      title: 'Visit Our Hubs',
      desc: 'See the magic happening firsthand. Visit our crafting hubs to understand our impact and meet our amazing artisans.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'donation',
      icon: <Gift className="h-8 w-8 text-purple-500" />, 
      title: 'Join as a Donor',
      desc: 'Support Without Buying — Still Makes Change. Your donation helps us fund tools, workshops, child care for artisans.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'partnership',
      icon: <Handshake className="h-8 w-8 text-green-500" />, 
      title: 'Partner With Us',
      desc: 'Stock Stories, Not Just Shelves. Looking for return gifts, corporate gifting, or retail tie-ups? Let\'s co-create conscious commerce.',
      color: 'from-green-500 to-blue-500',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Join Us – Be Part of Her Rise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We're Building More Than a Brand.<br />We're Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Movement</span>.
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            And movements don't grow alone. They grow with believers. With mentors. With markets. With people like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton size="lg" onClick={() => document.getElementById('join-options')?.scrollIntoView({ behavior: 'smooth' })}>
              Choose How You'll Join <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
         
          </div>
        </div>
      </section>

      {/* Join Options */}
      <section id="join-options" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like to Join?</h2>
            <p className="text-lg text-gray-600">Choose the path that resonates with you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {joinOptions.map((opt, i) => (
              <Link 
                key={i}
                to={opt.link}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 block"
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">{opt.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{opt.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Form / Expression of Interest */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Let's Start This Together</h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-lg font-semibold mb-4">
                Thank you for your interest! Your response has been stored locally.
              </div>
              <p className="text-gray-600 mb-4">
                We'll be in touch soon to discuss how you can contribute to our movement.
              </p>
              <CTAButton onClick={() => setSubmitted(false)}>
                Submit Another Response
              </CTAButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">I want to:</label>
                <select 
                  name="interest" 
                  value={form.interest} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="Mentor">Become a Mentor</option>
                  <option value="Creator">Join as Creator</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Visit Hub">Visit a Hub</option>
                  <option value="Donate">Donate</option>
                  <option value="Partner">Partner With Us</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
              </div>
              <div className="text-center">
                <CTAButton 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Let\'s Start This Together'} <Mail className="ml-2 h-5 w-5" />
                </CTAButton>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default JoinUs;