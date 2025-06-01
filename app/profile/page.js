'use client';
import { motion } from 'framer-motion'; // Named export
import Image from 'next/image';

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
         
        >
          <Image
            src="/images/vincent_1.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-6 object-cover"
          />
        </motion.div>
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
          className="text-lg w-full mx-auto mb-6"
        >
          <>
            <p className='w-full px-5 text-justify leading-relaxed tracking-normal'>
            I am Vincent, a self-taught full-stack developer with a relentless passion for crafting cutting-edge mobile and web applications that solve real-world problems. My journey into tech began with a spark of curiosity and has evolved into a thriving career where I build seamless, scalable SaaS solutions that empower businesses and delight users. Armed with expertise in React Native, Next.js, and Django, I weave together robust backends and dynamic, user-friendly frontends with finesse.
            
            </p>

            <p className='w-full px-5 text-justify leading-relaxed tracking-normal mt-2'>
            
            Fluent in JavaScript, Python, and PHP, I thrive on transforming complex ideas into elegant, functional code. Whether it is architecting a responsive mobile app with React Native, delivering lightning-fast web experiences with Next.js, or powering secure, data-driven platforms with Django, I’m driven by the thrill of innovation and the art of problem-solving. My self-taught roots keep me hungry for learning, ensuring I stay ahead of the curve in the ever-evolving tech landscape.
            Reach out to collaborate or bring your next big idea to life!📧.  
            
            </p>

            <p className='w-full px-5 text-justify leading-relaxed tracking-normal mt-2'>
            
            
              Let us build something extraordinary together!
            </p>

          </>

        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <p><strong>Email 📧:</strong> vinnyatsa2@gmail.com</p>
          <p><strong>Whatapp📱:</strong> +27 82 840 8141</p>
          <p><strong>Phone 📞:</strong> +27 78 759 4670</p>
          
        </motion.div>
      </div>
    </main>
  );
}