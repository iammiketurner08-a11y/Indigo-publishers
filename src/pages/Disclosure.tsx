const Disclosure = () => {
  return (
    <div className="bg-white min-h-screen py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-indigo-900 mb-12 tracking-tight">Distribution Disclosures.</h1>
        <div className="prose prose-indigo max-w-none text-slate-600 leading-relaxed space-y-8">
          <p className="text-sm italic">Last updated: March 27, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">1. Independent Service Provider</h2>
            <p>
              Indigo Publishers is an independent publishing services company. We are not affiliated with, endorsed by, or an official partner of Amazon KDP, IngramSpark, Barnes & Noble, Apple Books, or Google Books.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">2. Distribution Channels</h2>
            <p>
              We provide technical support to help authors submit their work to major retail and distribution platforms. While we facilitate this process, the final approval and availability of your book are subject to the terms and conditions of each individual platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">3. No Guaranteed Outcomes</h2>
            <p>
              We do not guarantee book sales, royalties, rankings, or bestseller status. The success of a book depends on many factors, including market demand, the author's marketing efforts, and reader reception.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">4. Bookstore Placement</h2>
            <p>
              We make your book available for bookstores to order through major wholesalers. However, we do not guarantee physical shelf placement in bookstores. This is determined solely by the buyers at each individual bookstore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">5. Third-Party Fees</h2>
            <p>
              Some distribution platforms may charge their own fees (e.g., setup fees, revision fees). These fees are separate from Indigo Publishers' service fees and are the responsibility of the author.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
