import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: "publishing",
    title: "Book Publishing",
    slug: "book-publishing",
    description: "Full-service production and distribution support for authors.",
    icon: "BookOpen",
    primaryHeadline: "Professional Book Publishing for Independent Authors",
    supportingHeadline: "Your manuscript, professionally produced and ready for the world.",
    longDescription: "Our comprehensive publishing service handles the technical complexities of bringing a book to market, allowing you to focus on your writing. We provide end-to-end support from manuscript to marketplace.",
    targetIntent: "Authors looking for a complete publishing partner.",
    features: [
      "Project management from start to finish",
      "Coordination of all production services",
      "Distribution setup on major platforms",
      "Metadata optimization for discoverability",
      "Quality control at every stage"
    ],
    faqs: [
      {
        question: "Do I keep the rights to my book?",
        answer: "Yes, you retain 100% of the rights to your work. We act as your service provider, not your owner."
      },
      {
        question: "How long does the process take?",
        answer: "Timelines vary based on the services required, but typically range from 3 to 6 months for a full production cycle."
      }
    ]
  },
  {
    id: "editing",
    title: "Editing",
    slug: "book-editing",
    description: "Developmental, copy, and line editing to polish your prose.",
    icon: "FileText",
    primaryHeadline: "Professional Book Editing Services",
    supportingHeadline: "Refine your voice and perfect your manuscript with expert editorial support.",
    longDescription: "Great books are made in the editing phase. Our professional editors work with you to strengthen your narrative, clarify your message, and ensure your prose is polished and professional.",
    targetIntent: "Authors seeking professional editorial refinement.",
    features: [
      "Developmental editing for structure and pacing",
      "Line editing for style and flow",
      "Copy editing for grammar and consistency",
      "Detailed editorial feedback reports",
      "Direct communication with your editor"
    ],
    faqs: [
      {
        question: "What is the difference between developmental and copy editing?",
        answer: "Developmental editing focuses on the 'big picture' like plot and character, while copy editing focuses on the technical details of grammar and style."
      }
    ]
  },
  {
    id: "proofreading",
    title: "Proofreading",
    slug: "proofreading",
    description: "The final polish to catch every typo and error.",
    icon: "CheckCircle",
    primaryHeadline: "Expert Proofreading for a Flawless Finish",
    supportingHeadline: "The final line of defense against typos, grammar slips, and formatting errors.",
    longDescription: "Proofreading is the final stage of the editorial process. We meticulously review your formatted manuscript to catch any remaining errors before it goes to print.",
    targetIntent: "Authors ready for the final pre-publication check.",
    features: [
      "Correction of spelling and punctuation errors",
      "Grammar and syntax checks",
      "Consistency verification",
      "Final formatting review",
      "Meticulous attention to detail"
    ],
    faqs: [
      {
        question: "Is proofreading the same as editing?",
        answer: "No, proofreading is the final check for errors after editing and formatting are complete."
      }
    ]
  },
  {
    id: "formatting",
    title: "Formatting",
    slug: "book-formatting",
    description: "Professional interior layout for print and digital editions.",
    icon: "Layout",
    primaryHeadline: "Professional Book Formatting Services",
    supportingHeadline: "Ensure your book looks professional on every device and in every format.",
    longDescription: "We provide expert interior layout services for both print (hardcover/paperback) and digital (eBook) editions, ensuring a seamless reading experience.",
    targetIntent: "Authors needing professional interior design.",
    features: [
      "Custom interior layout design",
      "eBook conversion (EPUB/MOBI)",
      "Print-ready PDF generation",
      "Chapter heading and front matter design",
      "Optimized for all major e-readers"
    ],
    faqs: [
      {
        question: "Will my book look the same in print and eBook?",
        answer: "While we maintain consistent branding, eBooks are reflowable and will adapt to the reader's device settings."
      }
    ]
  },
  {
    id: "typesetting",
    title: "Typesetting",
    slug: "typesetting",
    description: "High-end typographic design for a premium reading experience.",
    icon: "Type",
    primaryHeadline: "Premium Book Typesetting",
    supportingHeadline: "Exquisite typographic design for authors who value aesthetic excellence.",
    longDescription: "Typesetting is the art of arranging text for optimal readability and beauty. Our experts use professional tools to create a premium reading experience.",
    targetIntent: "Authors seeking high-end typographic design.",
    features: [
      "Custom font selection and pairing",
      "Kerning and tracking optimization",
      "Hyphenation and justification control",
      "Orphan and widow management",
      "Special character handling"
    ],
    faqs: [
      {
        question: "Why is typesetting important?",
        answer: "Professional typesetting significantly improves readability and gives your book a high-end, professional feel."
      }
    ]
  },
  {
    id: "cover-design",
    title: "Cover Design",
    slug: "book-cover-design",
    description: "Stunning, market-ready covers that capture attention.",
    icon: "Image",
    primaryHeadline: "Stunning Book Cover Design",
    supportingHeadline: "A cover that captures your story and commands attention in the marketplace.",
    longDescription: "Your cover is your most important marketing tool. Our designers create bespoke covers that reflect your book's genre and appeal to your target audience.",
    targetIntent: "Authors needing a high-impact book cover.",
    features: [
      "Custom front, back, and spine design",
      "Genre-specific market research",
      "Multiple design concepts to choose from",
      "Print-ready and eBook versions",
      "Unlimited revisions (within scope)"
    ],
    faqs: [
      {
        question: "Do I own the rights to the cover art?",
        answer: "Yes, upon final payment, you own the rights to the final cover design."
      }
    ]
  },
  {
    id: "isbn",
    title: "ISBN Services",
    slug: "isbn-registration",
    description: "Official ISBN registration and barcode generation.",
    icon: "Hash",
    primaryHeadline: "Official ISBN Registration Services",
    supportingHeadline: "Secure your book's unique identity with official ISBN and barcode registration.",
    longDescription: "An ISBN is essential for book distribution and sales tracking. We handle the registration process and provide high-resolution barcodes for your cover.",
    targetIntent: "Authors needing official book identification.",
    features: [
      "Official ISBN registration",
      "High-resolution barcode generation",
      "Metadata registration with Bowker",
      "Guidance on ISBN placement",
      "Support for multiple formats"
    ],
    faqs: [
      {
        question: "Do I need a separate ISBN for my eBook?",
        answer: "While not always strictly required by all retailers, it is best practice to have a unique ISBN for each format (Print, eBook, Audiobook)."
      }
    ]
  },
  {
    id: "marketing",
    title: "Book Marketing",
    slug: "book-marketing-support",
    description: "Strategic support to help your book find its audience.",
    icon: "TrendingUp",
    primaryHeadline: "Strategic Book Marketing Support",
    supportingHeadline: "Build your author platform and connect with your target readers.",
    longDescription: "Marketing is an ongoing process. We provide the tools and strategy you need to promote your book effectively in a crowded marketplace.",
    targetIntent: "Authors seeking promotional and platform-building support.",
    features: [
      "Custom marketing strategy development",
      "Amazon advertising setup and management",
      "Social media content planning",
      "Press release writing and distribution",
      "Email marketing setup"
    ],
    faqs: [
      {
        question: "Do you guarantee bestseller status?",
        answer: "No, we do not guarantee sales or rankings. We provide the tools and strategy to give your book the best possible chance of success."
      }
    ]
  },
  {
    id: "author-website",
    title: "Author Website",
    slug: "author-website-design",
    description: "Professional websites to build your author brand.",
    icon: "Globe",
    primaryHeadline: "Professional Author Website Design",
    supportingHeadline: "Your digital home base for connecting with readers and selling books.",
    longDescription: "An author website is the hub of your online presence. We build professional, mobile-responsive sites that showcase your work and build your brand.",
    targetIntent: "Authors needing a professional online presence.",
    features: [
      "Custom mobile-responsive design",
      "Book showcase and sales links",
      "Email list integration",
      "Blog and news section",
      "Search engine optimization (SEO)"
    ],
    faqs: [
      {
        question: "Do I need to know how to code?",
        answer: "No, we build our sites on user-friendly platforms that allow you to update content easily."
      }
    ]
  },
  {
    id: "illustrations",
    title: "Illustration Designs",
    slug: "book-illustrations",
    description: "Custom artwork for children's books and more.",
    icon: "Palette",
    primaryHeadline: "Custom Book Illustration Services",
    supportingHeadline: "Bring your story to life with bespoke artwork from professional illustrators.",
    longDescription: "Whether you need a few spot illustrations or a fully illustrated children's book, our artists can bring your vision to life in a variety of styles.",
    targetIntent: "Authors needing custom artwork for their books.",
    features: [
      "Wide range of artistic styles",
      "Character design and development",
      "Full-page and spot illustrations",
      "Collaborative design process",
      "High-resolution digital files"
    ],
    faqs: [
      {
        question: "Can I choose the artist's style?",
        answer: "Yes, we work with a diverse group of illustrators and will match you with one whose style fits your vision."
      }
    ]
  },
  {
    id: "childrens-publishing",
    title: "Children’s Book Publishing",
    slug: "childrens-book-publishing",
    description: "Specialized support for the unique needs of children's authors.",
    icon: "Smile",
    primaryHeadline: "Specialized Children's Book Publishing",
    supportingHeadline: "From vibrant illustrations to durable printing, we handle the unique needs of children's books.",
    longDescription: "Children's books require a unique approach to design, illustration, and production. We provide specialized support to ensure your book delights young readers.",
    targetIntent: "Authors of picture books and middle-grade fiction.",
    features: [
      "Specialized layout for picture books",
      "Illustration coordination and management",
      "Durable printing options (board books, etc.)",
      "Age-appropriate marketing strategy",
      "Distribution to specialized retailers"
    ],
    faqs: [
      {
        question: "Do you handle board books?",
        answer: "Yes, we can coordinate the production and printing of board books for toddlers."
      }
    ]
  },
  {
    id: "printing",
    title: "Book Printing",
    slug: "book-printing-services",
    description: "High-quality print production for all book types.",
    icon: "Printer",
    primaryHeadline: "High-Quality Book Printing Services",
    supportingHeadline: "Professional print production for paperbacks, hardcovers, and more.",
    longDescription: "We coordinate with top-tier printers to ensure your book is produced to the highest standards, whether you need a few copies or a large run.",
    targetIntent: "Authors needing professional print production.",
    features: [
      "Paperback and hardcover options",
      "Premium paper and binding choices",
      "Print-on-demand (POD) setup",
      "Offset printing for large runs",
      "Quality assurance at the press"
    ],
    faqs: [
      {
        question: "What is print-on-demand?",
        answer: "Print-on-demand allows books to be printed as they are ordered, eliminating the need for large upfront inventory."
      }
    ]
  },
  {
    id: "audiobook",
    title: "Audiobook Creation",
    slug: "audiobook-production",
    description: "Professional narration and production for audiobooks.",
    icon: "Headphones",
    primaryHeadline: "Professional Audiobook Production",
    supportingHeadline: "Expand your reach with high-quality audiobook narration and production.",
    longDescription: "Audiobooks are the fastest-growing segment of the publishing industry. We provide professional narration and production to bring your story to listeners.",
    targetIntent: "Authors looking to expand into the audio market.",
    features: [
      "Professional voice talent selection",
      "Studio-quality recording and editing",
      "ACX/Audible compliant production",
      "Retail distribution setup",
      "Audiobook cover art optimization"
    ],
    faqs: [
      {
        question: "Can I narrate my own book?",
        answer: "Yes, though we recommend professional narrators for the best listener experience. We can provide coaching if you choose to narrate yourself."
      }
    ]
  },
  {
    id: "distribution",
    title: "Distribution Service",
    slug: "book-distribution",
    description: "Global distribution support to reach readers everywhere.",
    icon: "Truck",
    primaryHeadline: "Global Book Distribution Support",
    supportingHeadline: "Reach readers worldwide through major retailers and libraries.",
    longDescription: "We help you navigate the complex world of book distribution, ensuring your book is available through major retailers like Amazon, Barnes & Noble, and more.",
    targetIntent: "Authors seeking wide retail and library availability.",
    features: [
      "Submission to major online retailers",
      "IngramSpark and KDP setup",
      "Library distribution coordination",
      "International market reach",
      "Sales reporting and tracking"
    ],
    faqs: [
      {
        question: "Will my book be in physical bookstores?",
        answer: "We make your book available for bookstores to order, but we do not guarantee physical shelf placement."
      }
    ]
  }
];
