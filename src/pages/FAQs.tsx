import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "Is Indigo Publishers a traditional publisher?",
          a: "No, we are an independent publishing services company. We provide professional production and distribution support for authors who want to self-publish at a high level. You retain all rights and royalties."
        },
        {
          q: "Do I keep the rights to my book?",
          a: "Yes, 100%. You own the copyright, the files, and the rights to your work. We act as your service provider, not your owner."
        },
        {
          q: "How much does it cost to publish a book?",
          a: "Costs vary significantly based on the length of your manuscript and the services you require. We provide custom quotes for every project to ensure you only pay for what you need."
        }
      ]
    },
    {
      category: "Production",
      questions: [
        {
          q: "How long does the publishing process take?",
          a: "A typical production cycle (editing, design, formatting, and distribution setup) takes between 3 to 6 months, depending on the complexity of the project."
        },
        {
          q: "Can I choose my own editor or designer?",
          a: "We match you with the best professional from our team based on your genre and style, but we always encourage a collaborative process where your feedback is central."
        },
        {
          q: "What formats will my book be available in?",
          a: "We can produce your book in paperback, hardcover, eBook (EPUB), and audiobook formats."
        }
      ]
    },
    {
      category: "Distribution & Marketing",
      questions: [
        {
          q: "Where will my book be sold?",
          a: "We set up distribution through major platforms like Amazon KDP and IngramSpark, making your book available to thousands of retailers and libraries worldwide."
        },
        {
          q: "Do you guarantee my book will be in physical bookstores?",
          a: "We make your book available for bookstores to order through major wholesalers, but we do not guarantee physical shelf placement. That is determined by individual bookstore buyers."
        },
        {
          q: "Do you guarantee bestseller status?",
          a: "No, we do not guarantee sales, rankings, or bestseller status. We provide the professional polish and strategic support to give your book the best possible chance of success."
        }
      ]
    }
  ];

  const allQuestions = faqs.flatMap(f => f.questions);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-200">
            Help Center
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-indigo-900 mb-8 tracking-tight leading-tight">
            Common Questions. <br />
            <span className="text-indigo-600">Clear Answers.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Everything you need to know about independent publishing with Indigo Publishers.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, cIndex) => (
              <div key={cIndex}>
                <h2 className="text-sm font-black text-indigo-900 uppercase tracking-widest mb-8 border-b border-indigo-100 pb-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = faqs.slice(0, cIndex).reduce((acc, curr) => acc + curr.questions.length, 0) + qIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={qIndex} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                        >
                          <span className="text-lg font-bold text-indigo-900 pr-8">{faq.q}</span>
                          {isOpen ? <ChevronUp className="text-indigo-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="p-6 pt-0 bg-white text-slate-600 leading-relaxed text-sm animate-in slide-in-from-top-2 duration-200">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight">Still Have Questions?</h2>
          <p className="text-lg text-indigo-100 mb-12 leading-relaxed">
            Our publishing consultants are here to help. Contact us for a free, no-obligation consultation about your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">Request a Consultation</Button>
            </Link>
            <a href="mailto:hello@indigopublishers.com">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Email Us Directly</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
