const RefundPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-indigo-900 mb-12 tracking-tight">Refund Policy.</h1>
        <div className="prose prose-indigo max-w-none text-slate-600 leading-relaxed space-y-8">
          <p className="text-sm italic">Last updated: March 27, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">1. General Policy</h2>
            <p>
              At Indigo Publishers, we strive for excellence in every project. Due to the custom nature of our professional services (editing, design, formatting), our refund policy is milestone-based.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">2. Editorial Services</h2>
            <p>
              Editorial services (developmental editing, copy editing, proofreading) are non-refundable once work has commenced. If you choose to cancel before work begins, a full refund of the editorial fee will be issued, minus a 5% administrative fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">3. Design Services</h2>
            <p>
              Design services (cover design, illustrations) are non-refundable once the initial concepts have been presented. If you choose to cancel before the first concepts are delivered, a 50% refund of the design fee will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">4. Formatting and Distribution</h2>
            <p>
              Formatting and distribution setup fees are non-refundable once the final files have been generated or the distribution process has been initiated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">5. Requesting a Refund</h2>
            <p>
              To request a refund, please contact your project manager or email hello@indigopublishers.com with your project details and the reason for the request.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
