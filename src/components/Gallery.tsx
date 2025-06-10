import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  { 
    src: '/gallery1.jpeg', 
    alt: 'Students assessment 1' 
  },
  { 
    src: '/gallery2.jpeg', 
    alt: 'Students assessment 2' 
  },
  { 
    src: '/gallery4.jpeg', 
    alt: 'staffs and students' 
  },
  { 
    src: '/gallery6.jpeg', 
    alt: 'Sports activities' 
  },
 
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-neutral-light" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Life at Our School
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-medium">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}