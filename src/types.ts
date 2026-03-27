export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  longDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  targetIntent: string;
  primaryHeadline: string;
  supportingHeadline: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  role: string;
}
