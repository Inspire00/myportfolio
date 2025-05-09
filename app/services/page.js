'use client';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Basic Package',
    price: '$2,000',
    features: [
      'Single platform app (iOS or Android)',
      'Up to 5 screens',
      'Basic backend integration',
      '1 month support',
    ],
  },
  {
    title: 'Standard Package',
    price: '$5,000',
    features: [
      'Cross-platform app (iOS & Android)',
      'Up to 10 screens',
      'Advanced backend integration',
      'Push notifications',
      '3 months support',
    ],
  },
  {
    title: 'Premium Package',
    price: '$10,000+',
    features: [
      'Cross-platform app + web app',
      'Unlimited screens',
      'Full backend integration',
      'Analytics & notifications',
      '6 months support',
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">{pkg.title}</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact Me
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
