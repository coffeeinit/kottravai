export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  specifications: { [key: string]: string };
  features: string[];
  colors?: { name: string; value: string; image: string }[];
  storage?: { size: string; price: number }[];
  highlights: string[];
  offers: string[];
  reviewsList: {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
  }[];
  productType: 'home' | 'fashion' | 'wellness' | 'crafts' | 'mobiles' | 'electronics' | 'beauty' | 'furniture';
}

export const sampleProducts: Product[] = [
  // Home & Kitchen Products
  {
    id: '1',
    title: 'Handmade Ceramic Dinner Set - Traditional Blue Pottery (6 Pieces) (Traditional Design)',
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.6,
    reviews: 128,
    images: [
      '/assets/story/pottery.webp',
      '/assets/story/qualitycraftsmanship.webp',
      '/assets/story/weaving.jpeg',
      '/assets/story/banana.jpeg'
    ],
    description: 'Beautiful handcrafted ceramic dinner set featuring traditional blue pottery design. Each piece is carefully crafted by skilled artisans using age-old techniques passed down through generations. Perfect for special occasions and daily use.',
    category: 'home',
    brand: 'Artisan Crafts',
    inStock: true,
    isNew: true,
    isBestSeller: true,
    productType: 'home',
    colors: [
      { name: 'Blue Pottery', value: 'blue', image: '/assets/story/pottery.webp' },
      { name: 'Red Clay', value: 'red', image: '/assets/story/weaving.jpeg' },
      { name: 'White Ceramic', value: 'white', image: '/assets/story/coconut.webp' },
      { name: 'Green Glaze', value: 'green', image: '/assets/story/qualitycraftsmanship.webp' }
    ],
    storage: [
      { size: '4 Pieces', price: 1999 },
      { size: '6 Pieces', price: 2499 },
      { size: '8 Pieces', price: 3299 }
    ],
    highlights: [
      '6 Pieces | Traditional Design',
      'Handcrafted by skilled artisans',
      'Lead-free and food-safe glaze',
      'Microwave and dishwasher safe',
      'Unique hand-painted patterns'
    ],
    offers: [
      'Extra ₹1000 off with HDFC Bank Credit Card',
      '10% Instant Discount with ICICI Bank',
      'No cost EMI starting from ₹208/month',
      'Cash on Delivery available',
      'Free delivery on orders above ₹999'
    ],
    specifications: {
      'Material': 'Ceramic',
      'Color': 'Blue Pottery',
      'Set Includes': '6 Dinner Plates, 6 Side Plates, 6 Bowls, 6 Cups',
      'Care Instructions': 'Hand wash only',
      'Origin': 'Rajasthan, India',
      'Weight': '2.5 kg',
      'Dimensions': 'Plate: 10 inches diameter'
    },
    features: [
      'Handcrafted by skilled artisans',
      'Traditional blue pottery design',
      'Microwave and dishwasher safe',
      'Lead-free and food-safe glaze',
      'Unique hand-painted patterns',
      'Eco-friendly production process'
    ],
    reviewsList: [
      {
        id: '1',
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely beautiful! The craftsmanship is outstanding and the quality is excellent. Perfect for our dinner parties.',
        date: '2 days ago',
        verified: true
      },
      {
        id: '2',
        name: 'Rajesh Kumar',
        rating: 4,
        comment: 'Great product, fast delivery. The design is authentic and the pieces are sturdy.',
        date: '1 week ago',
        verified: true
      }
    ]
  },
  // Fashion & Apparel
  {
    id: '2',
    title: 'Handwoven Silk Saree - Traditional Kanjeevaram (Pure Silk) (Red & Gold)',
    price: 15999,
    originalPrice: 22000,
    discount: 27,
    rating: 4.8,
    reviews: 89,
    images: [
      '/assets/story/weaving.jpeg',
      '/assets/story/qualitycraftsmanship.webp',
      '/assets/story/pottery.webp',
      '/assets/story/banana.jpeg'
    ],
    description: 'Exquisite handwoven Kanjeevaram silk saree featuring traditional motifs and pure silk threads. Each saree is a masterpiece crafted by skilled weavers using age-old techniques.',
    category: 'fashion',
    brand: 'Heritage Weaves',
    inStock: true,
    isNew: false,
    isBestSeller: true,
    productType: 'fashion',
    colors: [
      { name: 'Red & Gold', value: 'red-gold', image: '/assets/story/weaving.jpeg' },
      { name: 'Blue & Silver', value: 'blue-silver', image: '/assets/story/qualitycraftsmanship.webp' },
      { name: 'Green & Gold', value: 'green-gold', image: '/assets/story/pottery.webp' },
      { name: 'Purple & Gold', value: 'purple-gold', image: '/assets/story/banana.jpeg' }
    ],
    storage: [
      { size: '5.5 Meters', price: 15999 },
      { size: '6 Meters', price: 17999 },
      { size: '6.5 Meters', price: 19999 }
    ],
    highlights: [
      'Pure Kanjeevaram Silk',
      'Handwoven by master craftsmen',
      'Traditional temple border design',
      'Zari work throughout',
      'Perfect for weddings and festivals'
    ],
    offers: [
      'Extra ₹2000 off with SBI Credit Card',
      '15% Instant Discount with HDFC Bank',
      'No cost EMI starting from ₹1,333/month',
      'Free alteration service available',
      'Free delivery on orders above ₹5000'
    ],
    specifications: {
      'Fabric': 'Pure Kanjeevaram Silk',
      'Color': 'Red & Gold',
      'Length': '5.5 Meters',
      'Blouse Piece': 'Included',
      'Care Instructions': 'Dry clean only',
      'Origin': 'Kanchipuram, Tamil Nadu',
      'Weight': '800 grams'
    },
    features: [
      'Handwoven by master craftsmen',
      'Pure silk threads',
      'Traditional temple border',
      'Intricate zari work',
      'Perfect drape and fall',
      'Authentic Kanjeevaram quality'
    ],
    reviewsList: [
      {
        id: '1',
        name: 'Anita Patel',
        rating: 5,
        comment: 'Stunning saree! The quality is exceptional and the workmanship is beautiful. Perfect for my daughter\'s wedding.',
        date: '3 days ago',
        verified: true
      }
    ]
  },
  // Wellness & Health
  {
    id: '3',
    title: 'Organic Coconut Oil - Cold Pressed Virgin (500ml) (Pure & Natural)',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.7,
    reviews: 256,
    images: [
      '/assets/story/coconut.webp',
      '/assets/story/pottery.webp',
      '/assets/story/weaving.jpeg',
      '/assets/story/qualitycraftsmanship.webp'
    ],
    description: 'Pure, cold-pressed virgin coconut oil extracted from fresh coconuts. Rich in nutrients and perfect for cooking, hair care, and skin care. 100% natural and organic.',
    category: 'wellness',
    brand: 'Nature\'s Bounty',
    inStock: true,
    isNew: false,
    isBestSeller: true,
    productType: 'wellness',
    colors: [
      { name: 'Natural', value: 'natural', image: '/assets/story/coconut.webp' }
    ],
    storage: [
      { size: '250ml', price: 199 },
      { size: '500ml', price: 299 },
      { size: '1L', price: 549 }
    ],
    highlights: [
      'Cold Pressed Virgin Oil',
      '100% Organic & Natural',
      'No Chemicals or Preservatives',
      'Rich in MCTs and Antioxidants',
      'Multi-purpose use'
    ],
    offers: [
      'Buy 2 Get 1 Free',
      'Extra ₹50 off with ICICI Bank',
      'No cost EMI starting from ₹25/month',
      'Free delivery on orders above ₹299',
      'Subscribe & Save 10%'
    ],
    specifications: {
      'Type': 'Cold Pressed Virgin Coconut Oil',
      'Volume': '500ml',
      'Certification': 'Organic Certified',
      'Extraction Method': 'Cold Pressed',
      'Shelf Life': '24 months',
      'Origin': 'Kerala, India',
      'Packaging': 'Glass Bottle'
    },
    features: [
      'Cold pressed extraction',
      '100% organic certified',
      'No chemicals or preservatives',
      'Rich in MCTs',
      'Multi-purpose use',
      'Glass bottle packaging'
    ],
    reviewsList: [
      {
        id: '1',
        name: 'Sunita Reddy',
        rating: 5,
        comment: 'Excellent quality oil! I use it for cooking and hair care. Very pure and natural.',
        date: '1 week ago',
        verified: true
      }
    ]
  },
  // Handicrafts
  {
    id: '4',
    title: 'Handwoven Bamboo Basket Set - Traditional Weaving (Set of 3) (Eco-Friendly)',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.5,
    reviews: 67,
    images: [
      '/assets/story/qualitycraftsmanship.webp',
      '/assets/story/banana.jpeg',
      '/assets/story/pottery.webp',
      '/assets/story/weaving.jpeg'
    ],
    description: 'Beautiful handwoven bamboo basket set crafted by skilled artisans. Perfect for storage, decoration, or as a gift. Eco-friendly and sustainable.',
    category: 'crafts',
    brand: 'Eco Crafts',
    inStock: true,
    isNew: true,
    isBestSeller: false,
    productType: 'crafts',
    colors: [
      { name: 'Natural Bamboo', value: 'natural', image: '/assets/story/qualitycraftsmanship.webp' },
      { name: 'Stained Brown', value: 'brown', image: '/assets/story/banana.jpeg' }
    ],
    storage: [
      { size: 'Set of 2', price: 599 },
      { size: 'Set of 3', price: 899 },
      { size: 'Set of 5', price: 1299 }
    ],
    highlights: [
      'Handwoven by Artisans',
      '100% Eco-Friendly',
      'Set of 3 Different Sizes',
      'Natural Bamboo Material',
      'Perfect for Storage'
    ],
    offers: [
      'Extra ₹100 off with HDFC Bank',
      'Free delivery on orders above ₹499',
      'Buy 2 Sets Get 10% off',
      'Cash on Delivery available'
    ],
    specifications: {
      'Material': 'Natural Bamboo',
      'Set Includes': '3 Baskets (Small, Medium, Large)',
      'Weaving Technique': 'Traditional Hand Weaving',
      'Finish': 'Natural',
      'Care Instructions': 'Wipe with dry cloth',
      'Origin': 'Assam, India',
      'Weight': '1.2 kg'
    },
    features: [
      'Handwoven by skilled artisans',
      '100% eco-friendly material',
      'Traditional weaving techniques',
      'Set of 3 different sizes',
      'Perfect for storage and decoration',
      'Sustainable and biodegradable'
    ],
    reviewsList: [
      {
        id: '1',
        name: 'Ravi Kumar',
        rating: 4,
        comment: 'Nice baskets! Good quality and eco-friendly. Perfect for organizing things at home.',
        date: '2 weeks ago',
        verified: true
      }
    ]
  },
  // Mobile & Electronics
  {
    id: '5',
    title: 'Samsung Galaxy S24 5G Snapdragon (Onyx Black, 128 GB) (8 GB RAM)',
    price: 39999,
    originalPrice: 74000,
    discount: 46,
    rating: 4.6,
    reviews: 20056,
    images: [
      '/assets/story/pottery.webp',
      '/assets/story/qualitycraftsmanship.webp',
      '/assets/story/weaving.jpeg',
      '/assets/story/banana.jpeg'
    ],
    description: 'Experience the power of Galaxy S24 with Snapdragon 8 Gen 3 processor, advanced AI features, and stunning camera capabilities. The ultimate smartphone for productivity and creativity.',
    category: 'mobiles',
    brand: 'Samsung',
    inStock: true,
    isNew: true,
    isBestSeller: true,
    productType: 'mobiles',
    colors: [
      { name: 'Onyx Black', value: 'black', image: '/assets/story/pottery.webp' },
      { name: 'Marble Gray', value: 'gray', image: '/assets/story/qualitycraftsmanship.webp' },
      { name: 'Cobalt Violet', value: 'violet', image: '/assets/story/weaving.jpeg' },
      { name: 'Amber Yellow', value: 'yellow', image: '/assets/story/banana.jpeg' }
    ],
    storage: [
      { size: '128 GB', price: 39999 },
      { size: '256 GB', price: 45999 },
      { size: '512 GB', price: 55999 }
    ],
    highlights: [
      '8 GB RAM | 128 GB ROM',
      '15.75 cm (6.2 inch) Full HD+ Display',
      '50MP + 12MP | 12MP Front Camera',
      '4000 mAh Battery',
      '8 Gen 3 Processor'
    ],
    offers: [
      'Extra ₹35000 off',
      '10% Instant Discount with ICICI Bank',
      'No cost EMI starting from ₹3,333/month',
      'Exchange offer up to ₹30,290',
      'Free delivery by 2 Oct, Thursday'
    ],
    specifications: {
      'RAM': '8 GB',
      'Storage': '128 GB',
      'Display': '15.75 cm (6.2 inch) Full HD+',
      'Camera': '50MP + 12MP | 12MP Front',
      'Battery': '4000 mAh',
      'Processor': 'Snapdragon 8 Gen 3',
      'Operating System': 'Android 14'
    },
    features: [
      'Snapdragon 8 Gen 3 processor',
      'Advanced AI features',
      'Professional-grade camera system',
      'All-day battery life',
      '5G connectivity',
      'Samsung Knox security'
    ],
    reviewsList: [
      {
        id: '1',
        name: 'Arjun Singh',
        rating: 5,
        comment: 'Amazing phone! The camera quality is outstanding and the performance is smooth.',
        date: '1 day ago',
        verified: true
      }
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Categories', count: sampleProducts.length },
  { id: 'home', name: 'Home & Living', count: sampleProducts.filter(p => p.category === 'home').length },
  { id: 'fashion', name: 'Fashion & Apparel', count: sampleProducts.filter(p => p.category === 'fashion').length },
  { id: 'wellness', name: 'Wellness & Health', count: sampleProducts.filter(p => p.category === 'wellness').length },
  { id: 'crafts', name: 'Handicrafts', count: sampleProducts.filter(p => p.category === 'crafts').length },
  { id: 'mobiles', name: 'Mobiles & Tablets', count: sampleProducts.filter(p => p.category === 'mobiles').length },
  { id: 'tv', name: 'TVs & Appliances', count: 0 },
  { id: 'electronics', name: 'Electronics', count: 0 },
  { id: 'beauty', name: 'Beauty & Toys', count: 0 },
  { id: 'furniture', name: 'Furniture', count: 0 },
  { id: 'flights', name: 'Flight Bookings', count: 0 },
  { id: 'grocery', name: 'Grocery', count: 0 }
];
