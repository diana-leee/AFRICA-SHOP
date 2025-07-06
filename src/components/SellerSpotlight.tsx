
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SellerSpotlight = () => {
  const featuredSellers = [
    {
      name: "Fatima Koné",
      country: "Mali",
      specialty: "Textiles traditionnels",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=faces",
      products: 45,
      rating: 4.9,
      story: "Artisane depuis 20 ans, Fatima perpétue l'art du tissage malien avec passion."
    },
    {
      name: "Ibrahim Traoré",
      country: "Burkina Faso",
      specialty: "Sculptures sur bois",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop&crop=faces",
      products: 32,
      rating: 4.8,
      story: "Sculpteur reconnu, Ibrahim crée des œuvres uniques inspirées de la culture burkinabé."
    },
    {
      name: "Aïcha Ndiaye",
      country: "Sénégal",
      specialty: "Cosmétiques naturels",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop&crop=faces",
      products: 28,
      rating: 5.0,
      story: "Spécialiste des soins naturels, Aïcha transforme les plantes locales en produits de beauté."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-primary">Artisans Vedettes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rencontrez les créateurs talentueux qui donnent vie à nos produits exceptionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSellers.map((seller, index) => (
            <Card 
              key={seller.name} 
              className="group hover:shadow-xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src={seller.image} 
                    alt={seller.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold mb-1">{seller.name}</h3>
                  <Badge variant="secondary" className="mb-2">📍 {seller.country}</Badge>
                  <p className="text-primary font-medium">{seller.specialty}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Produits:</span>
                    <span className="font-medium">{seller.products}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Note:</span>
                    <span className="font-medium text-accent">⭐ {seller.rating}/5</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {seller.story}
                </p>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Voir la boutique
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="african-gradient border-0 hover:opacity-90 transition-opacity">
            Découvrir tous nos artisans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellerSpotlight;
