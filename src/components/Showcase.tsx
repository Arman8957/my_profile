import { motion, Variants } from "framer-motion";

export default function Showcase() {
  // Define animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0d1117] text-white min-h-screen p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {/* Left Section */}
        <motion.div
          variants={itemVariants}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg relative"
        >
          <div className="absolute top-[-10px] right-[-10px] text-yellow-400">
            🚀
          </div>
          <img
            src="/earth-laptop.png"
            alt="Earth Laptop"
            className="rounded-lg w-full mb-4" />
          <h3 className="text-xl font-bold mb-2">
            I prioritize client collaboration
          </h3>
          <p>Fostering open communication and building trust.</p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          variants={itemVariants}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">
            I’m very flexible with time zone communications
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#0d1117] px-4 py-2 rounded-lg">USA</div>
            <div className="bg-[#0d1117] px-4 py-2 rounded-lg">Germany</div>
            <div className="bg-[#0d1117] px-4 py-2 rounded-lg">Ukraine</div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={itemVariants}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">My tech stack</h3>
          <div className="grid grid-cols-2 gap-4">
            <span className="bg-[#0d1117] px-4 py-2 rounded-lg">ReactJS</span>
            <span className="bg-[#0d1117] px-4 py-2 rounded-lg">VueJS</span>
            <span className="bg-[#0d1117] px-4 py-2 rounded-lg">Express</span>
            <span className="bg-[#0d1117] px-4 py-2 rounded-lg">GraphQL</span>
          </div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          variants={itemVariants}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">
            Tech enthusiast with a passion for development
          </h3>
          <p>
            Exploring new horizons with JS Animation libraries and frameworks.
          </p>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          variants={itemVariants}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">
            Do you want to start a project together?
          </h3>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
            Copy my email address
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
