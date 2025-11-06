import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Leaf, Recycle, Droplets, Wind, MessageCircle, TrendingDown, BookOpen, Sparkles } from "lucide-react";

interface HeroPageProps {
  onStartChat: () => void;
  onViewDashboard: () => void;
}

export function HeroPage({ onStartChat, onViewDashboard }: HeroPageProps) {
  const features = [
    {
      icon: MessageCircle,
      title: "Personalized Guidance",
      description: "Get tailored advice on recycling, composting, and sustainable practices"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Learn proper recycling techniques and waste sorting methods"
    },
    {
      icon: TrendingDown,
      title: "Track Your Impact",
      description: "Monitor your eco-friendly actions and see your environmental impact"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access a wealth of knowledge about sustainable living"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-gray-800">Rikki</h1>
                <p className="text-sm text-gray-600">Eco-Friendly AI Assistant</p>
              </div>
            </div>
            <Button
              onClick={onViewDashboard}
              variant="outline"
              className="rounded-full border-emerald-200 hover:bg-emerald-50"
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">AI-Powered Sustainability</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-800 mb-6"
          >
            Your Journey to Sustainable Living
            <br />
            Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Meet Rikki, your intelligent eco-companion. Get instant answers about recycling, 
            composting, waste management, and sustainable practices. Together, we'll make the 
            world a greener place, one conversation at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={onStartChat}
              className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chatting with Rikki
            </Button>
            <Button
              onClick={onViewDashboard}
              variant="outline"
              className="rounded-full border-emerald-200 hover:bg-emerald-50 px-8 py-6"
            >
              View Your Dashboard
            </Button>
          </motion.div>

          {/* Floating icons */}
          <div className="relative mt-16 h-24">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/4 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg"
            >
              <Recycle className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg"
            >
              <Droplets className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute right-1/4 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center shadow-lg"
            >
              <Wind className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-emerald-100 shadow-md hover:shadow-xl transition-all rounded-3xl h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-sm border-emerald-200 shadow-xl rounded-3xl">
            <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-gray-800 mb-4">Ready to Make a Difference?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Join thousands of users who are making sustainable choices every day. 
              Start your eco-friendly journey with Rikki now!
            </p>
            <Button
              onClick={onStartChat}
              className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6"
            >
              Get Started Free
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
