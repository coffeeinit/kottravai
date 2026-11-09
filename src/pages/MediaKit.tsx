import React from 'react';
import { Download, FileText, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const MediaKit = () => {
  const mediaAssets = [
    {
      title: 'Press Release',
      desc: 'Official press release about Kottravai\'s mission and impact.',
      href: '#',
      icon: <FileText className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Brand Assets',
      desc: 'Download our logo, color palette, and brand guidelines.',
      href: '#',
      icon: <Download className="h-6 w-6 text-pink-600" />
    },
    {
      title: 'Media Contact',
      desc: 'Reach out to our media team for interviews or information.',
      href: 'mailto:media@kottravai.in',
      icon: <Mail className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Media Kit & Brand Assets
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            For Press, Partners & Storytellers
          </h1>
          <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
            Everything you need to tell the Kottravai story
          </p>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Resources</h2>
            <p className="text-lg text-gray-600">Access our official press materials and brand assets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaAssets.map((asset, i) => (
              <a key={i} href={asset.href} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" target={asset.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer">
                <div className="flex items-center mb-4">
                  {asset.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{asset.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{asset.desc}</p>
                <span className="inline-flex items-center px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-300">
                  Download / Contact <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-lg text-gray-600 mb-8">Can't find what you're looking for? Get in touch with our media team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:media@kottravai.in"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Media Team
            </a>
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaKit; 