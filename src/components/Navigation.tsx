import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-3 items-center">
          <img
        className="rounded-lg"
        src="/gallery5d.jpeg"
        alt="logo"
        width={60}
        height={60}
      />
        <a href="#" className="text-2xl font-bold lobster text-blue-400">
            Usuludeen
          </a>

          </div>
        
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#key-info">Programs</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfOlmx3c2GaSakqguIEDvPLuf6fECpO5hsQbsA8uVuzfji6w/viewform">
              Apply Now
              </a>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-blue-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-600"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="#key-info" onClick={() => setIsOpen(false)}>
                  Programs
                </MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </MobileNavLink>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-300 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-300 transition-all duration-300 shadow-md"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-primary hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-primary hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}