import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      desc: "We begin with a deep dive into your manuscript, your goals, and your vision for the book. This helps us tailor a production plan that fits your specific needs.",
      details: ["Manuscript review", "Genre analysis", "Goal setting", "Service recommendations"]
    },
    {
      number: "02",
      title: "Editorial & Design",
      desc: "Our professional editors and designers get to work. We refine your prose, design a stunning cover, and format the interior for a premium reading experience.",
      details: ["Professional editing", "Custom cover design", "Interior formatting", "Typesetting"]
    },
    {
      number: "03",
      title: "Review & Refinement",
      desc: "You are an integral part of the process. You'll review every element of your book and provide feedback to ensure the final product is exactly what you envisioned.",
      details: ["Proofreading", "Design revisions", "Final approval", "Quality assurance"]
    },
    {
      number: "04",
      title: "Distribution & Launch",
      desc: "Once your book is ready, we handle the technical setup on major global platforms, ensuring your book is available to readers worldwide.",
      details: ["ISBN registration", "Platform setup (KDP/Ingram)", "Metadata optimization", "Global distribution"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-200">
            How We Work
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-indigo-900 mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
            A Transparent Path to <br />
            <span className="text-indigo-600">Professional Publication.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We believe in clarity and collaboration. Our process is designed to keep you informed and in control at every stage of production.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-48">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="text-6xl lg:text-8xl font-black text-indigo-100 mb-6">{step.number}</div>
                  <h2 className="text-3xl lg:text-4xl font-black text-indigo-900 mb-6 tracking-tight">{step.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-10">
                    {step.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-indigo-600 w-5 h-5 shrink-0" />
                        <span className="text-sm font-bold text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-indigo-50">
                    <img src={`https://picsum.photos/seed/step${index}/800/600`} alt={step.title} className="w-full h-auto" referrerPolicy="no-referrer" />
                  </div>
                  {index === 3 && (
                    <div className="absolute -bottom-10 -right-10 bg-indigo-900 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                      <p className="text-4xl font-black mb-2">Ready</p>
                      <p className="text-sm font-bold uppercase tracking-widest opacity-80 text-indigo-200">For the World</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-indigo-900 mb-8 tracking-tight">Ready to Start Step One?</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Your publishing journey begins with a free consultation. Let's discuss your manuscript and build your custom production plan.
          </p>
          <Link to="/request-quote">
            <Button size="lg">Request Your Free Consultation <ArrowRight size={18} className="ml-2" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
