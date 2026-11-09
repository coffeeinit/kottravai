import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

const CTAButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  type = 'button',
  to,
  href,
  onClick,
  external = false
}: CTAButtonProps) => {
  // Consistent logo color scheme: Purple (#9333EA) to Pink (#EC4899)
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-md hover:shadow-lg',
    white: 'bg-white text-purple-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`;

  // If it's an external link
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  // If it's an internal link
  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
      >
        {children}
      </Link>
    );
  }

  // If it's a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default CTAButton; 