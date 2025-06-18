
import React from 'react';

interface ExpertiseSectionProps {
  section: {
    title: string;
    subtitle: string;
    description?: string;
    sectors: Array<{
      id: string;
      name: string;
      description: string;
      image: string;
      applications: string[];
    }>;
  };
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ section }) => {
  if (!section?.sectors?.length) {
    console.warn('ExpertiseSection: No sectors provided');
    return null;
  }

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.subtitle}
          </p>
          {section.description && (
            <p className="text-lg text-gray-500 max-w-4xl mx-auto mt-4">
              {section.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.sectors.map((sector, index) => (
            <div 
              key={sector.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {sector.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-amber-600 mb-3 uppercase tracking-wide">
                      Key Applications
                    </h4>
                    <div className="space-y-2">
                      {sector.applications.slice(0, 3).map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                          {app}
                        </div>
                      ))}
                      {sector.applications.length > 3 && (
                        <div className="text-sm text-amber-500 font-medium pt-1">
                          +{sector.applications.length - 3} more applications
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
