import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Info,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Product, sampleProducts } from '../data/products';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showReviews, setShowReviews] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exchangeOption, setExchangeOption] = useState('without');
  const [pincode, setPincode] = useState('');

  // Get product-specific delivery date based on category
  const getDeliveryDate = (category: string) => {
    switch (category) {
      case 'mobiles':
      case 'electronics':
        return '2 Oct, Thursday';
      case 'fashion':
        return '3 Oct, Friday';
      case 'home':
      case 'crafts':
        return '5 Oct, Sunday';
      case 'wellness':
        return '4 Oct, Saturday';
      default:
        return '3 Oct, Friday';
    }
  };

  // Get product-specific offers based on category
  const getProductOffers = (product: Product) => {
    const baseOffers = [
      'Free delivery on orders above ₹999',
      'Cash on Delivery available'
    ];

    switch (product.productType) {
      case 'mobiles':
        return [
          'Extra ₹35000 off',
          '10% Instant Discount with ICICI Bank',
          'No cost EMI starting from ₹3,333/month',
          'Exchange offer up to ₹30,290',
          ...baseOffers
        ];
      case 'fashion':
        return [
          'Extra ₹2000 off with SBI Credit Card',
          '15% Instant Discount with HDFC Bank',
          'No cost EMI starting from ₹1,333/month',
          'Free alteration service available',
          ...baseOffers
        ];
      case 'wellness':
        return [
          'Buy 2 Get 1 Free',
          'Extra ₹50 off with ICICI Bank',
          'No cost EMI starting from ₹25/month',
          'Subscribe & Save 10%',
          ...baseOffers
        ];
      case 'home':
        return [
          'Extra ₹1000 off with HDFC Bank Credit Card',
          '10% Instant Discount with ICICI Bank',
          'No cost EMI starting from ₹208/month',
          ...baseOffers
        ];
      default:
        return [
          'Extra ₹500 off with HDFC Bank',
          'No cost EMI starting from ₹83/month',
          ...baseOffers
        ];
    }
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundProduct = sampleProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors?.[0]?.value || '');
        setSelectedSize(foundProduct.storage?.[0]?.size || '');
      }
      setLoading(false);
    }, 1000);
  }, [id]);


  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { product, quantity, selectedSize, selectedColor });
  };

  const handleBuyNow = () => {
    // Buy now logic
    console.log('Buy now:', { product, quantity, selectedSize, selectedColor });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-blue-600 hover:text-blue-700">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-gray-700">Shop</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center bg-green-100 px-3 py-1 rounded">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {product.reviews.toLocaleString()} Ratings & {Math.floor(product.reviews / 10)} Reviews
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Assured
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-3">
              <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded inline-block">
                Extra ₹{((product.originalPrice || 0) - product.price).toLocaleString()} off
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-lg text-green-600 font-medium">
                      {product.discount}% off
                    </span>
                    <Info className="h-4 w-4 text-gray-400" />
                  </>
                )}
              </div>
              
              <div className="text-sm text-gray-600">
                ₹109 Protect Promise Fee <span className="text-blue-600 cursor-pointer">Learn more</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center text-sm text-blue-800">
                <Clock className="h-4 w-4 mr-2" />
                <span>Secure delivery by {getDeliveryDate(product.category)}</span>
              </div>
            </div>

            {/* Available Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Available offers</h3>
              <ul className="space-y-2">
                {getProductOffers(product).map((offer, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{offer}</span>
                    <span className="text-blue-600 ml-1 cursor-pointer">T&C</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exchange Options */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Exchange</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="exchange"
                    value="without"
                    checked={exchangeOption === 'without'}
                    onChange={(e) => setExchangeOption(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Buy without Exchange</span>
                  <span className="ml-auto font-semibold">₹{product.price.toLocaleString()}</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="exchange"
                    value="with"
                    checked={exchangeOption === 'with'}
                    onChange={(e) => setExchangeOption(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Buy with Exchange</span>
                  <span className="ml-auto text-green-600 font-semibold">up to ₹{Math.floor(product.price * 0.3).toLocaleString()} off</span>
                </label>
                
                {exchangeOption === 'with' && (
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="Enter pincode to check if exchange is available"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Color Selection - Only show if product has colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-12 h-12 rounded-lg border-2 overflow-hidden ${
                        selectedColor === color.value ? 'border-blue-600' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection - Only show if product has storage options */}
            {product.storage && product.storage.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">
                  {product.productType === 'mobiles' ? 'Storage' : 'Size'}
                </h3>
                <div className="flex space-x-3">
                  {product.storage.map((storage, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(storage.size)}
                      className={`px-4 py-2 border rounded-lg text-sm ${
                        selectedSize === storage.size
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {storage.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Pincode */}
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter Delivery Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  Check
                </button>
              </div>
              <div className="text-sm text-gray-600">
                Delivery by {getDeliveryDate(product.category)} <span className="text-blue-600 cursor-pointer">View Details</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="space-y-1">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">KOTTRAVAIRetail</div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    4.3
                  </div>
                  <div className="text-sm text-gray-600">7 Days Brand Support</div>
                  <div className="text-sm text-gray-600">GST invoice available</div>
                </div>
                <span className="text-blue-600 text-sm cursor-pointer">See other sellers</span>
              </div>
            </div>

            {/* Easy Payment Options */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Easy Payment Options</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• No cost EMI starting from ₹{Math.floor(product.price / 12).toLocaleString()}/month</li>
                <li>• Cash on Delivery</li>
                <li>• Net banking & Credit/Debit/ATM card</li>
                {product.productType === 'fashion' && <li>• Free alteration service available</li>}
                {product.productType === 'wellness' && <li>• Subscribe & Save 10%</li>}
              </ul>
              <span className="text-blue-600 text-sm cursor-pointer">View Details</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-yellow-500 text-black py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="h-6 w-6 mr-2" />
                ADD TO CART
              </button>
              
              <button
                onClick={handleBuyNow}
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                ▼ BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setShowReviews(false)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  !showReviews
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setShowReviews(true)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  showReviews
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {!showReviews ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {product.reviewsList.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.name}</span>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
