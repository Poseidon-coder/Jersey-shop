import React from 'react'
import { 
  FaShippingFast, 
  FaShieldAlt, 
  FaSyncAlt, 
  FaHeadset 
} from 'react-icons/fa'

const featuresData = [
  {
    id: 1,
    icon: FaShippingFast,
    title: 'Express Delivery',
    description: 'Fast nationwide shipping',
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: '100% Authentic',
    description: 'Official team quality',
  },
  {
    id: 3,
    icon: FaSyncAlt,
    title: '30-Day Returns',
    description: 'Hassle-free exchanges',
  },
  {
    id: 4,
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Dedicated assistance',
  },
]

function Feature() {
  return (
    <section className="bg-slate-900 py-10 w-full border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header with Quote */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-[10px] font-black tracking-widest text-[#FFE600] uppercase">
            The Legacy Advantage
          </span>
          <h2 className="text-xl font-black text-white uppercase tracking-tight">
            Why Choose Us
          </h2>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {featuresData.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="flex items-center gap-3.5 group justify-center sm:justify-start"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-lg bg-slate-900 text-[#FFE600] shrink-0 group-hover:bg-[#FFE600] group-hover:text-black transition-colors duration-200">
                  <IconComponent className="text-base" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='text-center space-y-2 max-w-xl mx-auto'>
            <h1 className="text-xs italic text-slate-400 font-medium">
            "More than just fabric—wearing the colors is wearing the legacy."
            </h1>
        </div>
        <br />
      </div>
    </section>
  )
}

export default Feature