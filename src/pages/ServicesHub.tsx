import { SERVICES } from "../constants";
import ServiceCard from "../components/ServiceCard";

const ServicesHub = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">
            Our Expertise
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-indigo-900 mb-8 tracking-tight">
            Comprehensive Publishing Services.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From the first draft to the final distribution, we provide every service an independent author needs to produce a world-class book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-24 bg-indigo-900 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight relative z-10">Need a Custom Bundle?</h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto relative z-10">
            Most authors benefit from a tailored package of services. Contact us for a free consultation and a custom quote based on your specific manuscript needs.
          </p>
          <div className="relative z-10">
            <a href="/request-quote" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 rounded-full text-base font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-xl shadow-black/10">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHub;
