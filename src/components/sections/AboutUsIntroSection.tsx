
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AboutUsIntroSectionProps {
  section: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    highlights: string[];
  };
}

const AboutUsIntroSection: React.FC<AboutUsIntroSectionProps> = ({ section }) => {
  if (!section) {
    console.warn('AboutUsIntroSection: No section data provided');
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-xl text-amber-600 font-medium mb-6">
              {section.subtitle}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {section.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {section.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src={section.image}
              alt="About Jamnagar Brass Industries"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroSection;
