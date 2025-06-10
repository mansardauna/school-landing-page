import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Objective of the school',
    description: 'Among the outstanding objectives of the school is striving to achieve right from inception is training generations of studenton Acedemics per excellence on the platform of good upbringing to make them worthy leader of emulation in the nearest future.',
    icon: '🎓',
  },
  {
    title: 'Sports & Activities',
    description: 'The school is very much into several development activites. Among the numerous acts are: International and National Acedemics competitions. Reading and writting accessment and ajustment. weekly general lecture for all stages and levlel, Drama and illustration for better understanding',
    icon: '⚽',
  },
  {
    title: 'Brief History',
    description: 'Founded in 1992 by Alh Ahmad Abdulrahman Sardauna at Galadima Compound, Ilorin, Usuludeen-Islamiyya Arabic and Islamic School operated for four years. After the founder pursued a degree in Sokoto (1996–2000), revival efforts in 2003 failed, leading him to teach his and his late friend’s children for over seven years. In 2010, the school was reestablished at its permanent site in Gbagba, Ilorin.',
    icon: '👩‍🏫',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-sky-500" id="features">
     <h2 className="text-4xl font-bold text-center mb-12 text-white">About School</h2>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-xl h-fit bg-white hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-accent-raspberry/30"
            >
              <h3 className="text-2xl font-bold mb-3  text-primary">{feature.title}</h3>
              <p className="text-primary/80 text-justify">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}