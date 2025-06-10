import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gallery4.jpeg')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/70 via-blue-600/90 to-blue-900/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-5xl text-white rakkas">نور قلبك, ثبت إيمانك</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Englighten your mind, Strengthen your faith
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow">
          Every Child is valued, Every Child is important.          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-accent-papaya transition-all duration-300 shadow-lg hover:shadow-xl"
          >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfOlmx3c2GaSakqguIEDvPLuf6fECpO5hsQbsA8uVuzfji6w/viewform">
              Apply Now
              </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}