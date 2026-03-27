import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users, Globe, BookOpen } from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../constants";
import { motion } from "motion/react";

const Home = () => {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-200">
                Independent Publishing Support
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-indigo-900 leading-[1.1] mb-8 tracking-tight">
                Your Manuscript, <br />
                <span className="text-indigo-600">Professionally</span> Published.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Premium independent publishing services for authors who demand excellence. We handle the production; you keep the rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-quote">
                  <Button size="lg" className="w-full sm:w-auto">Start Your Publishing Journey</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Explore Services</Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/author${i}/100/100`} alt="Author" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-amber-500 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 font-medium">Trusted by 500+ Independent Authors</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://picsum.photos/seed/publishing/800/1000"
                  alt="Professional Publishing"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-indigo-50 animate-bounce-slow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Status</p>
                    <p className="text-sm font-bold text-indigo-900">Market-Ready Production</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-2 font-bold text-slate-400"><Globe size={24} /> <span>GLOBAL REACH</span></div>
            <div className="flex items-center space-x-2 font-bold text-slate-400"><ShieldCheck size={24} /> <span>RIGHTS RETAINED</span></div>
            <div className="flex items-center space-x-2 font-bold text-slate-400"><Users size={24} /> <span>AUTHOR CENTRIC</span></div>
            <div className="flex items-center space-x-2 font-bold text-slate-400"><BookOpen size={24} /> <span>PREMIUM QUALITY</span></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-indigo-900 mb-6 tracking-tight">Everything You Need to Publish.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From professional editing to global distribution, we provide the specialized support independent authors need to compete in today's marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button variant="outline" size="lg">View All 14 Services <ArrowRight size={18} className="ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight">The Indigo Way: <br />A Transparent Process.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-12">
                We believe in clarity and collaboration. Our process is designed to keep you informed and in control of your book's production.
              </p>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Consultation", desc: "We discuss your vision, goals, and manuscript needs." },
                  { step: "02", title: "Production", desc: "Our experts handle editing, design, and formatting." },
                  { step: "03", title: "Review", desc: "You review and approve every element of your book." },
                  { step: "04", title: "Distribution", desc: "We set up your book on major global platforms." },
                ].map((item) => (
                  <div key={item.step} className="flex space-x-6">
                    <div className="text-3xl font-black text-indigo-500 opacity-50">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/process/800/1000" alt="Our Process" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-10 -right-10 bg-indigo-600 p-8 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-4xl font-black mb-2">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Author Ownership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency / Reality Check */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-[3rem] p-12 lg:p-24 border border-indigo-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-indigo-900 mb-8 tracking-tight">Transparent Expectations.</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We are an independent publishing services company, not a traditional publisher. This means you retain all rights and royalties, but you are also responsible for the ultimate success of your book.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">We provide professional production and distribution support.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">You keep 100% of your rights and net royalties.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">We disclose all third-party platform usage factually.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-indigo-900/5 border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-900 mb-6">What We Don't Do:</h3>
                <ul className="space-y-4 text-slate-600 text-sm">
                  <li className="flex items-center space-x-3 text-red-500 font-medium">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>No guaranteed bestseller status or rankings.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-red-500 font-medium">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>No guaranteed bookstore shelf placement.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-red-500 font-medium">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>No guaranteed movie deals or agent acquisition.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-red-500 font-medium">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>No official affiliation with Amazon or B&N.</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    *We provide the tools and professional polish; the market determines the outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-indigo-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight">Ready to See Your Book in Print?</h2>
          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            Join hundreds of independent authors who have trusted Indigo Publishers with their life's work. Get a custom production quote today.
          </p>
          <Link to="/request-quote">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">Request Your Custom Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
