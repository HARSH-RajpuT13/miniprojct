import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Leaf, MessageCircle, TrendingUp, Calendar, Clock, Recycle, Droplets, Wind, ArrowLeft, Trash2 } from "lucide-react";

interface ChatLog {
  id: string;
  title: string;
  date: string;
  time: string;
  messageCount: number;
  topics: string[];
  duration: string;
}

interface DashboardProps {
  onStartChat: () => void;
  onBackToHome: () => void;
}

export function Dashboard({ onStartChat, onBackToHome }: DashboardProps) {
  // Mock data for chat logs
  const chatLogs: ChatLog[] = [
    {
      id: "1",
      title: "Plastic Recycling Guide",
      date: "Nov 6, 2025",
      time: "10:30 AM",
      messageCount: 12,
      topics: ["Recycling", "Plastic"],
      duration: "8 min"
    },
    {
      id: "2",
      title: "Composting Basics",
      date: "Nov 5, 2025",
      time: "2:15 PM",
      messageCount: 18,
      topics: ["Composting", "Waste Management"],
      duration: "12 min"
    },
    {
      id: "3",
      title: "Water Conservation Tips",
      date: "Nov 4, 2025",
      time: "9:45 AM",
      messageCount: 15,
      topics: ["Water", "Conservation"],
      duration: "10 min"
    },
    {
      id: "4",
      title: "Sustainable Living Ideas",
      date: "Nov 3, 2025",
      time: "4:20 PM",
      messageCount: 22,
      topics: ["Sustainability", "Lifestyle"],
      duration: "15 min"
    },
    {
      id: "5",
      title: "E-waste Disposal",
      date: "Nov 2, 2025",
      time: "11:00 AM",
      messageCount: 9,
      topics: ["E-waste", "Recycling"],
      duration: "6 min"
    }
  ];

  const stats = [
    {
      icon: MessageCircle,
      label: "Total Conversations",
      value: "76",
      change: "+12 this week",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Recycle,
      label: "Topics Explored",
      value: "24",
      change: "Recycling, Composting, Water",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: TrendingUp,
      label: "Learning Streak",
      value: "15 days",
      change: "Keep it going!",
      color: "from-teal-400 to-green-500"
    },
    {
      icon: Clock,
      label: "Time Spent Learning",
      value: "4.2 hrs",
      change: "This month",
      color: "from-green-400 to-emerald-500"
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
              <Button
                onClick={onBackToHome}
                variant="ghost"
                className="rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
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
                <h1 className="text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-600">Track your eco-learning journey</p>
              </div>
            </div>
            <Button
              onClick={onStartChat}
              className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-emerald-100 shadow-md hover:shadow-xl transition-all rounded-3xl">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-gray-800 mb-2">{stat.value}</p>
                <p className="text-xs text-emerald-600">{stat.change}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Chat History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-gray-800">Recent Conversations</h2>
              <p className="text-sm text-gray-600">Your chat history with Rikki</p>
            </div>
          </div>

          <div className="space-y-4">
            {chatLogs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-white/60 backdrop-blur-sm border-emerald-100 shadow-md hover:shadow-xl transition-all rounded-3xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-800 mb-1">{log.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {log.topics.map((topic, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-emerald-50 border-emerald-200 text-emerald-700 rounded-full"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {log.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {log.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {log.messageCount} messages
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {log.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="rounded-full border-emerald-200 hover:bg-emerald-50"
                        onClick={onStartChat}
                      >
                        Continue
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-sm border-emerald-200 shadow-md rounded-3xl">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-600">
                Start a new conversation to continue your sustainable learning journey!
              </p>
              <Button
                onClick={onStartChat}
                className="mt-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Rikki
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
