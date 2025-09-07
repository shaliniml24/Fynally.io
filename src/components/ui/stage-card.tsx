import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface StageCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  isActive?: boolean;
  stage: string;
}

const StageCard = ({ title, description, image, features, isActive = false, stage }: StageCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-smooth hover-lift ${isActive ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-medium">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full group" variant={isActive ? "hero" : "outline"}>
          Explore {stage}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
      
      {isActive && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      )}
    </Card>
  );
};

export default StageCard;