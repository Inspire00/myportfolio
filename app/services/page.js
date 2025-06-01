'use client';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Basic Package',
    price: 'R15,000',
    features: [
      'Single platform app (Android)',
      'Up to 8 screens',
      'No backend integration',
      '6 months support',
    ],
  },
  {
    title: 'Standard Package',
    price: 'R25,000',
    features: [
      'Single-platform app (Android)',
      'Up to 12 screens',
      'Backend databse integration',
      '9 months support',
    ],
  },
  {
    title: 'Premium Package',
    price: 'R70,000+',
    features: [
      'Single platform app + web app',
      'Unlimited screens',
      'Full backend integration',
      'Analytics & notifications',
      '12 months support',
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
                Contact Me: vinnyatsa2@gmail.com
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
