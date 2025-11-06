import { motion } from "motion/react";
import { Avatar } from "./ui/avatar";
import { Leaf, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex gap-3 ${isBot ? "justify-start" : "justify-end"} mb-6`}
    >
      {isBot && (
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
            <Leaf className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
      
      <div className={`flex flex-col ${isBot ? "items-start" : "items-end"} max-w-[75%] sm:max-w-[65%]`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`px-5 py-3 rounded-3xl shadow-md ${
            isBot
              ? "bg-white/80 backdrop-blur-sm border border-emerald-100"
              : "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
          }`}
        >
          <p className="leading-relaxed">{message}</p>
        </motion.div>
        <span className="text-xs text-gray-500 mt-1.5 px-2">{timestamp}</span>
      </div>

      {!isBot && (
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
