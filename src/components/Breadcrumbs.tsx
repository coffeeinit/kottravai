import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const breadcrumbs = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      
      // Format the name for display
      const formatName = (name: string) => {
        // Special cases for better display names
        const nameMap: { [key: string]: string } = {
          'story': 'Our Story',
          'join': 'Join Us',
          'join-us': 'Join Us',
          'media-kit': 'Media Kit',
          'terms-of-use': 'Terms of Use',
          'privacy': 'Privacy Policy',
          'shipping': 'Shipping Policy',
          'refunds': 'Cancellations & Refunds',
          'faq': 'FAQ',
          'sitemap': 'Sitemap',
          'volunteer': 'Volunteer',
          'donor': 'Donor',
          'partner': 'Partner',
          'creator': 'Creator',
          'hubs': 'Hubs',
          'mentorship': 'Mentorship',
          'about': 'About Us',
          'contact': 'Contact',
          'shop': 'Shop',
          'products': 'Products',
          'events': 'Events',
          'news': 'News',
          'careers': 'Careers',
          'gallery': 'Gallery',
          'testimonials': 'Testimonials',
          'b2b': 'B2B',
          'our-story': 'Our Story',
          'bulk-orders': 'Bulk Orders',
          'privacy-policy': 'Privacy Policy',
        };

        if (nameMap[name]) {
          return nameMap[name];
        }

        return name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

      return {
        name: formatName(name),
        path: routeTo,
        isLast,
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm lg:text-base">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-200 font-medium"
          >
            <Home className="h-4 w-4 lg:h-5 lg:w-5 mr-1" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          {breadcrumbs.map((breadcrumb) => (
            <div key={breadcrumb.path} className="flex items-center">
              <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 text-purple-400 mx-2" />
              {breadcrumb.isLast ? (
                <span className="text-purple-900 font-semibold">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link 
                  to={breadcrumb.path}
                  className="text-gray-600 hover:text-purple-700 transition-colors duration-200 font-medium"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 