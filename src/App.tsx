import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Timeline from './components/Timeline';
import B2B from './pages/B2B';
import JoinUs from "./pages/JoinUs";
import MediaKit from './pages/MediaKit';
import Events from './pages/Events';
import News from './pages/News';
import Privacy from './pages/Privacy';
import TermsOfUse from './pages/TermsOfUse';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Sitemap from './pages/Sitemap';
import Volunteer from './pages/Volunteer';
import Donor from './pages/Donor';
import Partner from './pages/Partner';
import Creator from './pages/Creator';
import Hubs from './pages/Hubs';
import Mentorship from './pages/Mentorship';
import X from './pages/X';
import Shop from './pages/Shop';
import ShopHome from './pages/ShopHome';
import ProductView from './pages/ProductView';
import ShippingPolicy from './pages/ShippingPolicy';
import Refunds from './pages/Refunds';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-1">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<OurStory />} />
              <Route path="/timeline" element={<Timeline />} />
              
              {/* Shop */}
              <Route path="/shop" element={<ShopHome />} />
              <Route path="/shop/products" element={<Shop />} />
              <Route path="/product/:id" element={<ProductView />} />

              {/* Kottravai X - Main Platform */}
              <Route path="/x" element={<X />} />
              
              {/* Business & Services */}
              <Route path="/b2b" element={<B2B />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/creator" element={<Creator />} />
              
              {/* Community & Engagement */}
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/donor" element={<Donor />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/hubs" element={<Hubs />} />
              
              {/* Content & Media */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/media-kit" element={<MediaKit />} />
              
              {/* Support & Information */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Legal */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/shipping" element={<ShippingPolicy />} />
              <Route path="/refunds" element={<Refunds />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;