"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, BotIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  about:
    "I'm a full-stack developer and UI/UX designer with over 5 years of experience. I specialize in React, Next.js, and building scalable web applications. I'm passionate about creating seamless digital experiences!",
  services:
    "I offer Web Development (React & Next.js), Backend APIs (Node.js & Python), UI/UX Design, Performance Optimization, Security & Testing, and Automation & DevOps services.",
  projects:
    "I've worked on various projects including a Modern E-Commerce Platform, Task Management Application, and AI Writing Assistant. You can check out all my projects on the Projects page!",
  contact:
    "You can reach me at contact@example.com or call +1 (234) 567-890. I'm based in San Francisco, CA. Feel free to use the contact form on the Contact page!",
  skills:
    "My tech stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, Docker, AWS, and more. I'm proficient in both frontend and backend development.",
  default:
    "Hi! I can tell you about my services, projects, skills, or how to get in touch. Just ask!",
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (
    message.includes("about") ||
    message.includes("who are you") ||
    message.includes("tell me about yourself")
  ) {
    return botResponses.about;
  }
  if (
    message.includes("service") ||
    message.includes("what do you do") ||
    message.includes("what can you do") ||
    message.includes("offer")
  ) {
    return botResponses.services;
  }
  if (
    message.includes("project") ||
    message.includes("work") ||
    message.includes("portfolio")
  ) {
    return botResponses.projects;
  }
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach") ||
    message.includes("phone")
  ) {
    return botResponses.contact;
  }
  if (
    message.includes("skill") ||
    message.includes("tech") ||
    message.includes("technology")
  ) {
    return botResponses.skills;
  }

  return botResponses.default;
}
export function ChatbotWidget() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn more about me. Ask me about my services, projects, skills, or how to get in touch!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <>
      {/* Chatbot Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent-foreground to-primary hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <BotIcon className="w-6 h-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-foreground to-primary p-4 text-primary-foreground">
            <h3 className="font-semibold text-lg">Chat with my AI</h3>
            <p className="text-sm opacity-90">
              I am here anytime to answer your questions
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-4 py-2",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground border border-border"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={cn(
                      "text-xs mt-1",
                      message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground/70"
                    )}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-background border-border"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
