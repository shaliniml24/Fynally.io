import { ArrowRight, BookOpen, Users, Target, Zap } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface StageDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  resources: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  nextStage?: string;
}

const StageDetailSection = ({ id, title, subtitle, description, image, resources, nextStage }: StageDetailProps) => {
  const scrollToNext = () => {
    if (nextStage) {
      const element = document.getElementById(nextStage);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-large">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-primary font-semibold mb-4">{subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <Card key={index} className="hover-lift transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of others who have successfully navigated this stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your {title} Journey
                </Button>
                <Button variant="outline" size="lg">
                  View Resources
                </Button>
              </div>
            </div>

            {nextStage && (
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={scrollToNext}
                className="group"
              >
                Continue to Next Stage
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageDetailSection;