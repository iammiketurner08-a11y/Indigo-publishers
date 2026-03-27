const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-indigo-900 mb-12 tracking-tight">Privacy Policy.</h1>
        <div className="prose prose-indigo max-w-none text-slate-600 leading-relaxed space-y-8">
          <p className="text-sm italic">Last updated: March 27, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">1. Introduction</h2>
            <p>
              Indigo Publishers ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website indigopublishers.com and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you request a quote, sign up for our newsletter, or contact us. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number.</li>
              <li>Manuscript details, genre, and word count.</li>
              <li>Any other information you choose to provide.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Send you technical notices, updates, and security alerts.</li>
              <li>Communicate with you about products, services, and events offered by Indigo Publishers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">4. Sharing of Information</h2>
            <p>
              We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">5. Your Choices</h2>
            <p>
              You may opt out of receiving promotional communications from us by following the instructions in those communications. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@indigopublishers.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
