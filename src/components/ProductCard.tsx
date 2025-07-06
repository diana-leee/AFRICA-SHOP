
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Shirt, Palette, Leaf } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  seller: string;
  country: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Fonction pour obtenir l'icône selon la catégorie
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vêtements':
        return Shirt;
      case 'artisanat':
        return Palette;
      case 'cosmétiques':
        return Leaf;
      default:
        return Palette;
    }
  };

  const IconComponent = getCategoryIcon(product.category);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-slide-in">
      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center">
        <IconComponent size={80} className="text-primary group-hover:scale-110 transition-transform duration-300" />
        <Badge className="absolute top-2 left-2 bg-primary text-white">
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">Par {product.seller}</p>
        <p className="text-xs text-muted-foreground mb-3">📍 {product.country}</p>
        <p className="text-2xl font-bold text-primary">{product.price}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full african-gradient border-0 hover:opacity-90 transition-opacity">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
