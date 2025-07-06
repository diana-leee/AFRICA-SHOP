
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Boubou Traditionnel Brodé",
      price: "89€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Vêtements",
      seller: "Fatima Koné",
      country: "Mali"
    },
    {
      id: 2,
      name: "Masque Artisanal Bambara",
      price: "125€",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      category: "Artisanat",
      seller: "Ibrahim Traoré",
      country: "Burkina Faso"
    },
    {
      id: 3,
      name: "Beurre de Karité Bio",
      price: "24€",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Cosmétiques",
      seller: "Aïcha Ndiaye",
      country: "Sénégal"
    },
    {
      id: 4,
      name: "Panier Tressé Main",
      price: "45€",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      category: "Artisanat",
      seller: "Aminata Diallo",
      country: "Guinée"
    },
    {
      id: 5,
      name: "Robe Wax Moderne",
      price: "67€",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      category: "Vêtements",
      seller: "Grace Asante",
      country: "Ghana"
    },
    {
      id: 6,
      name: "Huile d'Argan Pure",
      price: "35€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Cosmétiques",
      seller: "Lalla Zahra",
      country: "Maroc"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produits <span className="text-primary">Vedettes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection exceptionnelle de produits authentiques, 
            créés par des artisans talentueux de tout le continent africain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Voir tous les produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
