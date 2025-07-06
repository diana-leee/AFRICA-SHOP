
import { Card, CardContent } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    {
      name: "Vêtements Traditionnels",
      description: "Boubous, robes wax, accessoires authentiques",
      icon: "👗",
      count: "2,500+ produits"
    },
    {
      name: "Artisanat d'Art",
      description: "Sculptures, masques, objets décoratifs",
      icon: "🎨",
      count: "3,200+ créations"
    },
    {
      name: "Cosmétiques Naturels",
      description: "Beurre de karité, huiles, soins bio",
      icon: "🌿",
      count: "800+ produits"
    },
    {
      name: "Bijoux & Accessoires",
      description: "Colliers, bracelets, sacs artisanaux",
      icon: "💍",
      count: "1,800+ pièces"
    }
  ];

  return (
    <section className="py-16 african-pattern">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-accent gold-shimmer bg-clip-text text-transparent">Catégories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explorez notre large gamme de produits africains authentiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                <p className="text-primary font-medium text-sm">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
