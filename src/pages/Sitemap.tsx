import { Link } from 'react-router-dom';

const Sitemap = () => {
  const mainPages = [
    { label: 'Home', to: '/' },
    { label: 'Our Story', to: '/story' },
    { label: 'Shop', to: 'https://shop.kottravai.in/', external: true },
    { label: 'Kottravai X', to: '/x' },
    { label: 'B2B Gifting', to: '/b2b' },
    { label: 'Timeline', to: '/timeline' },
  ];

  const joinPages = [
    { label: 'Join Us', to: '/join' },
    { label: 'Volunteer', to: '/volunteer' },
    { label: 'Donor', to: '/donor' },
    { label: 'Partner', to: '/partner' },
    { label: 'Creator', to: '/creator' },
    { label: 'Hubs', to: '/hubs' },
    { label: 'Mentorship', to: '/mentorship' },
  ];

  const infoPages = [
    { label: 'News', to: '/news' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Media Kit', to: '/media-kit' },
    { label: 'Careers', to: '/careers' },
  ];

  const supportPages = [
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms-of-use' },
    { label: 'Shipping Policy', to: '/shipping' },
    { label: 'Cancellations & Refunds', to: '/refunds' },
  ];

  const renderLink = (link: any) => {
    if (link.external) {
      return (
        <a
          key={link.to}
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {link.label}
          </h3>
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </a>
      );
    }

    return (
      <Link
        key={link.to}
        to={link.to}
        className="block p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {link.label}
        </h3>
        <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600">
            Find your way around Kottravai
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map(renderLink)}
            </div>
          </div>

          {/* Join Us Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Join Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {joinPages.map(renderLink)}
            </div>
          </div>

          {/* Information Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Information & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infoPages.map(renderLink)}
            </div>
          </div>

          {/* Support Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Support & Legal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportPages.map(renderLink)}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 