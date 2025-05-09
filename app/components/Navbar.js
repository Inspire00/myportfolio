'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Profile' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Portfolio</Link>
        <div className="space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-2 py-1 ${
                pathname === link.href ? 'text-blue-400' : ''
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
