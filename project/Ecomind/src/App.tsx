import { useState } from "react";
import { HeroPage } from "./components/HeroPage";
import { ChatPage } from "./components/ChatPage";
import { Dashboard } from "./components/Dashboard";

type Page = "hero" | "chat" | "dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("hero");

  const navigateToChat = () => setCurrentPage("chat");
  const navigateToDashboard = () => setCurrentPage("dashboard");
  const navigateToHome = () => setCurrentPage("hero");

  return (
    <>
      {currentPage === "hero" && (
        <HeroPage 
          onStartChat={navigateToChat}
          onViewDashboard={navigateToDashboard}
        />
      )}
      {currentPage === "chat" && (
        <ChatPage 
          onBackToHome={navigateToHome}
          onViewDashboard={navigateToDashboard}
        />
      )}
      {currentPage === "dashboard" && (
        <Dashboard 
          onStartChat={navigateToChat}
          onBackToHome={navigateToHome}
        />
      )}
    </>
  );
}
