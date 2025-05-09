'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Onside Events Admin',
    type: 'Mobile & Web App',
    image: '/images/Onside.jpg',
    description: 'Administration apps that aim to make operations more efficient, effevtive,trackable and measurable.',
    slug: 'onside-events',
  },
  {
    id: 2,
    title: 'Phanda',
    type: 'Mobile App',
    image: '/images/phanda_pic.jpg',
    description: 'This is a wallet that helps gig workers accurately track their monthly hours they work and calculate what is due to them.',
    slug: 'phanda-platform',
  },
  {
    id: 3,
    title: 'Signature Events',
    type: 'Mobile App',
    image: '/images/sig.jpg',
    description: 'A mobile app that enables the admin to effectively track events and have an e-payroll and an invoice billing system.',
    slug: 'signature-events',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to My App Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl"
          >
            Discover innovative mobile and web apps built with React Native and Next.js
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300} // Specify the width
                  height={300} // Specify the height
                  
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.type}</p>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}