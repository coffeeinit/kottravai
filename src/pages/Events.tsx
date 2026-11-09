import React from 'react';
import { Calendar, MapPin, ArrowRight, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Artisan Training Workshop',
      date: 'March 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Tenkasi Hub',
      desc: 'Join us for a hands-on workshop with our master artisans.',
      status: 'Upcoming',
      attendees: '25 spots left'
    },
    {
      title: 'Craft Exhibition',
      date: 'April 22, 2024',
      time: '11:00 AM - 7:00 PM',
      location: 'Chennai',
      desc: 'Showcasing the finest handcrafted products from our women artisans.',
      status: 'Registration Open',
      attendees: '50 spots left'
    },
    {
      title: 'Sustainability Summit',
      date: 'May 10, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      desc: 'Discussing sustainable practices in rural craft development.',
      status: 'Upcoming',
      attendees: 'Unlimited spots'
    },
    {
      title: 'Women Empowerment Workshop',
      date: 'June 5, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'Puliyangudi Hub',
      desc: 'Skills development and business training for rural women.',
      status: 'Registration Open',
      attendees: '30 spots left'
    },
    {
      title: 'Traditional Craft Fair',
      date: 'July 12, 2024',
      time: '10:00 AM - 8:00 PM',
      location: 'Madurai',
      desc: 'Celebrating traditional Indian crafts and supporting local artisans.',
      status: 'Upcoming',
      attendees: '100 spots left'
    },
    {
      title: 'Digital Marketing for Artisans',
      date: 'August 20, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Virtual Event',
      desc: 'Teaching artisans how to market their products online.',
      status: 'Registration Open',
      attendees: 'Unlimited spots'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Events & Workshops
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Join Our Community Events
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            Connect, learn, and grow with our artisan community
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us at our events and workshops</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.status === 'Upcoming' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {event.status}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-purple-600 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-purple-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
                <p className="text-gray-700 mb-4 text-sm">{event.desc}</p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  {event.attendees}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Hosting an Event?</h2>
          <p className="text-lg text-gray-600 mb-8">Want to collaborate or host an event with us? Get in touch!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:events@kottravai.in"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Contact Events Team
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 