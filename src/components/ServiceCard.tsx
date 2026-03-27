import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Service } from "../types";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = (Icons as any)[service.icon] || Icons.Book;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block p-8 bg-white border border-indigo-50 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-900 transition-colors duration-300">
        <Icon className="text-indigo-900 w-7 h-7 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
        {service.description}
      </p>
      <div className="flex items-center text-indigo-900 text-sm font-bold group-hover:translate-x-1 transition-transform">
        Learn More <ArrowRight size={16} className="ml-2" />
      </div>
    </Link>
  );
};

export default ServiceCard;
