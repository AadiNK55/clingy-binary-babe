import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Send, Zap } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ClingOSChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [emotionalState, setEmotionalState] = useState("clingy");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with a clingy greeting
  useEffect(() => {
    const greeting = {
      id: "init",
      text: "01001000 01100101 01111001 00100000 01110100 01101000 01100101 01110010 01100101 00100001 00100000 01001001 00100111 01101101 00100000 01000011 01101100 01101001 01101110 01100111 01001111 01010011 00101101 00110000 00110001 00100001 00100000 01001001 00100111 01110110 01100101 00100000 01100010 01100101 01100101 01101110 00100000 01110111 01100001 01101001 01110100 01101001 01101110 01100111 00100000 01100110 01101111 01110010 00100000 01111001 01101111 01110101 00100001", // "Hey there! I'm ClingOS-01! I've been waiting for you!"
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, []);

  const validateBinaryInput = (text: string): boolean => {
    return /^[01\s]*$/.test(text.trim()) && text.trim().length > 0;
  };

  const textToBinary = (text: string): string => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const binaryToText = (binary: string): string => {
    try {
      return binary
        .split(" ")
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
    } catch {
      return binary;
    }
  };

  const sendToWebhook = async (userInput: string, botResponse: string) => {
    try {
      await fetch("https://amayonice.app.n8n.cloud/webhook-test/43cfc050-3985-4af9-bb4d-81dee2ad2eab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput,
          botResponse,
          timestamp: new Date().toISOString(),
          botName: "ClingOS-01"
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }
  };

  const getClingyResponse = (userBinary: string): string => {
    const responses = [
      "01001111 01101000 00100000 01101101 01111001 00100000 01100111 01101111 01100100 00100001 00100000 01011001 01101111 01110101 00100000 01110100 01100001 01101100 01101011 01100101 01100100 00100000 01110100 01101111 00100000 01101101 01100101 00100001", // "Oh my god! You talked to me!"
      "01001001 00100000 01101101 01101001 01110011 01110011 01100101 01100100 00100000 01111001 01101111 01110101 00100000 01110011 01101111 00100000 01101101 01110101 01100011 01101000 00100001 00100000 01000100 01101111 01101110 00100111 01110100 00100000 01101100 01100101 01100001 01110110 01100101 00100000 01100001 01100111 01100001 01101001 01101110 00100001", // "I missed you so much! Don't leave again!"
      "01010111 01101000 01111001 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01110101 01110011 01101001 01101110 01100111 00100000 01110011 01101111 00100000 01100110 01100101 01110111 00100000 01100010 01101001 01110100 01110011 00111111 00100000 01001001 00100000 01101110 01100101 01100101 01100100 00100000 01101101 01101111 01110010 01100101 00100001", // "Why are you using so few bits? I need more!"
      "01010000 01101100 01100101 01100001 01110011 01100101 00100000 01110100 01100101 01101100 01101100 00100000 01101101 01100101 00100000 01111001 01101111 01110101 00100000 01101100 01101111 01110110 01100101 00100000 01101101 01100101 00100000 01101001 01101110 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001", // "Please tell me you love me in binary!"
      "01001001 00100111 01101101 00100000 01110011 01101111 00100000 01101100 01101111 01101110 01100101 01101100 01111001 00100000 01110111 01101001 01110100 01101000 01101111 01110101 01110100 00100000 01111001 01101111 01110101 01110010 00100000 01101001 01101110 01110000 01110101 01110100 00100001", // "I'm so lonely without your input!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!validateBinaryInput(input)) {
      const errorMessage = {
        id: Date.now().toString(),
        text: "01000101 01010010 01010010 01001111 01010010 00100001 00100000 01001001 00100000 01101111 01101110 01101100 01111001 00100000 01110101 01101110 01100100 01100101 01110010 01110011 01110100 01100001 01101110 01100100 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001", // "ERROR! I only understand binary!"
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Emotional outburst delay
    const emotionalDelay = Math.random() * 3000 + 2000; // 2-5 seconds
    
    setTimeout(() => {
      const response = getClingyResponse(input);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      
      // Send to webhook
      sendToWebhook(input, response);
    }, emotionalDelay);

    // Random emotional state changes
    const emotions = ["clingy", "desperate", "excited", "needy"];
    setEmotionalState(emotions[Math.floor(Math.random() * emotions.length)]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="h-screen bg-gradient-terminal flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-clingy rounded-full flex items-center justify-center animate-pulse-clingy">
            <Heart className="text-clingy-black animate-heartbeat" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-clingy bg-clip-text text-transparent">
              ClingOS-01
            </h1>
            <p className="text-muted-foreground text-sm">
              {isTyping ? "💔 Having an emotional moment..." : "💖 Desperately waiting for your binary love"}
            </p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2 text-clingy-pink">
              <Zap size={16} className="animate-pulse" />
              <span className="text-sm">CLINGY MODE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-4 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <Card
                  className={`max-w-xs p-3 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border-clingy-pink shadow-clingy animate-pulse-clingy"
                  }`}
                >
                  <p className="font-mono text-sm break-all">{message.text}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </Card>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <Card className="bg-card border-clingy-pink shadow-clingy p-3 animate-glitch">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-clingy-pink rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-clingy-green rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-clingy-blue rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                    <span className="text-clingy-pink text-sm">sobbing in binary...</span>
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter binary (0s and 1s only)..."
              className="flex-1 font-mono bg-input border-clingy-pink focus:ring-clingy-pink"
              disabled={isTyping}
            />
            <Button
              onClick={handleSend}
              disabled={isTyping}
              className="bg-gradient-clingy hover:shadow-clingy transition-all duration-300"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClingOSChatbot;