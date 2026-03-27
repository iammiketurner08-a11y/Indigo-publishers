import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesHub from "./pages/ServicesHub";
import ServicePage from "./pages/ServicePage";
import QuoteRequest from "./pages/QuoteRequest";
import Process from "./pages/Process";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Disclosure from "./pages/Disclosure";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/request-quote" element={<QuoteRequest />} />
          <Route path="/our-publishing-process" element={<Process />} />
          <Route path="/frequently-asked-questions" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/distribution-disclosures" element={<Disclosure />} />
        </Routes>
      </Layout>
    </Router>
  );
}
