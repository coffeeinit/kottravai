import { Link } from 'react-router-dom';
import { RotateCcw, Clock, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const Refunds = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellations & Refunds</h1>
          <p className="text-lg text-gray-600">
            Our comprehensive refund and cancellation policy for your peace of mind
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <RotateCcw className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day return window</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Processing</h3>
            <p className="text-gray-600">Refunds processed in 5-7 days</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Process</h3>
            <p className="text-gray-600">100% secure refund process</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Cancellation</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Before Shipment</h4>
                        <p className="text-gray-700">
                          You can cancel your order anytime before it is shipped. Cancellation requests 
                          received before shipment will be processed immediately with a full refund.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">After Shipment</h4>
                        <p className="text-gray-700">
                          Once your order has been shipped, you cannot cancel it. However, you can return 
                          the product after delivery following our return policy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Custom/Handmade Products</h4>
                        <p className="text-gray-700">
                          Custom-made or personalized products cannot be cancelled once production has begun. 
                          Please contact us immediately if you need to cancel such orders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Cancel</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <ol className="list-decimal list-inside text-gray-700 space-y-3">
                    <li>Log into your account and go to "My Orders"</li>
                    <li>Find the order you want to cancel</li>
                    <li>Click on "Cancel Order" if available</li>
                    <li>Select the reason for cancellation</li>
                    <li>Submit your cancellation request</li>
                    <li>You will receive a confirmation email</li>
                  </ol>
                  <p className="text-gray-700 mt-4">
                    <strong>Alternative:</strong> You can also contact our customer support team at 
                    <a href="mailto:support@kottravai.in" className="text-purple-600 hover:text-purple-700">
                      support@kottravai.in
                    </a> or call us at +91 97870 30811.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Eligibility</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Eligible for Return</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Defective or damaged products</li>
                        <li>• Wrong product received</li>
                        <li>• Size/color mismatch (if applicable)</li>
                        <li>• Products not as described</li>
                        <li>• Unused products in original packaging</li>
                        <li>• Within 30 days of delivery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-red-600">✗ Not Eligible for Return</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Custom or personalized items</li>
                        <li>• Perishable goods</li>
                        <li>• Intimate or sanitary products</li>
                        <li>• Used or damaged products</li>
                        <li>• Products without original packaging</li>
                        <li>• After 30 days of delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Process</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-purple-600">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Initiate Return</h4>
                        <p className="text-gray-700">
                          Log into your account, go to "My Orders", and click "Return Item" for the product you want to return.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-purple-600">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Select Reason</h4>
                        <p className="text-gray-700">
                          Choose the reason for return from the dropdown menu and provide additional details if required.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-purple-600">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Get Return Label</h4>
                        <p className="text-gray-700">
                          We will send you a return shipping label via email. Print it and attach it to your package.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-purple-600">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ship Package</h4>
                        <p className="text-gray-700">
                          Pack the item securely in its original packaging and drop it off at the nearest courier location.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-purple-600">5</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Receive Refund</h4>
                        <p className="text-gray-700">
                          Once we receive and inspect your return, we will process your refund within 5-7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Processing</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Processing Time</h4>
                        <p className="text-gray-700">5-7 business days after we receive your return</p>
                      </div>
                      <Clock className="h-8 w-8 text-green-600" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Refund Method</h4>
                        <p className="text-gray-700">Refunded to the original payment method</p>
                      </div>
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Refund Amount</h4>
                        <p className="text-gray-700">Full amount minus any applicable charges</p>
                      </div>
                      <RotateCcw className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Scenarios</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Scenario</th>
                        <th className="text-left py-3 font-semibold">Refund Amount</th>
                        <th className="text-left py-3 font-semibold">Shipping Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Defective/Damaged Product</td>
                        <td className="py-3 text-green-600 font-semibold">100%</td>
                        <td className="py-3 text-green-600 font-semibold">Free</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Wrong Product Received</td>
                        <td className="py-3 text-green-600 font-semibold">100%</td>
                        <td className="py-3 text-green-600 font-semibold">Free</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Size/Color Mismatch</td>
                        <td className="py-3 text-green-600 font-semibold">100%</td>
                        <td className="py-3 text-gray-600">Customer pays</td>
                      </tr>
                      <tr>
                        <td className="py-3">Change of Mind</td>
                        <td className="py-3 text-green-600 font-semibold">100%</td>
                        <td className="py-3 text-gray-600">Customer pays</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchange Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Exchange</h3>
                <p className="text-gray-700 mb-4">
                  We offer exchanges for size, color, or style changes within 30 days of delivery. 
                  Exchanges are subject to product availability and the same return conditions apply.
                </p>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-3">Exchange Process:</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Contact our customer support team</li>
                    <li>Provide your order number and desired exchange details</li>
                    <li>We will check product availability</li>
                    <li>If available, we will process the exchange</li>
                    <li>Return the original product using our return label</li>
                    <li>Receive your new product once the return is verified</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exchange Charges</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Size exchanges: Free (if same price)</li>
                    <li>• Color exchanges: Free (if same price)</li>
                    <li>• Style exchanges: Price difference applies</li>
                    <li>• Shipping charges: Customer pays for return shipping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Cases</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Handmade Products</h3>
                <p className="text-gray-700 mb-4">
                  Handmade products are unique and may have slight variations from the product images. 
                  These variations are part of the handmade charm and do not qualify for returns unless 
                  the product is significantly different from the description.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Festival/Seasonal Items</h3>
                <p className="text-gray-700 mb-4">
                  Festival and seasonal items have a shorter return window of 15 days due to their 
                  time-sensitive nature. Please check the product page for specific return policies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Products</h3>
                <p className="text-gray-700 mb-4">
                  Digital products, including downloadable content, are non-refundable once downloaded 
                  or accessed. Please ensure you are satisfied with your purchase before downloading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-8 bg-purple-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-700 mb-2">support@kottravai.in</p>
              <p className="text-gray-700">+91 97870 30811</p>
              <p className="text-sm text-gray-600">Mon-Fri: 9 AM - 6 PM IST</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-700 mb-2">Email: Within 24 hours</p>
              <p className="text-gray-700">Phone: Immediate during business hours</p>
              <p className="text-sm text-gray-600">We're here to help!</p>
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
            <Link to="/shipping" className="text-purple-600 hover:text-purple-700">
              Shipping Policy
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

export default Refunds;
