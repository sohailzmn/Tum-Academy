import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface PricingType {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ pricing }: { pricing: PricingType }) => {
  return (
    <Card className={`relative overflow-hidden h-full flex flex-col ${pricing.isPopular ? 'border-primary subtle-glow' : 'glass-card'}`}>
      {pricing.isPopular && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-bl-md rounded-tr-md rounded-br-none rounded-tl-none">Empfohlen</Badge>
        </div>
      )}
      
      <CardHeader className="pt-6 pb-0 text-center">
        <h3 className="text-xl font-semibold">{pricing.title}</h3>
        <div className="mt-4 mb-2">
          <span className="text-4xl font-bold">{pricing.price}€</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 pb-0 flex-grow">
        <p className="text-sm text-muted-foreground text-center mb-6">
          {pricing.description}
        </p>
        
        <ul className="space-y-3">
          {pricing.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-6 pb-6">
        <Button 
          className={`w-full ${pricing.isPopular ? '' : 'bg-secondary hover:bg-secondary/90'}`}
          variant={pricing.isPopular ? "default" : "secondary"}
        >
          Jetzt buchen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
