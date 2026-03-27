import { useParams, Link, Navigate } from "react-router-dom";
import { SERVICES } from "../constants";
import * as Icons from "lucide-react";
import Button from "../components/Button";
import { CheckCircle2, ArrowLeft, HelpCircle } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = (Icons as any)[service.icon] || Icons.Book;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center text-sm font-bold text-indigo-600 mb-12 hover:text-indigo-800 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-900/20">
                <Icon className="text-white w-8 h-8" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-indigo-900 mb-6 tracking-tight leading-tight">
                {service.primaryHeadline}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {service.supportingHeadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-quote">
                  <Button size="lg">Request a Quote for {service.title}</Button>
                </Link>
                <Link to="/our-publishing-process">
                  <Button variant="outline" size="lg">View Our Process</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-indigo-50">
                <img src={`https://picsum.photos/seed/${service.id}/800/600`} alt={service.title} className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-indigo-50 max-w-xs">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Search Intent</p>
                <p className="text-sm font-medium text-indigo-900">{service.targetIntent}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-indigo-900 mb-6 tracking-tight">About Our {service.title} Service</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-8">Key Features & Deliverables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-indigo-50">
                      <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-8 flex items-center">
                  <HelpCircle className="mr-3 text-indigo-600" /> Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="p-8 bg-white border border-indigo-50 rounded-2xl shadow-sm">
                      <h4 className="text-lg font-bold text-indigo-900 mb-3">{faq.question}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl shadow-indigo-900/10">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                  Get a professional production quote for your manuscript today. Our team is ready to help you bring your vision to life.
                </p>
                <Link to="/request-quote">
                  <Button className="w-full bg-white text-indigo-900 hover:bg-indigo-50">Get Your Quote</Button>
                </Link>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-indigo-50">
                <h3 className="text-lg font-bold text-indigo-900 mb-6">Related Services</h3>
                <div className="space-y-4">
                  {SERVICES.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="block p-4 bg-white rounded-xl border border-indigo-50 hover:border-indigo-200 transition-colors text-sm font-bold text-indigo-900">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100">
                <h3 className="text-sm font-bold text-amber-900 uppercase tracking-widest mb-4">Compliance Note</h3>
                <p className="text-xs text-amber-800 leading-relaxed italic">
                  Indigo Publishers is an independent service provider and is not affiliated with, endorsed by, or an official partner of Amazon KDP, IngramSpark, or Barnes & Noble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
