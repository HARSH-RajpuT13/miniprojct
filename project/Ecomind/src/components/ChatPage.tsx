import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ChatMessage } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { Button } from "./ui/button";
import { Leaf, Recycle, Droplets, Wind, ArrowLeft, LayoutDashboard } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
}

interface ChatPageProps {
  onBackToHome: () => void;
  onViewDashboard: () => void;
}

const botResponses = [
  "Great question! Plastic recycling starts with checking the number on the bottom. Numbers 1, 2, and 5 are most commonly accepted. Always rinse containers before recycling!",
  "Composting is wonderful for the environment! Start with fruit/veggie scraps, coffee grounds, and eggshells. Avoid meat, dairy, and oily foods. Keep your bin moist but not soggy.",
  "To reduce water waste, try shorter showers, fix leaky faucets, and collect rainwater for plants. Every drop counts towards a sustainable future! 💧",
  "That's an excellent sustainable practice! Small changes make a big difference. What else would you like to learn about?",
  "I'm here to help you on your eco-journey! Together, we can make our planet greener. 🌱"
];

export function ChatPage({ onBackToHome, onViewDashboard }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Rikki, your eco-friendly assistant. 🌿 I'm here to help you learn about waste management, recycling, and sustainable living. How can I help you today?",
      isBot: true,
      timestamp: "10:30 AM"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit",
      hour12: true 
    });

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: timeString
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: timeString
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-screen max-w-5xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm"
        >
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <Button
                onClick={onBackToHome}
                variant="ghost"
                size="icon"
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
              <div className="flex-1">
                <h1 className="text-gray-800">Rikki</h1>
                <p className="text-sm text-gray-600">Your Eco-Friendly AI Assistant</p>
              </div>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:flex w-8 h-8 rounded-full bg-emerald-100 items-center justify-center"
                >
                  <Recycle className="w-4 h-4 text-emerald-600" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:flex w-8 h-8 rounded-full bg-blue-100 items-center justify-center"
                >
                  <Droplets className="w-4 h-4 text-blue-600" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="hidden sm:flex w-8 h-8 rounded-full bg-cyan-100 items-center justify-center"
                >
                  <Wind className="w-4 h-4 text-cyan-600" />
                </motion.div>
                <Button
                  onClick={onViewDashboard}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-emerald-200 hover:bg-emerald-50"
                >
                  <LayoutDashboard className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden">
          <div ref={scrollRef} className="h-full overflow-y-auto px-4 sm:px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isBot={message.isBot}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && <TypingIndicator />}
            </motion.div>
          </div>
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/40 border-t border-white/20"
        >
          <div className="relative">
            <ChatInput onSendMessage={handleSendMessage} />
            {isTyping && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-white/40 backdrop-blur-sm rounded-t-md" />
                <div className="absolute">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
