import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AnimatedComponent: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-10 min-h-screen flex flex-wrap gap-6">
      {/* Card 1 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-purple-800 to-purple-600 p-8 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/3"
      >
        <img src="/images/earth.png" alt="Earth" className="h-32 mb-4" />
        <h2 className="text-xl font-bold text-center">
          I prioritize client collaboration, fostering open communication
        </h2>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/3"
      >
        <h3 className="text-lg font-semibold">I'm very flexible with time zone communications</h3>
        <ul className="mt-4">
          <li>🇺🇸 USA</li>
          <li>🇩🇪 Germany</li>
          <li>🇺🇦 Ukraine</li>
        </ul>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg w-full sm:w-1/3"
      >
        <h3 className="text-lg font-semibold">Tech enthusiast with a passion for development.</h3>
        <p className="text-sm mt-2">
          Currently building a JS Animation Library.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/3"
      >
        <h3 className="text-lg font-semibold">My Tech Stack</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li className="bg-gray-700 px-4 py-2 rounded">ReactJS</li>
          <li className="bg-gray-700 px-4 py-2 rounded">VueJS</li>
          <li className="bg-gray-700 px-4 py-2 rounded">NuxtJS</li>
          <li className="bg-gray-700 px-4 py-2 rounded">TypeScript</li>
          <li className="bg-gray-700 px-4 py-2 rounded">GraphQL</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
