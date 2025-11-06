import { useState, useRef } from 'react';
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { sendChatMessage, analyzeImage } from '../services/api';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      onSendMessage(input); // Show user message immediately
      const response = await sendChatMessage(input);
      onSendMessage(response.message); // Show bot response
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput("");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      onSendMessage("Analyzing image...");
      const response = await analyzeImage(file);
      onSendMessage(response.analysis);
    } catch (error) {
      console.error('Error analyzing image:', error);
      onSendMessage("Sorry, I couldn't analyze the image.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="min-h-[40px] w-full resize-none"
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <Button type="button" onClick={() => fileInputRef.current?.click()}>
        Upload
      </Button>
      <Button type="submit">Send</Button>
    </form>
  );
}
