import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users, Zap, Target, Workflow, Terminal } from "lucide-react";

export const WhyQBot = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Zero Learning Curve",
      description: "Talk to your infrastructure in plain English - no commands to memorize",
      metric: "Instant productivity",
      color: "text-primary"
    },
    {
      icon: Terminal,
      title: "Natural Language DevOps",
      description: "Connect to any MCP server and manage infrastructure conversationally",
      metric: "Human-friendly",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Team Onboarding",
      description: "New DevOps engineers become productive immediately without CLI expertise",
      metric: "Self-service ready",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Multi-Tool Integration",
      description: "Single interface for Kubernetes, monitoring, CI/CD, and cloud platforms",
      metric: "Unified workflow",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Intelligent Context",
      description: "LLM-powered understanding of DevOps workflows and infrastructure patterns",
      metric: "Context-aware",
      color: "text-primary"
    },
    {
      icon: Workflow,
      title: "Multi-LLM Support",
      description: "Works with Ollama, OpenAI, Anthropic, and other LLM providers",
      metric: "Provider agnostic",
      color: "text-secondary"
    }
  ];

  const audiences = [
    {
      title: "For DevOps Engineers",
      benefits: [
        "Natural language infrastructure queries",
        "No command memorization required",
        "Faster incident response times", 
        "Integrated tool access via MCP"
      ],
      icon: "⚙️"
    },
    {
      title: "For SRE Teams",  
      benefits: [
        "Faster troubleshooting workflows",
        "Conversational monitoring queries",
        "Unified incident response interface",
        "Reduced cognitive load during incidents"
      ],
      icon: "🚨"
    },
    {
      title: "For Platform Teams",
      benefits: [
        "Self-service infrastructure access",
        "Consistent tooling across teams",
        "Reduced support tickets", 
        "Scalable knowledge sharing"
      ],
      icon: "🏗️"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose QBot?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The natural language interface that transforms how DevOps teams work
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {benefit.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Audience-Specific Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{audience.icon}</span>
                  <CardTitle className="text-lg">{audience.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              {/* Background gradient */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-primary opacity-5 rounded-full blur-xl"></div>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Real Impact</h3>
            <p className="text-muted-foreground">See what DevOps teams achieve with QBot</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">60%</div>
              <div className="text-sm text-muted-foreground">Faster Incident Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">80%</div>
              <div className="text-sm text-muted-foreground">Reduced Command Errors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3x</div>
              <div className="text-sm text-muted-foreground">Faster Onboarding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Natural Language</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};