import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export const TerminalDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      title: "Create MCP Tools",
      command: "hapi run petstore --mcp",
      description: "Convert any API into MCP tools instantly with HAPI CLI", 
      output: [
        "🚀 HAPI CLI v2.1.0",
        "📄 Loading petstore...",
        "✅ Found 8 endpoints", 
        "🔧 Generating MCP server...",
        "✨ MCP server running on :3000"
      ]
    },
    {
      title: "Chat with Tools",
      command: "qbot --url http://localhost:3000/mcp",
      description: "Use natural language to explore and interact with MCP tools",
      output: [
        "🤖 QBot REPL v1.0.0",
        "🔗 Connected to MCP server",
        "✅ Found 8 tools available",
        "💬 LLM ready for conversation",
        "qbot> Hello! What can you help me with?"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsTyping(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">See the HAPI MCP Stack in Action</h2>
        <p className="text-muted-foreground">Watch the complete workflow: create MCP tools, then chat with them</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Terminal Window */}
        <div className="order-2 md:order-1">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-primary">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-muted-foreground">Terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 bg-background font-mono text-sm space-y-2 min-h-[200px]">
              <div className="flex items-center gap-2 text-primary">
                <Terminal className="w-4 h-4" />
                <span>$</span>
                <span className={`${isTyping ? 'animate-pulse' : ''}`}>
                  {currentStepData.command}
                </span>
                <span className="animate-pulse">|</span>
              </div>
              
              {!isTyping && (
                <div className="space-y-1 pl-6 animate-in fade-in duration-500">
                  {currentStepData.output.map((line, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground animate-in slide-in-from-left duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="order-1 md:order-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {currentStepData.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {currentStepData.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Complete MCP ecosystem</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm text-muted-foreground">Natural language interaction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm text-muted-foreground">Multi-LLM provider support</span>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex gap-2 pt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-primary scale-110' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};