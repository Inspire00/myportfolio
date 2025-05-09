'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          src="/images/vincent_1.jpg"
          alt="Profile"
          width={300} // Specify the width
          height={300} // Specify the height
          className=" rounded-full mx-auto mb-6 object-cover"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto mb-6"
        >
          I'm a passionate app developer with expertise in React Native for mobile apps
          and Next.js for web applications. With years of experience, I craft user-friendly
          and innovative solutions tailored to client needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <p><strong>Email:</strong> vinnyatsa2@gmail.com</p>
          <p><strong>Phone:</strong> +27 78 759-4670</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/developer</p>
        </motion.div>
      </div>
    </main>
  );
}