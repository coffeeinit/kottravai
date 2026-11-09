import { Link } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Search,
  Menu,
  ChevronLeft,
  ChevronRight,
  Phone,
  Laptop,
  Home,
  Shirt,
  WashingMachine,
  Plane,
  ShoppingBag,
  Clock
} from 'lucide-react';


interface FeaturedProduct {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  brand: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ShopHome = () => {
  const categories = [
    { id: 'minutes', name: 'Minutes', icon: Clock, color: 'text-orange-600' },
    { id: 'mobiles', name: 'Mobiles & Tablets', icon: Phone, color: 'text-blue-600' },
    { id: 'tv', name: 'TVs & Appliances', icon: WashingMachine, color: 'text-purple-600' },
    { id: 'electronics', name: 'Electronics', icon: Laptop, color: 'text-green-600' },
    { id: 'fashion', name: 'Fashion', icon: Shirt, color: 'text-pink-600' },
    { id: 'home', name: 'Home & Kitchen', icon: Home, color: 'text-yellow-600' },
    { id: 'beauty', name: 'Beauty & Toys', icon: ShoppingBag, color: 'text-red-600' },
    { id: 'furniture', name: 'Furniture', icon: Home, color: 'text-indigo-600' },
    { id: 'flights', name: 'Flight Bookings', icon: Plane, color: 'text-cyan-600' },
    { id: 'grocery', name: 'Grocery', icon: ShoppingBag, color: 'text-emerald-600' }
  ];


  const featuredProducts: FeaturedProduct[] = [
    {
      id: '1',
      title: 'Handmade Ceramic Dinner Set - Traditional Blue Pottery',
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      rating: 4.5,
      reviews: 128,
      image: '/assets/story/pottery.webp',
      category: 'home',
      brand: 'Artisan Crafts',
      isNew: true
    },
    {
      id: '2',
      title: 'Organic Cotton Handwoven Saree - Traditional Weave',
      price: 1899,
      originalPrice: 2499,
      discount: 24,
      rating: 4.8,
      reviews: 89,
      image: '/assets/story/weaving.jpeg',
      category: 'fashion',
      brand: 'Weave Heritage',
      isBestSeller: true
    },
    {
      id: '3',
      title: 'Handcrafted Wooden Spice Box - Traditional Design',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.3,
      reviews: 67,
      image: '/assets/story/banana.jpeg',
      category: 'home',
      brand: 'Wood Craft Co'
    },
    {
      id: '4',
      title: 'Organic Coconut Oil - Cold Pressed',
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.7,
      reviews: 234,
      image: '/assets/story/coconut.webp',
      category: 'wellness',
      brand: 'Nature\'s Best',
      isBestSeller: true
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/assets/logo.png" alt="Kottravai Logo" className="h-8 w-8" />
                <span className="ml-2 text-2xl font-bold text-blue-600">Kottravai</span>
              </Link>
              <div className="ml-4 text-xs text-gray-500">
                <div>Explore Plus</div>
                <div className="text-yellow-500">New</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                Login
              </button>
              <button className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                Become a Seller
              </button>
              <Link to="/shop/products" className="text-gray-700 hover:text-blue-600">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <button className="text-gray-700 hover:text-blue-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop/products?category=${category.id}`}
                className="flex flex-col items-center space-y-1 min-w-0 flex-shrink-0 hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <category.icon className={`h-6 w-6 ${category.color}`} />
                <span className="text-xs text-gray-700 text-center leading-tight">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                THE BIG BILLION DAYS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Biggest Deal Of The Year
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                Handmade Collection
              </h2>
              <p className="text-xl md:text-2xl mb-4">
                From ₹2,999*
              </p>
              <p className="text-lg mb-6">
                Pay Only ₹499/m
              </p>
              
              {/* Bank Offers */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 px-3 py-1 rounded text-sm">
                  AXIS BANK
                </div>
                <div className="bg-white/20 px-3 py-1 rounded text-sm">
                  ICICI Bank 10% Instant Discount
                </div>
                <div className="bg-white/20 px-3 py-1 rounded text-sm">
                  super.money 10% Instant Discount
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <img src="/assets/story/pottery.webp" alt="Pottery" className="w-full h-32 object-cover rounded" />
                    <p className="text-sm mt-2">Traditional Pottery</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <img src="/assets/story/weaving.jpeg" alt="Weaving" className="w-full h-32 object-cover rounded" />
                    <p className="text-sm mt-2">Handwoven Textiles</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <img src="/assets/story/coconut.webp" alt="Coconut" className="w-full h-32 object-cover rounded" />
                    <p className="text-sm mt-2">Organic Products</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <img src="/assets/story/qualitycraftsmanship.webp" alt="Crafts" className="w-full h-32 object-cover rounded" />
                    <p className="text-sm mt-2">Artisan Crafts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Deals Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Best deals on handmade products</h2>
            <div className="flex items-center space-x-4">
              <Link
                to="/shop/products"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All Products
              </Link>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block"
              >
                <div className="aspect-w-1 aspect-h-1 mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Promotional Sections */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Save Money Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Save money, save time</h3>
                <p className="text-purple-100 mb-2">Price drop alert!</p>
                <p className="text-2xl font-bold">From ₹5,390</p>
              </div>
              <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
                <img src="/assets/story/pottery.webp" alt="Pottery" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Top Rated Picks */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Top Rated Picks</h3>
              <p className="text-gray-600 mb-2">From ₹9,990</p>
              <p className="text-sm text-gray-500 mb-4">Artisan. Heritage. Traditional...</p>
              <div className="flex space-x-2">
                <img src="/assets/story/weaving.jpeg" alt="Weaving" className="w-16 h-16 object-cover rounded" />
                <img src="/assets/story/coconut.webp" alt="Coconut" className="w-16 h-16 object-cover rounded" />
                <img src="/assets/story/qualitycraftsmanship.webp" alt="Crafts" className="w-16 h-16 object-cover rounded" />
              </div>
            </div>

            {/* Deal of the Season */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">The Deal of the Season</h3>
                <p className="text-orange-100 mb-2">Handmade Collection (256GB)</p>
                <p className="text-2xl font-bold">Just ₹19,999*</p>
              </div>
              <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
                <img src="/assets/story/banana.jpeg" alt="Banana" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShopHome;
