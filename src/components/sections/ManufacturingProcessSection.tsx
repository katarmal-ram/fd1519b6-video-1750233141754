import React from 'react';
interface ManufacturingProcessSectionProps {
  section: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      step: number;
      title: string;
      description: string;
    }>;
  };
}
const ManufacturingProcessSection: React.FC<ManufacturingProcessSectionProps> = ({
  section
}) => {
  if (!section?.items?.length) {
    console.warn('ManufacturingProcessSection: No items provided');
    return null;
  }
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {section.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-transparent"></div>

          <div className="space-y-12">
            {section.items.map((step, index) => <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="lg:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ManufacturingProcessSection;