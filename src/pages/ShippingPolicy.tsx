import { Link } from 'react-router-dom';
import { Truck, Clock, Shield, MapPin, Phone, Mail } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about our shipping and delivery process
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Truck className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders above ₹999 across India</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">3-7 business days delivery</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Packaging</h3>
            <p className="text-gray-600">Carefully packed for safe delivery</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Areas</h3>
                <p className="text-gray-700 mb-4">
                  We currently ship to all major cities and towns across India. Our delivery network covers:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All metro cities (Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune)</li>
                  <li>Tier 1 and Tier 2 cities</li>
                  <li>Most Tier 3 cities and towns</li>
                  <li>Remote areas (delivery may take longer)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping Charges</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Order Value</th>
                        <th className="text-left py-3 font-semibold">Shipping Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Above ₹999</td>
                        <td className="py-3 text-green-600 font-semibold">FREE</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">₹500 - ₹999</td>
                        <td className="py-3">₹99</td>
                      </tr>
                      <tr>
                        <td className="py-3">Below ₹500</td>
                        <td className="py-3">₹149</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Timeframes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-3">Standard Delivery</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Metro cities: 3-5 business days</li>
                      <li>• Tier 1 cities: 4-6 business days</li>
                      <li>• Tier 2 cities: 5-7 business days</li>
                      <li>• Remote areas: 7-10 business days</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-3">Express Delivery</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Metro cities: 1-2 business days</li>
                      <li>• Tier 1 cities: 2-3 business days</li>
                      <li>• Additional charges apply</li>
                      <li>• Available for select products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Processing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Processing Time</h3>
                <p className="text-gray-700 mb-4">
                  All orders are processed within 1-2 business days from the date of order confirmation. 
                  During peak seasons or festivals, processing may take up to 3 business days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Status Updates</h3>
                <p className="text-gray-700 mb-4">
                  You will receive email and SMS notifications at each stage of your order:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Order confirmation</li>
                  <li>Order processing</li>
                  <li>Order shipped with tracking details</li>
                  <li>Out for delivery</li>
                  <li>Delivered</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tracking Your Order</h3>
                <p className="text-gray-700 mb-4">
                  Once your order is shipped, you can track it using the tracking number provided in your 
                  shipping confirmation email. You can also track your order by logging into your account.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Circumstances</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Handmade Products</h3>
                <p className="text-gray-700 mb-4">
                  Some of our products are handmade by skilled artisans. These products may take additional 
                  time to process and ship as they are crafted to order. You will be informed of any 
                  extended processing times at the time of purchase.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Conditions</h3>
                <p className="text-gray-700 mb-4">
                  During extreme weather conditions, natural disasters, or other unforeseen circumstances, 
                  delivery may be delayed. We will keep you informed of any delays and work to minimize 
                  the impact on your delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Address Issues</h3>
                <p className="text-gray-700 mb-4">
                  If your delivery address is incorrect, incomplete, or inaccessible, the package may be 
                  returned to us. Additional shipping charges may apply for re-delivery. Please ensure 
                  your address is complete and accurate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Shipping</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Currently Available</h3>
                <p className="text-gray-700 mb-4">
                  We currently ship to select international destinations. Please contact our customer 
                  support team to check availability and shipping costs for your location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customs and Duties</h3>
                <p className="text-gray-700 mb-4">
                  International orders may be subject to customs duties and taxes. These charges are 
                  the responsibility of the customer and are not included in the order total. 
                  Please check with your local customs office for more information.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Support</h3>
                  <p className="text-gray-700">+91 97870 30811</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 9 AM - 6 PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-gray-700">support@kottravai.in</p>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-700">
                    Vaazhai Incubator Campus<br />
                    Puliyangudi, Tenkasi<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-purple-600 hover:text-purple-700">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-purple-600 hover:text-purple-700">
              Terms of Use
            </Link>
            <Link to="/refunds" className="text-purple-600 hover:text-purple-700">
              Cancellations & Refunds
            </Link>
            <Link to="/contact" className="text-purple-600 hover:text-purple-700">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
