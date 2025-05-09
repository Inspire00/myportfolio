'use client';
import { motion } from 'framer-motion';

export default function ProjectDetailContent({ project }) {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          {project.title}
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <video src={project.video} controls className="w-full max-w-[640px] h-[360px] rounded-lg mx-auto object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {Object.entries(project.features).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <span className="w-32 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}