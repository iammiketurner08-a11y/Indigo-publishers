import { Link } from "react-router-dom";
import { ShieldCheck, Users, Globe, BookOpen, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-200">
                Our Story
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-indigo-900 mb-8 tracking-tight leading-tight">
                Professional Support for <br />
                <span className="text-indigo-600">Independent Authors.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Indigo Publishers was founded on a simple principle: every author deserves professional-grade production services without sacrificing their rights or royalties.
              </p>
              <Link to="/services">
                <Button size="lg">Explore Our Services</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-indigo-50">
                <img src="https://picsum.photos/seed/about/800/600" alt="About Indigo Publishers" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black text-indigo-900 mb-6 tracking-tight">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower independent authors by providing the high-end production, design, and distribution support typically reserved for traditional publishing houses.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Transparency First", desc: "We are clear about our business model, our services, and the realities of the publishing market." },
                { icon: Users, title: "Author Centric", desc: "You retain 100% of your rights and net royalties. We work for you, not the other way around." },
                { icon: Globe, title: "Global Reach", desc: "We help you navigate the complexities of global distribution to reach readers everywhere." },
                { icon: BookOpen, title: "Quality Driven", desc: "We never compromise on the quality of editing, design, or production." },
              ].map((value, index) => (
                <div key={index} className="p-8 bg-slate-50 rounded-3xl border border-indigo-50">
                  <div className="w-12 h-12 bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight">Why Authors Choose Indigo.</h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              We bridge the gap between self-publishing and traditional publishing, offering professional polish with independent freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Expert Editorial Support",
              "Award-Winning Design",
              "Global Distribution Setup",
              "100% Rights Retention",
              "No Hidden Fees",
              "Transparent Timelines",
              "Custom Production Quotes",
              "Dedicated Project Managers"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-6 bg-white/10 rounded-2xl border border-white/10">
                <CheckCircle2 className="text-indigo-400 w-5 h-5 shrink-0" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity & Compliance */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-24 border border-indigo-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black text-indigo-900 mb-8 tracking-tight">A Note on Our Identity.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Indigo Publishers is an independent publishing services company. We are not a traditional publisher that acquires rights, and we are not a "vanity press" that makes false promises of fame.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                We provide professional production and distribution support for authors who want to self-publish at a high level. We are transparent about our role: we provide the tools and the polish; the market determines the outcome.
              </p>
              <div className="p-8 bg-white rounded-2xl border border-indigo-100 text-sm text-slate-500 italic">
                Indigo Publishers is an independent service provider and is not affiliated with, endorsed by, or an official partner of Amazon KDP, IngramSpark, or Barnes & Noble.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
