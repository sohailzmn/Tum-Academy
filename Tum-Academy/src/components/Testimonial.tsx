
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonial = ({ testimonial }: { testimonial: TestimonialType }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      size={16}
      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}
    />
  ));

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex">{stars}</div>
        </div>
        <p className="text-muted-foreground text-sm flex-grow">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
