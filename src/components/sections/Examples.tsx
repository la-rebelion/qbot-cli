import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, User, Copy, ExternalLink, PlayCircle } from "lucide-react";

export const Examples = () => {
  const [activeTab, setActiveTab] = useState("developers");

  const developerExamples = [
    {
      title: "Kubernetes Operations",
      description: "Manage K8s clusters using natural language instead of kubectl commands",
      command: "qbot --url http://localhost:3000/mcp",
      output: [
        "🤖 QBot CLI v1.0.0",
        "🔗 Connected to MCP server",
        "✅ Found 12 tools available",
        "💬 LLM ready for conversation",
        "",
        "qbot> show me all failing pods in default namespace",
        "🔍 Executing: get_pods_by_status...",
        "📊 Found 2 failing pods:",
        "  - api-server-7d4c8b (CrashLoopBackOff)",
        "  - worker-3f2a1b (ImagePullBackOff)"
      ],
      benefits: ["No kubectl memorization", "Context-aware queries", "Natural language DevOps", "Works with any K8s MCP server"]
    },
    {
      title: "Infrastructure Monitoring",
      description: "Query monitoring systems and get insights using conversational interface",
      command: "qbot --url http://monitoring.company.com/mcp",
      output: [
        "🤖 QBot CLI v1.0.0",
        "🔗 Connected to monitoring MCP server",
        "✅ Found 8 monitoring tools",
        "💬 Ollama llama3.1 ready",
        "",
        "qbot> what's the CPU usage on production servers?",
        "📈 Executing: get_cpu_metrics...",
        "🖥️  Production CPU usage:",
        "  - prod-web-01: 78% (high)",
        "  - prod-db-01: 45% (normal)"
      ],
      benefits: ["Natural monitoring queries", "Multi-system integration", "Conversational insights", "LLM-powered analysis"]
    }
  ];

  const businessExamples = [
    {
      title: "SRE Team Incident Response",
      description: "Site Reliability Engineers can quickly diagnose and resolve issues",
      scenario: "Connect to monitoring MCP → Ask in natural language → Get actionable insights",
      interface: "Terminal-based conversational interface with structured outputs",
      benefits: ["Faster incident resolution", "Natural language queries", "Unified tool access"]
    },
    {
      title: "DevOps Onboarding",
      description: "New team members can be productive immediately without memorizing commands",
      scenario: "Install QBot → Connect to team MCP server → Start asking questions",
      interface: "Interactive CLI with help system and contextual guidance",
      benefits: ["Reduced learning curve", "Self-service infrastructure", "Consistent workflows"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See QBot in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real examples for DevOps teams and infrastructure management
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              DevOps Engineers
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              SRE Teams
            </TabsTrigger>
          </TabsList>

          <TabsContent value="developers" className="space-y-8">
            {developerExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {example.title}
                    <Button variant="outline" size="sm">
                      <PlayCircle className="w-4 h-4" />
                      Try Example
                    </Button>
                  </CardTitle>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Terminal */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Command</h4>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="bg-background border border-border rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-muted border-b border-border">
                          <span className="text-sm font-mono text-muted-foreground">Terminal</span>
                        </div>
                        <div className="p-4 font-mono text-sm space-y-1">
                          <div className="text-primary">$ {example.command}</div>
                          <div className="space-y-1 text-muted-foreground">
                            {example.output.map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Benefits</h4>
                      <div className="space-y-3">
                        {example.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = 'https://github.com/la-rebelion/qbot-cli#usage'}>
                        <ExternalLink className="w-4 h-4" />
                        View Full Documentation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="business" className="space-y-8">
            {businessExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {example.title}
                    <Button variant="outline" size="sm">
                      <PlayCircle className="w-4 h-4" />
                      See Demo
                    </Button>
                  </CardTitle>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Workflow */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Workflow</h4>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <div className="space-y-4">
                          {example.scenario.split(' → ').map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-medium">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Interface:</strong> {example.interface}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Business Impact</h4>
                      <div className="space-y-3">
                        {example.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="secondary" className="w-full mt-4" onClick={() => window.location.href = 'https://github.com/la-rebelion/qbot-cli/releases'}>
                        <ExternalLink className="w-4 h-4" />
                        Download QBot CLI
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg font-medium mb-2">
                    "QBot eliminated the need to memorize dozens of kubectl commands."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">
                    Senior DevOps Engineer at CloudTech
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <blockquote className="text-lg font-medium mb-2">
                    "Our incident response time dropped by 60% using QBot."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">
                    SRE Lead at FinanceCorps
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};