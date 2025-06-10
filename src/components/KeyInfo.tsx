import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const academicPrograms = [
  { name: 'Beginner', description: 'Quran Memorization, Basic Hadith Science, Basic Islaimic Etiquette' },
  { name: 'Standard', description: 'Reading and Writing skills, Standard Islaimic Etiquette and laws' },
  { name: 'Professional', description: 'Islamic Lecturing skills, Professionalism in Arabic language, Advance Shariah law' },
];

const extracurriculars = [
  { name: 'Sports Teams', description: 'Soccer, volley ball, Track & Field' },
  { name: 'Quiz & competition', description: 'Inter-class, Intra-class, Gender quiz, Inter school competition' },
  { name: 'Academic Clubs', description: 'Matching and parade club, Self development club, Sister circle' },
];

const applicationSteps = [
  { step: '1', title: 'Submit Application', description: 'Complete the online application form with student information' },
  { step: '2', title: 'Documentation', description: 'Provide academic records and recommendations' },
  { step: '3', title: 'Assessment', description: 'Schedule entrance exam and interview' },
];

export default function KeyInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-zinc-100" id="key-info">
      <div className="container mx-auto px-4">
        {/* Academics Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Academic Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-600">{program.name}</h3>
                <p className="text-primary/80">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extracurriculars Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-600">{activity.name}</h3>
                <p className="text-primary/80">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Apply Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-600/10"
              >
                <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-300 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-600 mt-2">{step.title}</h3>
                <p className="text-primary/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-300 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-accent-vermilion hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfOlmx3c2GaSakqguIEDvPLuf6fECpO5hsQbsA8uVuzfji6w/viewform">
                 Start Application
                               </a>
              
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}