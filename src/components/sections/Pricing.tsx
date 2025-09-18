import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { BetaKeyModal } from "@/components/BetaKeyModal";

export const Pricing = () => {
  const [showBetaModal, setShowBetaModal] = useState(false);
  const features = [
    "Unlimited MCP connections",
    "Natural language interface",
    "Multi-LLM provider support",
    "Full DevOps workflow support",
    "Valid beta key required",
    "No unexpected charges",
    "Early access to all features"
  ];

  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your DevOps Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free while in beta. Transform your infrastructure workflows.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-glow">
            <CardHeader className="text-center pb-2">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium mb-4">
                Beta Access
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Free Forever
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                No card required
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Beta Promise</h4>
                <p className="text-sm text-muted-foreground">
                  Take QBot for a spin at no cost during our beta period. Explore natural language DevOps 
                  and help us shape the future of infrastructure management.
                </p>
                <p className="text-sm text-muted-foreground">
                  You will be informed beforehand about any changes that may affect your access 
                  or introduce additional costs.
                </p>
              </div>

              <Button 
                size="lg" 
                variant="cta" 
                className="w-full"
                onClick={() => setShowBetaModal(true)}
              >
                Get Your Beta Key
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Rate limits apply during beta. No unexpected charges guaranteed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <BetaKeyModal 
        open={showBetaModal} 
        onClose={() => setShowBetaModal(false)} 
      />
    </section>
  );
};