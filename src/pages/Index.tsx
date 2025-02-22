
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm an AI assistant. I'm here to help you with any questions you might have.",
        role: 'assistant',
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 glass border-b px-4 py-3">
        <div className="container flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">AI Assistant</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">New Chat</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        <div className="container h-full py-4">
          <div className="flex flex-col h-full max-w-3xl mx-auto">
            <Card className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground animate-fade-up">
                  Start a conversation...
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 animate-fade-up ${
                        message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`relative flex w-fit max-w-[75%] flex-col gap-2 rounded-lg px-4 py-2 ${
                          message.role === 'assistant'
                            ? 'glass'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {isLoading && (
                <div className="flex items-center gap-2 animate-fade-up">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-100" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-200" />
                </div>
              )}
            </Card>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="pr-12"
                  disabled={isLoading}
                />
                <Button
                  size="icon"
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1 top-1 h-8 w-8"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
